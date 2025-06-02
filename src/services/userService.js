const prisma = require("../config/database")
const bcrypt = require("bcryptjs")

/**
 * User service - handles all user-related business logic
 */
class UserService {
  /**
   * Get user profile by ID
   * @param {string} userId - User ID
   * @returns {Object} User profile with subscription and game session count
   */
  async getUserProfile(userId) {
    // Get user with subscription
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        subscription: true,
      },
    })

    if (!user) {
      throw new Error("User not found")
    }

    // Get game sessions count separately
    const gameSessionsCount = await prisma.gameSession.count({
      where: { userId },
    })

    // Remove password from response
    const { password, ...userWithoutPassword } = user

    // Combine the data
    return {
      ...userWithoutPassword,
      _count: {
        gameSessions: gameSessionsCount,
      },
    }
  }

  /**
   * Update user stats
   * @param {string} userId - User ID
   * @param {Object} statsData - Stats data (level, accuracy, streak, gamesPlayed)
   * @returns {Object} Updated user object
   */
  async updateUserStats(userId, statsData) {
    const { level, accuracy, streak, gamesPlayed } = statsData

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

    return user
  }

  /**
   * Update user profile
   * @param {string} userId - User ID
   * @param {Object} profileData - Profile data (name, email, currentPassword, newPassword)
   * @returns {Object} Updated user object
   */
  async updateUserProfile(userId, profileData) {
    const { name, email, currentPassword, newPassword } = profileData

    // Get current user
    const user = await prisma.user.findUnique({
      where: { id: userId },
    })

    if (!user) {
      throw new Error("User not found")
    }

    // Check if email is being changed and if it's already in use
    if (email && email !== user.email) {
      const existingUser = await prisma.user.findUnique({
        where: { email },
      })

      if (existingUser) {
        throw new Error("Email already in use")
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
        throw new Error("Current password is required to set a new password")
      }

      // If user has a password, verify it
      if (user.password) {
        const isPasswordValid = await bcrypt.compare(currentPassword, user.password)
        if (!isPasswordValid) {
          throw new Error("Current password is incorrect")
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

    return updatedUser
  }
}

module.exports = new UserService()
