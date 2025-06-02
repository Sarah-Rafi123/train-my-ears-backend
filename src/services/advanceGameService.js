const prisma = require("../config/database")

/**
 * Advanced Game Service - handles advanced game mode logic (chord sequences)
 */
class AdvancedGameService {
  /**
   * Get the sequence length and chord pool size based on level
   * @param {number} level - Game level
   * @returns {Object} Sequence configuration
   */
  getSequenceConfig(level) {
    switch (level) {
      case 1:
        return { sequenceLength: 3, chordPoolSize: 6 } // 3 chord sequence from 6 options
      case 2:
        return { sequenceLength: 4, chordPoolSize: 8 } // 4 chord sequence from 8 options
      case 3:
        return { sequenceLength: 5, chordPoolSize: 10 } // 5 chord sequence from 10 options
      default:
        return { sequenceLength: 3, chordPoolSize: 6 }
    }
  }

  /**
   * Start a new advanced game round (chord sequence)
   * @param {string} userId - User ID
   * @param {string} instrumentId - Instrument ID
   * @param {number} level - Game level (1, 2, or 3)
   * @returns {Object} Game round data with chord sequence and options
   */
  async startAdvancedGameRound(userId, instrumentId, level = 1) {
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

    // Check level access (Level 3+ requires subscription)
    if (level >= 3) {
      const subscription = await prisma.subscription.findUnique({
        where: { userId },
      })

      const hasActiveSubscription =
        subscription && subscription.status === "ACTIVE" && subscription.endDate > new Date()

      if (!hasActiveSubscription) {
        throw new Error("Subscription required for Level 3 and above")
      }
    }

    // Get sequence configuration for this level
    const { sequenceLength, chordPoolSize } = this.getSequenceConfig(level)

    // Get all available chords for this instrument
    const allChords = await prisma.chord.findMany({
      where: {
        instrumentId,
        isActive: true,
      },
      orderBy: {
        name: "asc",
      },
    })

    if (allChords.length < chordPoolSize) {
      throw new Error(
        `Not enough chords available for level ${level}. Need ${chordPoolSize}, found ${allChords.length}`,
      )
    }

    // Randomly select chord pool for this round
    const shuffledChords = allChords.sort(() => 0.5 - Math.random())
    const chordPool = shuffledChords.slice(0, chordPoolSize)

    // Create the target sequence by randomly selecting from the chord pool
    const targetSequence = []
    for (let i = 0; i < sequenceLength; i++) {
      const randomChord = chordPool[Math.floor(Math.random() * chordPool.length)]
      targetSequence.push(randomChord)
    }

    // Create a game session for tracking
    const gameSession = await prisma.gameSession.create({
      data: {
        userId,
        instrumentId,
        levelId: level,
        gameMode: "ADVANCE_MODE",
        startedAt: new Date(),
      },
    })

    // Create game round records for each chord in the sequence
    const gameRounds = []
    for (let i = 0; i < targetSequence.length; i++) {
      const gameRound = await prisma.gameSessionChord.create({
        data: {
          gameSessionId: gameSession.id,
          chordId: targetSequence[i].id,
          sequenceOrder: i + 1,
          playedAt: new Date(),
        },
      })
      gameRounds.push(gameRound)
    }

    // Prepare audio URLs for the sequence
    const sequenceAudioUrls = targetSequence.map((chord) => chord.audioFileUrl)

    return {
      gameSessionId: gameSession.id,
      gameRoundIds: gameRounds.map((round) => round.id),
      level,
      sequenceLength,
      chordPool: chordPool.map((chord) => ({
        id: chord.id,
        name: chord.name,
        displayName: chord.displayName,
      })),
      targetSequence: targetSequence.map((chord, index) => ({
        id: chord.id,
        name: chord.name,
        displayName: chord.displayName,
        audioFileUrl: chord.audioFileUrl,
        position: index + 1,
      })),
      sequenceAudioUrls, // Array of audio URLs to play in sequence
      instrument: {
        id: instrument.id,
        name: instrument.name,
        displayName: instrument.displayName,
      },
    }
  }

