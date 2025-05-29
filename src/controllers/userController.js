const { validationResult } = require("express-validator")
const userService = require("../services/userService")

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

    const user = await userService.registerUser(req.body)

    res.status(201).json({
      success: true,
      data: { user },
    })
  } catch (error) {
    console.error("User registration error:", error)
    res.status(500).json({
      success: false,
      error: { message: error.message || "Server error during registration" },
    })
  }
}

// Get user profile and stats
const getUserProfile = async (req, res) => {
  try {
    const { userId } = req.params

    const userProfile = await userService.getUserProfile(userId)

    res.json({
      success: true,
      data: { user: userProfile },
    })
  } catch (error) {
    console.error("Get user profile error:", error)
    res.status(error.message === "User not found" ? 404 : 500).json({
      success: false,
      error: { message: error.message || "Server error fetching user profile" },
    })
  }
}

// Update user stats after game session
const updateUserStats = async (req, res) => {
  try {
    const { userId } = req.params
    const user = await userService.updateUserStats(userId, req.body)

    res.json({
      success: true,
      data: { user },
    })
  } catch (error) {
    console.error("Update user stats error:", error)
    res.status(500).json({
      success: false,
      error: { message: error.message || "Server error updating user stats" },
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
    const updatedUser = await userService.updateUserProfile(userId, req.body)

    res.json({
      success: true,
      data: { user: updatedUser },
    })
  } catch (error) {
    console.error("Update user profile error:", error)

    // Handle specific errors with appropriate status codes
    if (error.message === "User not found") {
      return res.status(404).json({
        success: false,
        error: { message: error.message },
      })
    }

    if (
      error.message === "Email already in use" ||
      error.message === "Current password is required to set a new password" ||
      error.message === "Current password is incorrect"
    ) {
      return res.status(400).json({
        success: false,
        error: { message: error.message },
      })
    }

    res.status(500).json({
      success: false,
      error: { message: error.message || "Server error updating user profile" },
    })
  }
}

module.exports = {
  registerUser,
  getUserProfile,
  updateUserStats,
  updateUserProfile,
}
