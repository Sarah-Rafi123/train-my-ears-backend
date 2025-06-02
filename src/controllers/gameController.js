const { validationResult } = require("express-validator")
const gameService = require("../services/gameService")

// Existing controller methods remain the same...
const getChords = async (req, res) => {
  try {
    const { instrumentId, levelId } = req.params
    const chords = await gameService.getChords(instrumentId, levelId)
    res.json({
      success: true,
      data: { chords },
    })
  } catch (error) {
    console.error("Get chords error:", error)
    if (error.message === "Instrument not found" || error.message === "Level not found") {
      return res.status(404).json({
        success: false,
        error: { message: error.message },
      })
    }
    res.status(500).json({
      success: false,
      error: { message: error.message || "Server error fetching chords" },
    })
  }
}

const startGameSession = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: { message: "Validation error", details: errors.array() },
      })
    }

    const { instrumentId, levelId, gameMode = "SIMPLE_MODE" } = req.body
    const gameSession = await gameService.startGameSession({ instrumentId, levelId, gameMode })

    res.status(201).json({
      success: true,
      data: { gameSession },
    })
  } catch (error) {
    console.error("Start game session error:", error)
    if (error.message === "Instrument not found" || error.message === "Level not found") {
      return res.status(404).json({
        success: false,
        error: { message: error.message },
      })
    }
    if (error.message === "Subscription required for this level") {
      return res.status(403).json({
        success: false,
        error: { message: error.message },
      })
    }
    res.status(500).json({
      success: false,
      error: { message: error.message || "Server error starting game session" },
    })
  }
}

const submitAnswer = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: { message: "Validation error", details: errors.array() },
      })
    }

    const { gameSessionId, chordId, userAnswer, responseTimeMs, sequenceOrder } = req.body
    const result = await gameService.submitAnswer({
      gameSessionId,
      chordId,
      userAnswer,
      responseTimeMs,
      sequenceOrder,
    })

    res.json({
      success: true,
      data: result,
    })
  } catch (error) {
    console.error("Submit answer error:", error)
    if (error.message === "Game session not found" || error.message === "Chord not found") {
      return res.status(404).json({
        success: false,
        error: { message: error.message },
      })
    }
    res.status(500).json({
      success: false,
      error: { message: error.message || "Server error submitting answer" },
    })
  }
}

const completeGameSession = async (req, res) => {
  try {
    const { gameSessionId } = req.params
    const { durationMs } = req.body
    const gameSession = await gameService.completeGameSession(gameSessionId, durationMs)
    res.json({
      success: true,
      data: { gameSession },
    })
  } catch (error) {
    console.error("Complete game session error:", error)
    if (error.message === "Game session not found") {
      return res.status(404).json({
        success: false,
        error: { message: error.message },
      })
    }
    if (error.message === "Game session already completed") {
      return res.status(400).json({
        success: false,
        error: { message: error.message },
      })
    }
    res.status(500).json({
      success: false,
      error: { message: error.message || "Server error completing game session" },
    })
  }
}

const getGameHistory = async (req, res) => {
  try {
    const { limit = 10, offset = 0, gameMode } = req.query
    const result = await gameService.getGameHistory({ limit, offset, gameMode })
    res.json({
      success: true,
      data: result,
    })
  } catch (error) {
    console.error("Get game history error:", error)
    res.status(500).json({
      success: false,
      error: { message: error.message || "Server error fetching game history" },
    })
  }
}

const getGameStatistics = async (req, res) => {
  try {
    const { gameMode, levelId } = req.query
    const statistics = await gameService.getGameStatistics({ gameMode, levelId })
    res.json({
      success: true,
      data: { statistics },
    })
  } catch (error) {
    console.error("Get game statistics error:", error)
    res.status(500).json({
      success: false,
      error: { message: error.message || "Server error fetching game statistics" },
    })
  }
}

// SIMPLE MODE CONTROLLER METHODS
const startSimpleGameRound = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: { message: "Validation error", details: errors.array() },
      })
    }

    const { instrumentId, level = 1 } = req.body
    const gameRound = await gameService.startSimpleGameRound(instrumentId, level)

    res.status(201).json({
      success: true,
      data: { gameRound },
    })
  } catch (error) {
    console.error("Start simple game round error:", error)

    if (error.message.includes("not found")) {
      return res.status(404).json({
        success: false,
        error: { message: error.message },
      })
    }

    if (error.message.includes("Subscription required")) {
      return res.status(403).json({
        success: false,
        error: { message: error.message, code: "SUBSCRIPTION_REQUIRED" },
      })
    }

    res.status(500).json({
      success: false,
      error: { message: "Server error starting simple game round" },
    })
  }
}

const submitSimpleAnswer = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: { message: "Validation error", details: errors.array() },
      })
    }

    const { gameRoundId, selectedChordId, responseTimeMs } = req.body
    const result = await gameService.submitSimpleAnswer(gameRoundId, selectedChordId, responseTimeMs)

    res.status(200).json({
      success: true,
      data: { result },
    })
  } catch (error) {
    console.error("Submit simple answer error:", error)

    if (error.message.includes("not found")) {
      return res.status(404).json({
        success: false,
        error: { message: error.message },
      })
    }

    if (error.message.includes("already submitted")) {
      return res.status(409).json({
        success: false,
        error: { message: error.message },
      })
    }

    res.status(500).json({
      success: false,
      error: { message: "Server error submitting simple answer" },
    })
  }
}

