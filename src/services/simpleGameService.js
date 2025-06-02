const prisma = require("../config/database")

/**
 * Simple Game Service - handles simple game mode logic with cumulative chord progression
 */
class SimpleGameService {
  /**
   * Get cumulative chords for a level (includes all chords from level 1 up to current level)
   * @param {string} instrumentId - Instrument ID
   * @param {number} level - Current level
   * @returns {Array} Array of chords available for this level
   */
  async getCumulativeChords(instrumentId, level) {
    console.log(`🎵 Getting cumulative chords for instrument: ${instrumentId}, level: ${level}`)

    // Get all chords from level 1 up to the current level
    const chords = await prisma.chord.findMany({
      where: {
        instrumentId,
        isActive: true,
        levelId: {
          lte: level, // Less than or equal to current level
        },
      },
      include: {
        level: true,
      },
      orderBy: [{ levelId: "asc" }, { name: "asc" }],
    })

    // Log the chords found for debugging
    console.log(`🎵 Found ${chords.length} chords:`)
    const chordsByLevel = {}
    chords.forEach((chord) => {
      if (!chordsByLevel[chord.levelId]) {
        chordsByLevel[chord.levelId] = []
      }
      chordsByLevel[chord.levelId].push(chord.name)
    })

    // Display chords by level
    for (let i = 1; i <= level; i++) {
      const levelChords = chordsByLevel[i] || []
      console.log(`   Level ${i}: ${levelChords.join(", ")}`)
    }

    return chords
  }

  /**
   * Get the expected number of chords for a level (cumulative)
   * @param {number} level - Game level
   * @returns {number} Expected number of chords
   */
  getExpectedChordCount(level) {
    switch (level) {
      case 1:
        return 3 // Level 1 only
      case 2:
        return 6 // Level 1 + Level 2
      case 3:
        return 9 // Level 1 + Level 2 + Level 3
      case 4:
        return 12 // Level 1 + Level 2 + Level 3 + Level 4
      default:
        return 3
    }
  }

  /**
   * Start a new simple game round
   * @param {string} userId - User ID
   * @param {string} instrumentId - Instrument ID
   * @param {number} level - Game level (1, 2, 3, or 4)
   * @returns {Object} Game round data with chord options and target chord
   */
  async startGameRound(userId, instrumentId, level = 1) {
    console.log(`🎮 Starting simple game round - User: ${userId}, Instrument: ${instrumentId}, Level: ${level}`)

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

    console.log(`🎸 Instrument found: ${instrument.name}`)

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

    // Get cumulative chords for this level
    const availableChords = await this.getCumulativeChords(instrumentId, level)
    const expectedCount = this.getExpectedChordCount(level)

    console.log(`🎵 Expected ${expectedCount} chords, found ${availableChords.length} chords`)

    if (availableChords.length < expectedCount) {
      console.warn(`⚠️ Not enough chords! Expected: ${expectedCount}, Found: ${availableChords.length}`)
      // Don't throw error, just use what we have
    }

    // Randomly select the target chord from available chords
    const targetChord = availableChords[Math.floor(Math.random() * availableChords.length)]
    console.log(`🎯 Target chord selected: ${targetChord.name} (Level ${targetChord.levelId})`)

    // Create a game session for tracking
    const gameSession = await prisma.gameSession.create({
      data: {
        userId,
        instrumentId,
        levelId: level,
        gameMode: "SIMPLE_MODE",
        startedAt: new Date(),
      },
    })

    // Create the game round record
    const gameRound = await prisma.gameSessionChord.create({
      data: {
        gameSessionId: gameSession.id,
        chordId: targetChord.id,
        sequenceOrder: 1,
        playedAt: new Date(),
      },
    })

    const response = {
      gameSessionId: gameSession.id,
      gameRoundId: gameRound.id,
      level,
      totalChordsAvailable: availableChords.length,
      chordOptions: availableChords.map((chord) => ({
        id: chord.id,
        name: chord.name,
        displayName: chord.displayName,
        level: chord.levelId,
      })),
      targetChord: {
        id: targetChord.id,
        name: targetChord.name,
        displayName: targetChord.displayName,
        audioFileUrl: targetChord.audioFileUrl,
        level: targetChord.levelId,
      },
      instrument: {
        id: instrument.id,
        name: instrument.name,
        displayName: instrument.displayName,
      },
      levelInfo: {
        currentLevel: level,
        description: `Playing from Level 1-${level} chords`,
        chordsFromLevel1: availableChords.filter((c) => c.levelId === 1).length,
        chordsFromLevel2: level >= 2 ? availableChords.filter((c) => c.levelId === 2).length : 0,
        chordsFromLevel3: level >= 3 ? availableChords.filter((c) => c.levelId === 3).length : 0,
        chordsFromLevel4: level >= 4 ? availableChords.filter((c) => c.levelId === 4).length : 0,
      },
    }

    console.log(`✅ Game round created successfully with ${response.chordOptions.length} chord options`)
    return response
  }

