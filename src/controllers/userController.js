const prisma = require("../config/database")
const { validationResult } = require("express-validator")
const bcrypt = require("bcryptjs")

// Register user with minimal info (name, email, and password)
const registerUser = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: { message: "Validation error", details: errors.array() },
      })
    }

    const { name, email, password } = req.body

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: { message: "User with this email already exists" },
      })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create new user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        currentLevel: 1,
        currentStreak: 0,
        overallAccuracy: 0.0,
        totalGamesPlayed: 0,
      },
      select: {
        id: true,
        name: true,
        email: true,
        currentLevel: true,
        currentStreak: true,
        overallAccuracy: true,
        totalGamesPlayed: true,
        createdAt: true,
      },
    })

    res.status(201).json({
      success: true,
      data: { user },
    })
  } catch (error) {
    console.error("User registration error:", error)
    res.status(500).json({
      success: false,
      error: { message: "Server error during registration" },
    })
  }
}

// Get user profile and stats
const getUserProfile = async (req, res) => {
  try {
    const { userId } = req.params

    // First get the user with subscription
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

    // Get game sessions count separately
    const gameSessionsCount = await prisma.gameSession.count({
      where: { userId },
    })

    // Remove password from response
    const { password, ...userWithoutPassword } = user

    // Combine the data
    const userProfile = {
      ...userWithoutPassword,
      _count: {
        gameSessions: gameSessionsCount,
      },
    }

    res.json({
      success: true,
      data: { user: userProfile },
    })
  } catch (error) {
    console.error("Get user profile error:", error)
    res.status(500).json({
      success: false,
      error: { message: "Server error fetching user profile" },
    })
  }
}

// Update user stats after game session
const updateUserStats = async (req, res) => {
  try {
    const { userId } = req.params
    const { level, accuracy, streak, gamesPlayed } = req.body

    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        currentLevel: level,
        currentStreak: streak,
        overallAccuracy: accuracy,
        totalGamesPlayed: gamesPlayed,
        lastPlayedAt: new Date(),
      },
      select: {
        id: true,
        name: true,
        currentLevel: true,
        currentStreak: true,
        overallAccuracy: true,
        totalGamesPlayed: true,
        lastPlayedAt: true,
      },
    })

    res.json({
      success: true,
      data: { user },
    })
  } catch (error) {
    console.error("Update user stats error:", error)
    res.status(500).json({
      success: false,
      error: { message: "Server error updating user stats" },
    })
  }
}

// Update user profile
const updateUserProfile = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: { message: "Validation error", details: errors.array() },
      })
    }

    const { userId } = req.params
    const { name, email, currentPassword, newPassword } = req.body

    // Get current user
    const user = await prisma.user.findUnique({
      where: { id: userId },
    })

    if (!user) {
      return res.status(404).json({
        success: false,
        error: { message: "User not found" },
      })
    }

    // Check if email is being changed and if it's already in use
    if (email && email !== user.email) {
      const existingUser = await prisma.user.findUnique({
        where: { email },
      })

      if (existingUser) {
        return res.status(400).json({
          success: false,
          error: { message: "Email already in use" },
        })
      }
    }

    // Prepare update data
    const updateData = {}
    if (name) updateData.name = name
    if (email) updateData.email = email

    // Handle password change if requested
    if (newPassword) {
      // Verify current password
      if (!currentPassword) {
        return res.status(400).json({
          success: false,
          error: { message: "Current password is required to set a new password" },
        })
      }

      // If user has a password, verify it
      if (user.password) {
        const isPasswordValid = await bcrypt.compare(currentPassword, user.password)
        if (!isPasswordValid) {
          return res.status(401).json({
            success: false,
            error: { message: "Current password is incorrect" },
          })
        }
      }

      // Hash new password
      updateData.password = await bcrypt.hash(newPassword, 12)
    }

    // Update user
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        currentLevel: true,
        currentStreak: true,
        overallAccuracy: true,
        totalGamesPlayed: true,
        lastPlayedAt: true,
        updatedAt: true,
      },
    })

    res.json({
      success: true,
      data: { user: updatedUser },
    })
  } catch (error) {
    console.error("Update user profile error:", error)
    res.status(500).json({
      success: false,
      error: { message: "Server error updating user profile" },
    })
  }
}

module.exports = {
  registerUser,
  getUserProfile,
  updateUserStats,
  updateUserProfile,
}