// ADVANCED MODE CONTROLLER METHODS
const startAdvancedGameRound = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: { message: "Validation error", details: errors.array() },
      })
    }

    const { instrumentId, level = 1, playerName = "Anonymous" } = req.body
    const gameRound = await gameService.startAdvancedGameRound(instrumentId, level, playerName)

    res.status(201).json({
      success: true,
      data: { gameRound },
    })
  } catch (error) {
    console.error("Start advanced game round error:", error)

    if (error.message.includes("not found")) {
      return res.status(404).json({
        success: false,
        error: { message: error.message },
      })
    }

    if (error.message.includes("Subscription required")) {
      return res.status(403).json({
        success: false,
        error: { message: error.message, code: "SUBSCRIPTION_REQUIRED" },
      })
    }

    res.status(500).json({
      success: false,
      error: { message: "Server error starting advanced game round" },
    })
  }
}

const submitAdvancedSequenceAnswer = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: { message: "Validation error", details: errors.array() },
      })
    }

    const { gameSessionId, submittedSequence, responseTimeMs } = req.body
    const result = await gameService.submitAdvancedSequenceAnswer(gameSessionId, submittedSequence, responseTimeMs)

    res.status(200).json({
      success: true,
      data: { result },
    })
  } catch (error) {
    console.error("Submit advanced sequence answer error:", error)

    if (error.message.includes("not found")) {
      return res.status(404).json({
        success: false,
        error: { message: error.message },
      })
    }

    if (error.message.includes("already submitted") || error.message.includes("Expected sequence length")) {
      return res.status(400).json({
        success: false,
        error: { message: error.message },
      })
    }

    res.status(500).json({
      success: false,
      error: { message: "Server error submitting advanced sequence answer" },
    })
  }
}

// SOCIAL MODE CONTROLLER METHODS
const createSocialChallenge = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: { message: "Validation error", details: errors.array() },
      })
    }

    const { instrumentId, level, challengeType, creatorName, maxParticipants = 10 } = req.body
    const challenge = await gameService.createSocialChallenge(
      instrumentId,
      level,
      challengeType,
      creatorName,
      maxParticipants,
    )

    res.status(201).json({
      success: true,
      data: { challenge },
    })
  } catch (error) {
    console.error("Create social challenge error:", error)

    if (error.message.includes("not found")) {
      return res.status(404).json({
        success: false,
        error: { message: error.message },
      })
    }

    res.status(500).json({
      success: false,
      error: { message: "Server error creating social challenge" },
    })
  }
}

const joinSocialChallenge = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: { message: "Validation error", details: errors.array() },
      })
    }

    const { challengeId, playerName } = req.body
    const participant = await gameService.joinSocialChallenge(challengeId, playerName)

    res.status(200).json({
      success: true,
      data: { participant },
    })
  } catch (error) {
    console.error("Join social challenge error:", error)

    if (error.message.includes("not found")) {
      return res.status(404).json({
        success: false,
        error: { message: error.message },
      })
    }

    if (error.message.includes("full") || error.message.includes("already joined")) {
      return res.status(400).json({
        success: false,
        error: { message: error.message },
      })
    }

    res.status(500).json({
      success: false,
      error: { message: "Server error joining social challenge" },
    })
  }
}

const submitSocialAnswer = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: { message: "Validation error", details: errors.array() },
      })
    }

    const { challengeId, participantId, answers, responseTimeMs } = req.body
    const result = await gameService.submitSocialAnswer(challengeId, participantId, answers, responseTimeMs)

    res.status(200).json({
      success: true,
      data: { result },
    })
  } catch (error) {
    console.error("Submit social answer error:", error)

    if (error.message.includes("not found")) {
      return res.status(404).json({
        success: false,
        error: { message: error.message },
      })
    }

    if (error.message.includes("already submitted") || error.message.includes("not active")) {
      return res.status(400).json({
        success: false,
        error: { message: error.message },
      })
    }

    res.status(500).json({
      success: false,
      error: { message: "Server error submitting social answer" },
    })
  }
}

const getSocialLeaderboard = async (req, res) => {
  try {
    const { period = "weekly", instrumentId, level, limit = 20 } = req.query
    const leaderboard = await gameService.getSocialLeaderboard(period, instrumentId, level, limit)

    res.status(200).json({
      success: true,
      data: { leaderboard },
    })
  } catch (error) {
    console.error("Get social leaderboard error:", error)

    res.status(500).json({
      success: false,
      error: { message: "Server error fetching social leaderboard" },
    })
  }
}

const getDailyChallenges = async (req, res) => {
  try {
    const challenges = await gameService.getDailyChallenges()

    res.status(200).json({
      success: true,
      data: { challenges },
    })
  } catch (error) {
    console.error("Get daily challenges error:", error)

    res.status(500).json({
      success: false,
      error: { message: "Server error fetching daily challenges" },
    })
  }
}

module.exports = {
  getChords,
  startGameSession,
  submitAnswer,
  completeGameSession,
  getGameHistory,
  getGameStatistics,
  // Simple mode exports
  startSimpleGameRound,
  submitSimpleAnswer,
  // Advanced mode exports
  startAdvancedGameRound,
  submitAdvancedSequenceAnswer,
  // Social mode exports
  createSocialChallenge,
  joinSocialChallenge,
  submitSocialAnswer,
  getSocialLeaderboard,
  getDailyChallenges,
}
