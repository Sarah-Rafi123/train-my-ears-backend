const prisma = require("../config/database")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const crypto = require("crypto")

/**
 * Auth service - handles authentication and authorization
 */
class AuthService {
  /**
   * Generate JWT token
   * @param {string} userId - User ID
   * @returns {string} JWT token
   */
  generateToken(userId) {
    return jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || "7d",
    })
  }

  /**
   * Generate refresh token
   * @param {string} userId - User ID
   * @returns {string} Refresh token
   */
  async generateRefreshToken(userId) {
    // Set expiry to 30 days
    const expiresAt = new Date()
    expiresAt.setDate(expiresAt.getDate() + 30)

    // Create refresh token in database
    const refreshToken = await prisma.refreshToken.create({
      data: {
        token: crypto.randomBytes(40).toString("hex"),
        userId,
        expiresAt,
      },
    })

    return refreshToken.token
  }

  /**
   * Register a new user
   * @param {Object} userData - User data (name, email, password)
   * @returns {Object} User data with tokens
   */
  async register(userData) {
    const { name, email, password } = userData

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      throw new Error("User with this email already exists")
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create user
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

    // Generate tokens
    const token = this.generateToken(user.id)
    const refreshToken = await this.generateRefreshToken(user.id)

    return {
      user,
      token,
      refreshToken,
    }
  }

  /**
   * Login user
   * @param {Object} credentials - User credentials (email, password)
   * @returns {Object} User data with tokens
   */
  async login(credentials) {
    const { email, password } = credentials

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      throw new Error("Invalid credentials")
    }

    // Check if password exists (for users created before password was required)
    if (!user.password) {
      throw new Error("Account requires password reset")
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      throw new Error("Invalid credentials")
    }

    // Generate tokens
    const token = this.generateToken(user.id)
    const refreshToken = await this.generateRefreshToken(user.id)

    // Return user data without password
    const { password: _, ...userData } = user

    return {
      user: userData,
      token,
      refreshToken,
    }
  }

  /**
   * Logout user
   * @param {string} refreshToken - Refresh token
   */
  async logout(refreshToken) {
    if (!refreshToken) {
      throw new Error("Refresh token is required")
    }

    // Delete refresh token from database
    await prisma.refreshToken.deleteMany({
      where: { token: refreshToken },
    })
  }

  /**
   * Refresh access token
   * @param {string} refreshToken - Refresh token
   * @returns {Object} New access token
   */
  async refreshAccessToken(refreshToken) {
    if (!refreshToken) {
      throw new Error("Refresh token is required")
    }

    // Find refresh token in database
    const storedToken = await prisma.refreshToken.findUnique({
      where: { token: refreshToken },
    })

    if (!storedToken) {
      throw new Error("Invalid refresh token")
    }

    // Check if token is expired
    if (new Date() > storedToken.expiresAt) {
      // Delete expired token
      await prisma.refreshToken.delete({
        where: { id: storedToken.id },
      })

      throw new Error("Refresh token expired")
    }

    // Generate new access token
    const token = this.generateToken(storedToken.userId)

    return { token }
  }

  /**
   * Verify token and get user
   * @param {string} token - JWT token
   * @returns {Object} User data
   */
  async verifyTokenAndGetUser(token) {
    if (!token) {
      throw new Error("No token provided")
    }

    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // Get user from database
      const user = await prisma.user.findUnique({
        where: { id: decoded.userId },
        select: {
          id: true,
          name: true,
          email: true,
          currentLevel: true,
          currentStreak: true,
          overallAccuracy: true,
          totalGamesPlayed: true,
        },
      })

      if (!user) {
        throw new Error("User not found")
      }

      return user
    } catch (error) {
      if (error.name === "JsonWebTokenError") {
        throw new Error("Invalid token")
      }
      if (error.name === "TokenExpiredError") {
        throw new Error("Token expired")
      }
      throw error
    }
  }
}

module.exports = new AuthService()
