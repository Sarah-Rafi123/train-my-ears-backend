const { validationResult } = require("express-validator")
const authService = require("../services/authService")

// Register user
const register = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: { message: "Validation failed", details: errors.array() },
      })
    }

    const result = await authService.register(req.body)

    res.status(201).json({
      success: true,
      data: result,
    })
  } catch (error) {
    console.error("Registration error:", error)
    res.status(error.message === "User with this email already exists" ? 400 : 500).json({
      success: false,
      error: { message: error.message || "Server error during registration" },
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
        error: { message: "Validation failed", details: errors.array() },
      })
    }

    const result = await authService.login(req.body)

    res.json({
      success: true,
      data: result,
    })
  } catch (error) {
    console.error("Login error:", error)

    // Handle specific errors with appropriate status codes
    if (error.message === "Invalid credentials" || error.message === "Account requires password reset") {
      return res.status(401).json({
        success: false,
        error: { message: error.message },
      })
    }

    res.status(500).json({
      success: false,
      error: { message: error.message || "Server error during login" },
    })
  }
}

// Logout user
const logout = async (req, res) => {
  try {
    await authService.logout(req.body.refreshToken)

    res.json({
      success: true,
      data: { message: "Logged out successfully" },
    })
  } catch (error) {
    console.error("Logout error:", error)
    res.status(error.message === "Refresh token is required" ? 400 : 500).json({
      success: false,
      error: { message: error.message || "Server error during logout" },
    })
  }
}

// Refresh token
const refreshAccessToken = async (req, res) => {
  try {
    const result = await authService.refreshAccessToken(req.body.refreshToken)

    res.json({
      success: true,
      data: result,
    })
  } catch (error) {
    console.error("Token refresh error:", error)

    // Handle specific errors with appropriate status codes
    if (
      error.message === "Refresh token is required" ||
      error.message === "Invalid refresh token" ||
      error.message === "Refresh token expired"
    ) {
      return res.status(401).json({
        success: false,
        error: { message: error.message },
      })
    }

    res.status(500).json({
      success: false,
      error: { message: error.message || "Server error refreshing token" },
    })
  }
}

module.exports = {
  register,
  login,
  logout,
  refreshAccessToken,
}
