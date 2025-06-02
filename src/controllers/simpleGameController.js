const simpleGameService = require("../services/simpleGameService")

/**
 * Simple Game Controller - handles simple game mode HTTP requests
 */
class SimpleGameController {
  /**
   * Start a new simple game round
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   */
  async startGameRound(req, res) {
    try {
      const { userId, instrumentId, level = 1 } = req.body

      // Validate required fields
      if (!userId || !instrumentId) {
        return res.status(400).json({
          success: false,
          error: {
            message: "userId and instrumentId are required",
          },
        })
      }

      // Validate level range
      if (level < 1 || level > 4) {
        return res.status(400).json({
          success: false,
          error: {
            message: "Level must be between 1 and 4",
          },
        })
      }

      const gameRound = await simpleGameService.startGameRound(userId, instrumentId, level)

      res.status(201).json({
        success: true,
        data: {
          gameRound,
        },
      })
    } catch (error) {
      console.error("Error starting simple game round:", error)

      if (error.message.includes("not found")) {
        return res.status(404).json({
          success: false,
          error: {
            message: error.message,
          },
        })
      }

      if (error.message.includes("Subscription required")) {
        return res.status(403).json({
          success: false,
          error: {
            message: error.message,
            code: "SUBSCRIPTION_REQUIRED",
          },
        })
      }

      res.status(500).json({
        success: false,
        error: {
          message: "Server error starting game round",
        },
      })
    }
  }

  /**
   * Submit answer for a simple game round
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   */
  async submitAnswer(req, res) {
    try {
      const { userId, gameRoundId, selectedChordId, responseTimeMs } = req.body

      // Validate required fields
      if (!userId || !gameRoundId || !selectedChordId) {
        return res.status(400).json({
          success: false,
          error: {
            message: "userId, gameRoundId, and selectedChordId are required",
          },
        })
      }

      const result = await simpleGameService.submitAnswer(userId, gameRoundId, selectedChordId, responseTimeMs)

      res.status(200).json({
        success: true,
        data: {
          result,
        },
      })
    } catch (error) {
      console.error("Error submitting simple game answer:", error)

      if (error.message.includes("not found")) {
        return res.status(404).json({
          success: false,
          error: {
            message: error.message,
          },
        })
      }

      if (error.message.includes("Unauthorized")) {
        return res.status(403).json({
          success: false,
          error: {
            message: error.message,
          },
        })
      }

      if (error.message.includes("already submitted")) {
        return res.status(409).json({
          success: false,
          error: {
            message: error.message,
          },
        })
      }

      res.status(500).json({
        success: false,
        error: {
          message: "Server error submitting answer",
        },
      })
    }
  }

  /**
   * Change user level (level up or level down)
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   */
  async changeLevel(req, res) {
    try {
      const { userId, newLevel } = req.body

      // Validate required fields
      if (!userId || newLevel === undefined) {
        return res.status(400).json({
          success: false,
          error: {
            message: "userId and newLevel are required",
          },
        })
      }

      // Validate level range
      if (newLevel < 1 || newLevel > 4) {
        return res.status(400).json({
          success: false,
          error: {
            message: "Level must be between 1 and 4",
          },
        })
      }

      const updatedUser = await simpleGameService.changeLevel(userId, newLevel)

      res.status(200).json({
        success: true,
        data: {
          user: updatedUser,
        },
      })
    } catch (error) {
      console.error("Error changing user level:", error)

      if (error.message.includes("not found")) {
        return res.status(404).json({
          success: false,
          error: {
            message: error.message,
          },
        })
      }

      if (error.message.includes("Subscription required")) {
        return res.status(403).json({
          success: false,
          error: {
            message: error.message,
            code: "SUBSCRIPTION_REQUIRED",
          },
        })
      }

      res.status(500).json({
        success: false,
        error: {
          message: "Server error changing level",
        },
      })
    }
  }

  /**
   * Get user's current game stats
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   */
  async getUserStats(req, res) {
    try {
      const { userId } = req.params

      if (!userId) {
        return res.status(400).json({
          success: false,
          error: {
            message: "userId is required",
          },
        })
      }

      const userStats = await simpleGameService.getUserStats(userId)

      res.status(200).json({
        success: true,
        data: {
          userStats,
        },
      })
    } catch (error) {
      console.error("Error getting user stats:", error)

      if (error.message.includes("not found")) {
        return res.status(404).json({
          success: false,
          error: {
            message: error.message,
          },
        })
      }

      res.status(500).json({
        success: false,
        error: {
          message: "Server error fetching user stats",
        },
      })
    }
  }
}

module.exports = new SimpleGameController()
