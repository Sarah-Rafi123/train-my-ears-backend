const prisma = require("../config/database")

/**
 * Game service - handles game-related business logic
 */
class GameService {
  /**
   * Get chords for a specific instrument and level
   * @param {string} instrumentId - Instrument ID
   * @param {number} levelId - Level ID
   * @returns {Array} List of chords
   */
  async getChords(instrumentId, levelId) {
    const chords = await prisma.chord.findMany({
      where: {
        instrumentId,
        levelId: Number.parseInt(levelId),
        isActive: true,
      },
      include: {
        instrument: true,
        level: true,
      },
      orderBy: {
        name: "asc",
      },
    })

    return chords
  }

  /**
   * Start a new game session
   * @param {Object} sessionData - Session data (userId, instrumentId, levelId, gameMode)
   * @returns {Object} Created game session
   */
  async startGameSession(sessionData) {
    const { userId, instrumentId, levelId, gameMode = "SINGLE_CHORD" } = sessionData

    // Validate user exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
    })

    if (!user) {
      throw new Error("User not found")
    }

    // Validate instrument exists
    const instrument = await prisma.instrument.findUnique({
      where: { id: instrumentId },
    })

    if (!instrument) {
      throw new Error("Instrument not found")
    }

    // Validate level exists
    const level = await prisma.level.findUnique({
      where: { id: Number.parseInt(levelId) },
    })

    if (!level) {
      throw new Error("Level not found")
    }

    // Check if level requires subscription
    if (!level.isFree) {
      // Check if user has active subscription
      const subscription = await prisma.subscription.findUnique({
        where: { userId },
      })

      const hasActiveSubscription =
        subscription && subscription.status === "ACTIVE" && subscription.endDate > new Date()

      if (!hasActiveSubscription) {
        throw new Error("Subscription required for this level")
      }
    }

    const gameSession = await prisma.gameSession.create({
      data: {
        userId,
        instrumentId,
        levelId: Number.parseInt(levelId),
        gameMode,
        startedAt: new Date(),
      },
      include: {
        instrument: true,
        level: true,
        user: {
          select: {
            id: true,
            name: true,
            currentLevel: true,
          },
        },
      },
    })

    return gameSession
  }

  /**
   * Submit an answer for a chord
   * @param {Object} answerData - Answer data (gameSessionId, chordId, userAnswer, responseTimeMs, sequenceOrder)
   * @returns {Object} Answer result
   */
  async submitAnswer(answerData) {
    const { gameSessionId, chordId, userAnswer, responseTimeMs, sequenceOrder = 1 } = answerData

    // Validate game session exists
    const gameSession = await prisma.gameSession.findUnique({
      where: { id: gameSessionId },
    })

    if (!gameSession) {
      throw new Error("Game session not found")
    }

    // Validate chord exists
    const chord = await prisma.chord.findUnique({
      where: { id: chordId },
    })

    if (!chord) {
      throw new Error("Chord not found")
    }

    const isCorrect = userAnswer.toLowerCase() === chord.name.toLowerCase()

    // Create game session chord record
    const gameSessionChord = await prisma.gameSessionChord.create({
      data: {
        gameSessionId,
        chordId,
        sequenceOrder,
        userAnswer,
        isCorrect,
        responseTimeMs,
        playedAt: new Date(),
      },
    })

    // Update game session stats
    const newTotalQuestions = gameSession.totalQuestions + 1
    const newCorrectAnswers = gameSession.correctAnswers + (isCorrect ? 1 : 0)
    const newAccuracy = (newCorrectAnswers / newTotalQuestions) * 100
    const newSessionStreak = isCorrect ? gameSession.sessionStreak + 1 : 0
    const newMaxStreak = Math.max(gameSession.maxStreak, newSessionStreak)

    const updatedGameSession = await prisma.gameSession.update({
      where: { id: gameSessionId },
      data: {
        totalQuestions: newTotalQuestions,
        correctAnswers: newCorrectAnswers,
        accuracy: newAccuracy,
        sessionStreak: newSessionStreak,
        maxStreak: newMaxStreak,
      },
    })

    return {
      gameSessionChord,
      gameSession: updatedGameSession,
      isCorrect,
      correctAnswer: chord.name,
    }
  }

  /**
   * Complete a game session
   * @param {string} gameSessionId - Game session ID
   * @param {number} durationMs - Session duration in milliseconds
   * @returns {Object} Completed game session
   */
  async completeGameSession(gameSessionId, durationMs) {
    // Validate game session exists
    const gameSession = await prisma.gameSession.findUnique({
      where: { id: gameSessionId },
      include: {
        user: true,
        level: true,
      },
    })

    if (!gameSession) {
      throw new Error("Game session not found")
    }

    if (gameSession.isCompleted) {
      throw new Error("Game session already completed")
    }

    // Update game session
    const updatedGameSession = await prisma.gameSession.update({
      where: { id: gameSessionId },
      data: {
        isCompleted: true,
        completedAt: new Date(),
        durationMs,
      },
      include: {
        user: true,
        level: true,
      },
    })

    // Update user's overall stats
    const user = gameSession.user
    const newTotalGames = user.totalGamesPlayed + 1
    const newOverallAccuracy = (user.overallAccuracy * user.totalGamesPlayed + gameSession.accuracy) / newTotalGames

    await prisma.user.update({
      where: { id: user.id },
      data: {
        totalGamesPlayed: newTotalGames,
        overallAccuracy: newOverallAccuracy,
        currentStreak: gameSession.sessionStreak,
        lastPlayedAt: new Date(),
      },
    })

    // Create/update daily user stats
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    await prisma.userStats.upsert({
      where: {
        userId_date_levelId: {
          userId: user.id,
          date: today,
          levelId: gameSession.levelId,
        },
      },
      update: {
        gamesPlayed: { increment: 1 },
        totalQuestions: { increment: gameSession.totalQuestions },
        correctAnswers: { increment: gameSession.correctAnswers },
        accuracy: gameSession.accuracy,
        maxStreak: { increment: gameSession.maxStreak },
        timePlayedMs: { increment: durationMs || 0 },
      },
      create: {
        userId: user.id,
        date: today,
        levelId: gameSession.levelId,
        gamesPlayed: 1,
        totalQuestions: gameSession.totalQuestions,
        correctAnswers: gameSession.correctAnswers,
        accuracy: gameSession.accuracy,
        maxStreak: gameSession.maxStreak,
        timePlayedMs: durationMs || 0,
      },
    })

    return updatedGameSession
  }

  /**
   * Get user's game history
   * @param {string} userId - User ID
   * @param {Object} options - Query options (limit, offset)
   * @returns {Array} Game history
   */
  async getUserGameHistory(userId, options = {}) {
    const { limit = 10, offset = 0 } = options

    const gameSessions = await prisma.gameSession.findMany({
      where: { userId },
      include: {
        instrument: true,
        level: true,
        chords: {
          include: {
            chord: true,
          },
          orderBy: {
            playedAt: "asc",
          },
        },
      },
      orderBy: {
        startedAt: "desc",
      },
      take: Number.parseInt(limit),
      skip: Number.parseInt(offset),
    })

    const total = await prisma.gameSession.count({
      where: { userId },
    })

    return {
      gameSessions,
      pagination: {
        total,
        limit: Number.parseInt(limit),
        offset: Number.parseInt(offset),
        pages: Math.ceil(total / limit),
      },
    }
  }
}

module.exports = new GameService()