  /**
   * Submit sequence answer for advanced game round
   * @param {string} userId - User ID
   * @param {string} gameSessionId - Game session ID
   * @param {Array} submittedSequence - Array of chord IDs in submitted order
   * @param {number} responseTimeMs - Response time in milliseconds
   * @returns {Object} Answer result with updated stats
   */
  async submitSequenceAnswer(userId, gameSessionId, submittedSequence, responseTimeMs = null) {
    // Get the game session with all rounds
    const gameSession = await prisma.gameSession.findUnique({
      where: { id: gameSessionId },
      include: {
        user: true,
        chords: {
          include: {
            chord: true,
          },
          orderBy: {
            sequenceOrder: "asc",
          },
        },
      },
    })

    if (!gameSession) {
      throw new Error("Game session not found")
    }

    if (gameSession.userId !== userId) {
      throw new Error("Unauthorized: This game session belongs to another user")
    }

    if (gameSession.isCompleted) {
      throw new Error("Answer already submitted for this game session")
    }

    // Check if submitted sequence length matches expected length
    const expectedLength = gameSession.chords.length
    if (submittedSequence.length !== expectedLength) {
      throw new Error(`Expected sequence length ${expectedLength}, got ${submittedSequence.length}`)
    }

    // Get the correct sequence
    const correctSequence = gameSession.chords.map((round) => round.chordId)

    // Check if the submitted sequence is correct
    const isCorrect = JSON.stringify(submittedSequence) === JSON.stringify(correctSequence)

    // Update each game round with the submitted answer
    for (let i = 0; i < submittedSequence.length; i++) {
      const submittedChordId = submittedSequence[i]
      const gameRound = gameSession.chords[i]

      // Get the submitted chord name
      const submittedChord = await prisma.chord.findUnique({
        where: { id: submittedChordId },
      })

      await prisma.gameSessionChord.update({
        where: { id: gameRound.id },
        data: {
          userAnswer: submittedChord ? submittedChord.name : "Unknown",
          isCorrect: submittedChordId === gameRound.chordId,
          responseTimeMs: responseTimeMs ? Math.round(responseTimeMs / submittedSequence.length) : null,
        },
      })
    }

    // Get current user stats
    const user = gameSession.user
    const currentStreak = user.currentStreak
    const currentAccuracy = user.overallAccuracy
    const currentTotalGames = user.totalGamesPlayed

    // Calculate new streak (minimum 0)
    const newStreak = isCorrect ? currentStreak + 1 : Math.max(0, currentStreak - 1)

    // Calculate new accuracy
    const newTotalGames = currentTotalGames + 1
    const currentCorrectAnswers = Math.round((currentAccuracy / 100) * currentTotalGames)
    const newCorrectAnswers = currentCorrectAnswers + (isCorrect ? 1 : 0)
    const newAccuracy = (newCorrectAnswers / newTotalGames) * 100

    // Update user stats
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        currentStreak: newStreak,
        overallAccuracy: newAccuracy,
        totalGamesPlayed: newTotalGames,
        lastPlayedAt: new Date(),
      },
    })

    // Update game session stats
    await prisma.gameSession.update({
      where: { id: gameSessionId },
      data: {
        totalQuestions: expectedLength,
        correctAnswers: isCorrect ? expectedLength : 0,
        accuracy: isCorrect ? 100 : 0,
        sessionStreak: newStreak,
        maxStreak: Math.max(gameSession.maxStreak, newStreak),
        isCompleted: true,
        completedAt: new Date(),
        durationMs: responseTimeMs,
      },
    })

    // Create/update daily user stats
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    await prisma.userStats.upsert({
      where: {
        userId_date_levelId: {
          userId,
          date: today,
          levelId: gameSession.levelId,
        },
      },
      update: {
        gamesPlayed: { increment: 1 },
        totalQuestions: { increment: expectedLength },
        correctAnswers: { increment: isCorrect ? expectedLength : 0 },
        accuracy: newAccuracy,
        maxStreak: Math.max(newStreak, 0),
        timePlayedMs: { increment: responseTimeMs || 0 },
      },
      create: {
        userId,
        date: today,
        levelId: gameSession.levelId,
        gamesPlayed: 1,
        totalQuestions: expectedLength,
        correctAnswers: isCorrect ? expectedLength : 0,
        accuracy: newAccuracy,
        maxStreak: newStreak,
        timePlayedMs: responseTimeMs || 0,
      },
    })

    // Prepare the result
    const correctSequenceWithNames = gameSession.chords.map((round) => ({
      id: round.chord.id,
      name: round.chord.name,
      displayName: round.chord.displayName,
      position: round.sequenceOrder,
    }))

    const submittedSequenceWithNames = []
    for (const chordId of submittedSequence) {
      const chord = await prisma.chord.findUnique({
        where: { id: chordId },
      })
      submittedSequenceWithNames.push({
        id: chord.id,
        name: chord.name,
        displayName: chord.displayName,
      })
    }

    return {
      isCorrect,
      correctSequence: correctSequenceWithNames,
      submittedSequence: submittedSequenceWithNames,
      sequenceComparison: correctSequence.map((correctChordId, index) => ({
        position: index + 1,
        correct: correctChordId === submittedSequence[index],
        correctChordId,
        submittedChordId: submittedSequence[index],
      })),
      stats: {
        streak: newStreak,
        accuracy: Math.round(newAccuracy * 100) / 100,
        totalAttempts: newTotalGames,
        correctAnswers: newCorrectAnswers,
      },
      responseTimeMs,
    }
  }

  /**
   * Get user's advanced game stats
   * @param {string} userId - User ID
   * @returns {Object} User's current stats for advanced mode
   */
  async getUserAdvancedStats(userId) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        currentLevel: true,
        currentStreak: true,
        overallAccuracy: true,
        totalGamesPlayed: true,
        lastPlayedAt: true,
      },
    })

    if (!user) {
      throw new Error("User not found")
    }

    // Get advanced mode specific stats
    const advancedGameSessions = await prisma.gameSession.count({
      where: {
        userId,
        gameMode: "ADVANCE_MODE",
        isCompleted: true,
      },
    })

    const { sequenceLength, chordPoolSize } = this.getSequenceConfig(user.currentLevel)

    // Calculate correct answers from accuracy
    const correctAnswers = Math.round((user.overallAccuracy / 100) * user.totalGamesPlayed)

    return {
      ...user,
      stats: {
        level: user.currentLevel,
        streak: user.currentStreak,
        accuracy: Math.round(user.overallAccuracy * 100) / 100,
        totalAttempts: user.totalGamesPlayed,
        correctAnswers,
        sequenceLength,
        chordPoolSize,
        advancedGamesPlayed: advancedGameSessions,
      },
    }
  }
}

module.exports = new AdvancedGameService()
