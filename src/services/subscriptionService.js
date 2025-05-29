const prisma = require("../config/database")

/**
 * Subscription service - handles subscription-related business logic
 */
class SubscriptionService {
  /**
   * Get subscription status for a user
   * @param {string} userId - User ID
   * @returns {Object} Subscription status
   */
  async getSubscriptionStatus(userId) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        subscription: true,
      },
    })

    if (!user) {
      throw new Error("User not found")
    }

    const hasActiveSubscription =
      user.subscription && user.subscription.status === "ACTIVE" && user.subscription.endDate > new Date()

    return {
      hasActiveSubscription,
      subscription: user.subscription,
      canAccessLevel3Plus: hasActiveSubscription,
    }
  }

  /**
   * Create a subscription for a user
   * @param {Object} subscriptionData - Subscription data
   * @returns {Object} Created subscription
   */
  async createSubscription(subscriptionData) {
    const { userId, type, paymentMethod, externalId } = subscriptionData

    // Validate user exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
    })

    if (!user) {
      throw new Error("User not found")
    }

    // Get subscription pricing from app settings
    const priceKey = type === "MONTHLY" ? "monthly_subscription_price" : "yearly_subscription_price"
    const priceSetting = await prisma.appSettings.findUnique({
      where: { key: priceKey },
    })

    if (!priceSetting) {
      throw new Error("Subscription pricing not configured")
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

    return subscription
  }

  /**
   * Cancel a user's subscription
   * @param {string} userId - User ID
   * @returns {Object} Updated subscription
   */
  async cancelSubscription(userId) {
    // Check if user has a subscription
    const subscription = await prisma.subscription.findUnique({
      where: { userId },
    })

    if (!subscription) {
      throw new Error("User has no active subscription")
    }

    // Update subscription status
    const updatedSubscription = await prisma.subscription.update({
      where: { userId },
      data: {
        status: "CANCELLED",
      },
    })

    return updatedSubscription
  }

  /**
   * Get subscription pricing
   * @returns {Object} Subscription pricing
   */
  async getSubscriptionPricing() {
    const [monthlyPrice, yearlyPrice] = await Promise.all([
      prisma.appSettings.findUnique({ where: { key: "monthly_subscription_price" } }),
      prisma.appSettings.findUnique({ where: { key: "yearly_subscription_price" } }),
    ])

    return {
      monthly: {
        price: Number.parseFloat(monthlyPrice?.value || "2.95"),
        currency: "USD",
      },
      yearly: {
        price: Number.parseFloat(yearlyPrice?.value || "29.95"),
        currency: "USD",
      },
    }
  }
}

module.exports = new SubscriptionService()