  /**
   * Submit answer for a game round
   * @param {string} userId - User ID
   * @param {string} gameRoundId - Game round ID
   * @param {string} selectedChordId - Selected chord ID
   * @param {number} responseTimeMs - Response time in milliseconds
   * @returns {Object} Answer result with updated stats
   */
  async submitAnswer(userId, gameRoundId, selectedChordId, responseTimeMs = null) {
    // Get the game round
    const gameRound = await prisma.gameSessionChord.findUnique({
      where: { id: gameRoundId },
      include: {
        gameSession: {
          include: {
            user: true,
          },
        },
        chord: {
          include: {
            level: true,
          },
        },
      },
    })

    if (!gameRound) {
      throw new Error("Game round not found")
    }

    if (gameRound.gameSession.userId !== userId) {
      throw new Error("Unauthorized: This game round belongs to another user")
    }

    if (gameRound.userAnswer) {
      throw new Error("Answer already submitted for this round")
    }

    // Get the selected chord
    const selectedChord = await prisma.chord.findUnique({
      where: { id: selectedChordId },
      include: {
        level: true,
      },
    })

    if (!selectedChord) {
      throw new Error("Selected chord not found")
    }

    // Check if answer is correct
    const isCorrect = selectedChordId === gameRound.chordId
    const correctChord = gameRound.chord

    // Update the game round with the answer
    await prisma.gameSessionChord.update({
      where: { id: gameRoundId },
      data: {
        userAnswer: selectedChord.name,
        isCorrect,
        responseTimeMs,
      },
    })

    // Get current user stats
    const user = gameRound.gameSession.user
    const currentStreak = user.currentStreak
    const currentAccuracy = user.overallAccuracy
    const currentTotalGames = user.totalGamesPlayed

    // Calculate new streak (minimum 0)
    const newStreak = isCorrect ? currentStreak + 1 : Math.max(0, currentStreak - 1)

    // Calculate new accuracy
    const newTotalGames = currentTotalGames + 1
    const currentCorrectAnswers = Math.round((currentAccuracy / 100) * currentTotalGames)
    const newCorrectAnswers = currentCorrectAnswers + (isCorrect ? 1 : 0)
    const newAccuracy = newTotalGames > 0 ? (newCorrectAnswers / newTotalGames) * 100 : 0

    // Update user stats
    await prisma.user.update({
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
      where: { id: gameRound.gameSessionId },
      data: {
        totalQuestions: { increment: 1 },
        correctAnswers: { increment: isCorrect ? 1 : 0 },
        accuracy: newAccuracy,
        sessionStreak: newStreak,
        maxStreak: Math.max(gameRound.gameSession.maxStreak, newStreak),
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
          levelId: gameRound.gameSession.levelId,
        },
      },
      update: {
        gamesPlayed: { increment: 1 },
        totalQuestions: { increment: 1 },
        correctAnswers: { increment: isCorrect ? 1 : 0 },
        accuracy: newAccuracy,
        maxStreak: Math.max(newStreak, 0),
        timePlayedMs: { increment: responseTimeMs || 0 },
      },
      create: {
        userId,
        date: today,
        levelId: gameRound.gameSession.levelId,
        gamesPlayed: 1,
        totalQuestions: 1,
        correctAnswers: isCorrect ? 1 : 0,
        accuracy: newAccuracy,
        maxStreak: newStreak,
        timePlayedMs: responseTimeMs || 0,
      },
    })

