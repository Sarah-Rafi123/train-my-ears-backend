const prisma = require("../config/database")

// Check user's subscription status
const getSubscriptionStatus = async (req, res) => {
  try {
    const { userId } = req.params

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        subscription: true,
      },
    })

    if (!user) {
      return res.status(404).json({
        success: false,
        error: { message: "User not found" },
      })
    }

    const hasActiveSubscription =
      user.subscription && user.subscription.status === "ACTIVE" && user.subscription.endDate > new Date()

    res.json({
      success: true,
      data: {
        hasActiveSubscription,
        subscription: user.subscription,
        canAccessLevel3Plus: hasActiveSubscription,
      },
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: { message: "Server error checking subscription status" },
    })
  }
}

// Create subscription
const createSubscription = async (req, res) => {
  try {
    const { userId, type, paymentMethod, externalId } = req.body

    // Get subscription pricing from app settings
    const priceKey = type === "MONTHLY" ? "monthly_subscription_price" : "yearly_subscription_price"
    const priceSetting = await prisma.appSettings.findUnique({
      where: { key: priceKey },
    })

    if (!priceSetting) {
      return res.status(400).json({
        success: false,
        error: { message: "Subscription pricing not configured" },
      })
    }

    const amount = Number.parseFloat(priceSetting.value)
    const durationMonths = type === "MONTHLY" ? 1 : 12
    const endDate = new Date()
    endDate.setMonth(endDate.getMonth() + durationMonths)

    // Create or update subscription
    const subscription = await prisma.subscription.upsert({
      where: { userId },
      update: {
        type,
        status: "ACTIVE",
        startDate: new Date(),
        endDate,
        amount,
        paymentMethod,
        externalId,
      },
      create: {
        userId,
        type,
        status: "ACTIVE",
        startDate: new Date(),
        endDate,
        amount,
        currency: "USD",
        paymentMethod,
        externalId,
      },
    })

    res.status(201).json({
      success: true,
      data: { subscription },
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: { message: "Server error creating subscription" },
    })
  }
}

// Cancel subscription
const cancelSubscription = async (req, res) => {
  try {
    const { userId } = req.params

    const subscription = await prisma.subscription.update({
      where: { userId },
      data: {
        status: "CANCELLED",
      },
    })

    res.json({
      success: true,
      data: { subscription },
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: { message: "Server error cancelling subscription" },
    })
  }
}

// Get subscription pricing
const getSubscriptionPricing = async (req, res) => {
  try {
    const [monthlyPrice, yearlyPrice] = await Promise.all([
      prisma.appSettings.findUnique({ where: { key: "monthly_subscription_price" } }),
      prisma.appSettings.findUnique({ where: { key: "yearly_subscription_price" } }),
    ])

    res.json({
      success: true,
      data: {
        monthly: {
          price: Number.parseFloat(monthlyPrice?.value || "2.95"),
          currency: "USD",
        },
        yearly: {
          price: Number.parseFloat(yearlyPrice?.value || "29.95"),
          currency: "USD",
        },
      },
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: { message: "Server error fetching subscription pricing" },
    })
  }
}

module.exports = {
  getSubscriptionStatus,
  createSubscription,
  cancelSubscription,
  getSubscriptionPricing,
}
