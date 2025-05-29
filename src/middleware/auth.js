const jwt = require("jsonwebtoken")
const prisma = require("../config/database")

// Protect routes - verify JWT token
const protect = async (req, res, next) => {
  try {
    let token

    // Get token from Authorization header
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1]
    }

    // Check if token exists
    if (!token) {
      return res.status(401).json({
        success: false,
        error: { message: "Not authorized, no token" },
      })
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
        return res.status(401).json({
          success: false,
          error: { message: "Not authorized, user not found" },
        })
      }

      // Add user to request object
      req.user = user
      next()
    } catch (error) {
      return res.status(401).json({
        success: false,
        error: { message: "Not authorized, token invalid" },
      })
    }
  } catch (error) {
    console.error("Auth middleware error:", error)
    res.status(500).json({
      success: false,
      error: { message: "Server error in authentication" },
    })
  }
}

// Optional auth - doesn't require token but will use it if present
const optionalAuth = async (req, res, next) => {
  try {
    let token

    // Get token from Authorization header
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1]
    }

    // If no token, continue without user
    if (!token) {
      return next()
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

      // Add user to request object if found
      if (user) {
        req.user = user
      }
      next()
    } catch (error) {
      // Continue without user if token is invalid
      next()
    }
  } catch (error) {
    console.error("Optional auth middleware error:", error)
    next()
  }
}

module.exports = { protect, optionalAuth }
