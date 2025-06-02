const { validationResult } = require("express-validator")
const advancedGameService = require("../services/advanceGameService")

/**
 * Start a new advanced game round (chord sequence)
 */
const startAdvancedGameRound = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: { message: "Validation error", details: errors.array() },
      })
    }

    const { userId, instrumentId, level = 1 } = req.body

    const gameRound = await advancedGameService.startAdvancedGameRound(userId, instrumentId, level)

    res.status(201).json({
      success: true,
      data: { gameRound },
    })
  } catch (error) {
    console.error("Start advanced game round error:", error)

    // Handle specific errors
    if (error.message === "User not found" || error.message === "Instrument not found") {
      return res.status(404).json({
        success: false,
        error: { message: error.message },
      })
    }

    if (error.message === "Subscription required for Level 3 and above") {
      return res.status(403).json({
        success: false,
        error: { message: error.message },
      })
    }

    res.status(500).json({
      success: false,
      error: { message: error.message || "Server error starting advanced game round" },
    })
  }
}

/**
 * Submit sequence answer for advanced game round
 */
const submitSequenceAnswer = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: { message: "Validation error", details: errors.array() },
      })
    }

    const { userId, gameSessionId, submittedSequence, responseTimeMs } = req.body

    const result = await advancedGameService.submitSequenceAnswer(
      userId,
      gameSessionId,
      submittedSequence,
      responseTimeMs,
    )

    res.json({
      success: true,
      data: { result },
    })
  } catch (error) {
    console.error("Submit sequence answer error:", error)

    // Handle specific errors
    if (error.message === "Game session not found") {
      return res.status(404).json({
        success: false,
        error: { message: error.message },
      })
    }

    if (
      error.message === "Unauthorized: This game session belongs to another user" ||
      error.message === "Answer already submitted for this game session" ||
      error.message.includes("Expected sequence length")
    ) {
      return res.status(400).json({
        success: false,
        error: { message: error.message },
      })
    }

    res.status(500).json({
      success: false,
      error: { message: error.message || "Server error submitting sequence answer" },
    })
  }
}

/**
 * Get user's advanced game stats
 */
const getUserAdvancedStats = async (req, res) => {
  try {
    const { userId } = req.params

    const userStats = await advancedGameService.getUserAdvancedStats(userId)

    res.json({
      success: true,
      data: { user: userStats },
    })
  } catch (error) {
    console.error("Get user advanced stats error:", error)

    if (error.message === "User not found") {
      return res.status(404).json({
        success: false,
        error: { message: error.message },
      })
    }

    res.status(500).json({
      success: false,
      error: { message: error.message || "Server error fetching user advanced stats" },
    })
  }
}

module.exports = {
  startAdvancedGameRound,
  submitSequenceAnswer,
  getUserAdvancedStats,
}