    // Updated feedback to use levelId
    return {
      isCorrect,
      correctChord: {
        id: correctChord.id,
        name: correctChord.name,
        displayName: correctChord.displayName,
        level: correctChord.levelId,
      },
      selectedChord: {
        id: selectedChord.id,
        name: selectedChord.name,
        displayName: selectedChord.displayName,
        level: selectedChord.levelId,
      },
      stats: {
        streak: newStreak,
        accuracy: Math.round(newAccuracy * 100) / 100,
        totalAttempts: newTotalGames,
        correctAnswers: newCorrectAnswers,
      },
      responseTimeMs,
      feedback: isCorrect
        ? `Correct! You identified ${correctChord.displayName} from Level ${correctChord.levelId}`
        : `Incorrect. The correct answer was ${correctChord.displayName} from Level ${correctChord.levelId}. You selected ${selectedChord.displayName} from Level ${selectedChord.levelId}`,
    }
  }

  /**
   * Change user level (level up or level down)
   * @param {string} userId - User ID
   * @param {number} newLevel - New level (1, 2, 3, or 4)
   * @returns {Object} Updated user with new level
   */
  async changeLevel(userId, newLevel) {
    if (newLevel < 1 || newLevel > 4) {
      throw new Error("Level must be between 1 and 4")
    }

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
    })

    if (!user) {
      throw new Error("User not found")
    }

    // Check subscription for level 3+
    if (newLevel >= 3) {
      const subscription = await prisma.subscription.findUnique({
        where: { userId },
      })

      const hasActiveSubscription =
        subscription && subscription.status === "ACTIVE" && subscription.endDate > new Date()

      if (!hasActiveSubscription) {
        throw new Error("Subscription required for Level 3 and above")
      }
    }

    // Update user level
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        currentLevel: newLevel,
      },
      select: {
        id: true,
        name: true,
        email: true,
        currentLevel: true,
        currentStreak: true,
        overallAccuracy: true,
        totalGamesPlayed: true,
        lastPlayedAt: true,
      },
    })

    return {
      ...updatedUser,
      levelInfo: {
        newLevel,
        expectedChordCount: this.getExpectedChordCount(newLevel),
        description:
          newLevel === 1
            ? "Level 1: The Essentials"
            : newLevel === 2
              ? "Level 2: Level 1 + Common and Useful"
              : newLevel === 3
                ? "Level 3: Level 1-2 + Barre and Transitional"
                : "Level 4: Level 1-3 + Rare and Challenging",
      },
    }
  }

  /**
   * Get user's current game stats
   * @param {string} userId - User ID
   * @returns {Object} User's current stats
   */
  async getUserStats(userId) {
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
        expectedChordCount: this.getExpectedChordCount(user.currentLevel),
      },
      levelInfo: {
        currentLevel: user.currentLevel,
        description:
          user.currentLevel === 1
            ? "Level 1: The Essentials"
            : user.currentLevel === 2
              ? "Level 2: Level 1 + Common and Useful"
              : user.currentLevel === 3
                ? "Level 3: Level 1-2 + Barre and Transitional"
                : "Level 4: Level 1-3 + Rare and Challenging",
        chordsAvailable: this.getExpectedChordCount(user.currentLevel),
      },
    }
  }
}

module.exports = new SimpleGameService()
