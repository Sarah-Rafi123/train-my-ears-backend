const prisma = require("../config/database")

// Get available chords for a level and instrument
const getChords = async (req, res) => {
  try {
    const { instrumentId, levelId } = req.params

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

    res.json({
      success: true,
      data: { chords },
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: { message: "Server error fetching chords" },
    })
  }
}

// Start a new game session
const startGameSession = async (req, res) => {
  try {
    const { userId, instrumentId, levelId, gameMode = "SINGLE_CHORD" } = req.body

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

    res.status(201).json({
      success: true,
      data: { gameSession },
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: { message: "Server error starting game session" },
    })
  }
}

// Submit answer for a chord
const submitAnswer = async (req, res) => {
  try {
    const { gameSessionId, chordId, userAnswer, responseTimeMs, sequenceOrder = 1 } = req.body

    const chord = await prisma.chord.findUnique({
      where: { id: chordId },
    })

    if (!chord) {
      return res.status(404).json({
        success: false,
        error: { message: "Chord not found" },
      })
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
    const gameSession = await prisma.gameSession.findUnique({
      where: { id: gameSessionId },
    })

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

    res.json({
      success: true,
      data: {
        gameSessionChord,
        gameSession: updatedGameSession,
        isCorrect,
        correctAnswer: chord.name,
      },
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: { message: "Server error submitting answer" },
    })
  }
}

// Complete game session
const completeGameSession = async (req, res) => {
  try {
    const { gameSessionId } = req.params

    const gameSession = await prisma.gameSession.update({
      where: { id: gameSessionId },
      data: {
        isCompleted: true,
        completedAt: new Date(),
        durationMs: req.body.durationMs,
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
        timePlayedMs: { increment: gameSession.durationMs || 0 },
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
        timePlayedMs: gameSession.durationMs || 0,
      },
    })

    res.json({
      success: true,
      data: { gameSession },
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: { message: "Server error completing game session" },
    })
  }
}

module.exports = {
  getChords,
  startGameSession,
  submitAnswer,
  completeGameSession,
}
