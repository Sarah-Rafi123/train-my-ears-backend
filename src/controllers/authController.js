const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { validationResult } = require("express-validator")
const prisma = require("../config/database")

// Generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  })
}

// Generate refresh token
const generateRefreshToken = async (userId) => {
  // Set expiry to 30 days
  const expiresAt = new Date()
  expiresAt.setDate(expiresAt.getDate() + 30)

  // Create refresh token in database
  const refreshToken = await prisma.refreshToken.create({
    data: {
      token: require("crypto").randomBytes(40).toString("hex"),
      userId,
      expiresAt,
    },
  })

  return refreshToken.token
}

// Register user
const register = async (req, res) => {
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
    const token = generateToken(user.id)
    const refreshToken = await generateRefreshToken(user.id)

    res.status(201).json({
      success: true,
      data: {
        user,
        token,
        refreshToken,
      },
    })
  } catch (error) {
    console.error("Registration error:", error)
    res.status(500).json({
      success: false,
      error: { message: "Server error during registration" },
    })
  }
}

// Login user
const login = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: { message: "Validation error", details: errors.array() },
      })
    }

    const { email, password } = req.body

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      return res.status(401).json({
        success: false,
        error: { message: "Invalid credentials" },
      })
    }

    // Check if password exists (for users created before password was required)
    if (!user.password) {
      return res.status(401).json({
        success: false,
        error: { message: "Account requires password reset" },
      })
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        error: { message: "Invalid credentials" },
      })
    }

    // Generate tokens
    const token = generateToken(user.id)
    const refreshToken = await generateRefreshToken(user.id)

    // Return user data without password
    const userData = {
      id: user.id,
      name: user.name,
      email: user.email,
      currentLevel: user.currentLevel,
      currentStreak: user.currentStreak,
      overallAccuracy: user.overallAccuracy,
      totalGamesPlayed: user.totalGamesPlayed,
      lastPlayedAt: user.lastPlayedAt,
      createdAt: user.createdAt,
    }

    res.json({
      success: true,
      data: {
        user: userData,
        token,
        refreshToken,
      },
    })
  } catch (error) {
    console.error("Login error:", error)
    res.status(500).json({
      success: false,
      error: { message: "Server error during login" },
    })
  }
}

// Logout user
const logout = async (req, res) => {
  try {
    const { refreshToken } = req.body

    if (!refreshToken) {
      return res.status(400).json({
        success: false,
        error: { message: "Refresh token is required" },
      })
    }

    // Delete refresh token from database
    await prisma.refreshToken.deleteMany({
      where: { token: refreshToken },
    })

    res.json({
      success: true,
      data: { message: "Logged out successfully" },
    })
  } catch (error) {
    console.error("Logout error:", error)
    res.status(500).json({
      success: false,
      error: { message: "Server error during logout" },
    })
  }
}

// Refresh token
const refreshAccessToken = async (req, res) => {
  try {
    const { refreshToken } = req.body

    if (!refreshToken) {
      return res.status(400).json({
        success: false,
        error: { message: "Refresh token is required" },
      })
    }

    // Find refresh token in database
    const storedToken = await prisma.refreshToken.findUnique({
      where: { token: refreshToken },
    })

    if (!storedToken) {
      return res.status(401).json({
        success: false,
        error: { message: "Invalid refresh token" },
      })
    }

    // Check if token is expired
    if (new Date() > storedToken.expiresAt) {
      // Delete expired token
      await prisma.refreshToken.delete({
        where: { id: storedToken.id },
      })

      return res.status(401).json({
        success: false,
        error: { message: "Refresh token expired" },
      })
    }

    // Generate new access token
    const token = generateToken(storedToken.userId)

    res.json({
      success: true,
      data: { token },
    })
  } catch (error) {
    console.error("Token refresh error:", error)
    res.status(500).json({
      success: false,
      error: { message: "Server error refreshing token" },
    })
  }
}

module.exports = {
  register,
  login,
  logout,
  refreshAccessToken,
}
