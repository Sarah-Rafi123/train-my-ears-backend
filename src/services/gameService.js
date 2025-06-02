const prisma = require("../config/database")

class GameService {
  // Existing methods remain the same...
  async getChords(instrumentId, levelId) {
    const instrument = await prisma.instrument.findUnique({
      where: { id: instrumentId },
    })

    if (!instrument) {
      throw new Error("Instrument not found")
    }

    const level = await prisma.level.findUnique({
      where: { id: Number.parseInt(levelId) },
    })

    if (!level) {
      throw new Error("Level not found")
    }

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

  async startGameSession(sessionData) {
    const { instrumentId, levelId, gameMode = "SIMPLE_MODE", userId } = sessionData

    const instrument = await prisma.instrument.findUnique({
      where: { id: instrumentId },
    })

    if (!instrument) {
      throw new Error("Instrument not found")
    }

    const level = await prisma.level.findUnique({
      where: { id: Number.parseInt(levelId) },
    })

    if (!level) {
      throw new Error("Level not found")
    }

    if (!level.isFree) {
      throw new Error("Subscription required for this level")
    }

    let userToConnect = null

    if (!userId) {
      const guestUser = await prisma.user.findFirst({
        where: { email: "guest@trainmyears.com" },
      })

      if (guestUser) {
        userToConnect = { id: guestUser.id }
      } else {
        const newGuestUser = await prisma.user.create({
          data: {
            name: "Guest User",
            email: "guest@trainmyears.com",
          },
        })
        userToConnect = { id: newGuestUser.id }
      }
    } else {
      const user = await prisma.user.findUnique({
        where: { id: userId },
      })

      if (!user) {
        throw new Error("User not found")
      }

      userToConnect = { id: userId }
    }

    const gameSession = await prisma.gameSession.create({
      data: {
        instrumentId,
        levelId: Number.parseInt(levelId),
        gameMode,
        startedAt: new Date(),
        userId: userToConnect.id,
      },
      include: {
        instrument: true,
        level: true,
      },
    })

    return gameSession
  }

  async submitAnswer(answerData) {
    const { gameSessionId, chordId, userAnswer, responseTimeMs, sequenceOrder = 1 } = answerData

    const gameSession = await prisma.gameSession.findUnique({
      where: { id: gameSessionId },
    })

    if (!gameSession) {
      throw new Error("Game session not found")
    }

    const chord = await prisma.chord.findUnique({
      where: { id: chordId },
    })

    if (!chord) {
      throw new Error("Chord not found")
    }

    const isCorrect = userAnswer.toLowerCase() === chord.name.toLowerCase()

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

  async completeGameSession(gameSessionId, durationMs) {
    const gameSession = await prisma.gameSession.findUnique({
      where: { id: gameSessionId },
      include: {
        level: true,
      },
    })

    if (!gameSession) {
      throw new Error("Game session not found")
    }

    if (gameSession.isCompleted) {
      throw new Error("Game session already completed")
    }

    const updatedGameSession = await prisma.gameSession.update({
      where: { id: gameSessionId },
      data: {
        isCompleted: true,
        completedAt: new Date(),
        durationMs,
      },
      include: {
        level: true,
      },
    })

    return updatedGameSession
  }

  async getGameHistory(options = {}) {
    const { limit = 10, offset = 0, gameMode } = options

    const whereClause = {}
    if (gameMode) {
      whereClause.gameMode = gameMode
    }

    const gameSessions = await prisma.gameSession.findMany({
      where: whereClause,
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
      where: whereClause,
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

  async getGameStatistics(options = {}) {
    const { gameMode, levelId } = options

    const whereClause = { isCompleted: true }
    if (gameMode) {
      whereClause.gameMode = gameMode
    }
    if (levelId) {
      whereClause.levelId = Number.parseInt(levelId)
    }

    const totalGames = await prisma.gameSession.count({
      where: whereClause,
    })

    const averageAccuracy = await prisma.gameSession.aggregate({
      where: whereClause,
      _avg: {
        accuracy: true,
      },
    })

    const maxStreak = await prisma.gameSession.aggregate({
      where: whereClause,
      _max: {
        maxStreak: true,
      },
    })

    const averageDuration = await prisma.gameSession.aggregate({
      where: whereClause,
      _avg: {
        durationMs: true,
      },
    })

    return {
      totalGames,
      averageAccuracy: averageAccuracy._avg.accuracy || 0,
      maxStreak: maxStreak._max.maxStreak || 0,
      averageDurationMs: averageDuration._avg.durationMs || 0,
      gameMode,
      levelId,
    }
  }

  // SIMPLE MODE METHODS
  async getCumulativeChords(instrumentId, level) {
    console.log(`🎵 Getting cumulative chords for instrument: ${instrumentId}, level: ${level}`)

    const chords = await prisma.chord.findMany({
      where: {
        instrumentId,
        isActive: true,
        levelId: {
          lte: level,
        },
      },
      include: {
        level: true,
      },
      orderBy: [{ levelId: "asc" }, { name: "asc" }],
    })

    console.log(`🎵 Found ${chords.length} cumulative chords for levels 1-${level}`)
    return chords
  }

  getExpectedChordCount(level) {
    switch (level) {
      case 1:
        return 3
      case 2:
        return 6
      case 3:
        return 9
      case 4:
        return 12
      default:
        return 3
    }
  }

  async startSimpleGameRound(instrumentId, level = 1) {
    console.log(`🎮 Starting simple game round - Instrument: ${instrumentId}, Level: ${level}`)

    const instrument = await prisma.instrument.findUnique({
      where: { id: instrumentId },
    })

    if (!instrument) {
      throw new Error("Instrument not found")
    }

    const availableChords = await this.getCumulativeChords(instrumentId, level)
    const expectedCount = this.getExpectedChordCount(level)

    if (availableChords.length === 0) {
      throw new Error(`No chords found for instrument ${instrumentId} at level ${level}`)
    }

    const targetChord = availableChords[Math.floor(Math.random() * availableChords.length)]
    console.log(`🎯 Target chord selected: ${targetChord.name} (Level ${targetChord.levelId})`)

    let guestUser = await prisma.user.findFirst({
      where: { email: "guest@trainmyears.com" },
    })

    if (!guestUser) {
      guestUser = await prisma.user.create({
        data: {
          name: "Guest User",
          email: "guest@trainmyears.com",
        },
      })
    }

    const gameSession = await prisma.gameSession.create({
      data: {
        userId: guestUser.id,
        instrumentId,
        levelId: level,
        gameMode: "SIMPLE_MODE",
        startedAt: new Date(),
      },
    })

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
        expectedChordCount: expectedCount,
        actualChordCount: availableChords.length,
      },
    }

    console.log(`✅ Simple game round created with ${response.chordOptions.length} chord options`)
    return response
  }

  async submitSimpleAnswer(gameRoundId, selectedChordId, responseTimeMs = null) {
    const gameRound = await prisma.gameSessionChord.findUnique({
      where: { id: gameRoundId },
      include: {
        gameSession: true,
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

    if (gameRound.userAnswer) {
      throw new Error("Answer already submitted for this round")
    }

    const selectedChord = await prisma.chord.findUnique({
      where: { id: selectedChordId },
      include: {
        level: true,
      },
    })

    if (!selectedChord) {
      throw new Error("Selected chord not found")
    }

    const isCorrect = selectedChordId === gameRound.chordId
    const correctChord = gameRound.chord

    await prisma.gameSessionChord.update({
      where: { id: gameRoundId },
      data: {
        userAnswer: selectedChord.name,
        isCorrect,
        responseTimeMs,
      },
    })

    const gameSession = gameRound.gameSession
    const newTotalQuestions = gameSession.totalQuestions + 1
    const newCorrectAnswers = gameSession.correctAnswers + (isCorrect ? 1 : 0)
    const newAccuracy = (newCorrectAnswers / newTotalQuestions) * 100
    const newSessionStreak = isCorrect ? gameSession.sessionStreak + 1 : 0
    const newMaxStreak = Math.max(gameSession.maxStreak, newSessionStreak)

    await prisma.gameSession.update({
      where: { id: gameRound.gameSessionId },
      data: {
        totalQuestions: newTotalQuestions,
        correctAnswers: newCorrectAnswers,
        accuracy: newAccuracy,
        sessionStreak: newSessionStreak,
        maxStreak: newMaxStreak,
      },
    })

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
        sessionStreak: newSessionStreak,
        accuracy: Math.round(newAccuracy * 100) / 100,
        totalQuestions: newTotalQuestions,
        correctAnswers: newCorrectAnswers,
      },
      responseTimeMs,
      feedback: isCorrect
        ? `Correct! You identified ${correctChord.displayName} from Level ${correctChord.levelId}`
        : `Incorrect. The correct answer was ${correctChord.displayName} from Level ${correctChord.levelId}. You selected ${selectedChord.displayName} from Level ${selectedChord.levelId}`,
    }
  }

  // ADVANCED MODE METHODS
  getSequenceConfig(level) {
    switch (level) {
      case 1:
        return { sequenceLength: 3, chordPoolSize: 6 }
      case 2:
        return { sequenceLength: 4, chordPoolSize: 8 }
      case 3:
        return { sequenceLength: 5, chordPoolSize: 10 }
      case 4:
        return { sequenceLength: 6, chordPoolSize: 12 }
      default:
        return { sequenceLength: 3, chordPoolSize: 6 }
    }
  }

  async startAdvancedGameRound(instrumentId, level = 1, playerName = "Anonymous") {
    console.log(`🎮 Starting advanced game round - Instrument: ${instrumentId}, Level: ${level}`)

    const instrument = await prisma.instrument.findUnique({
      where: { id: instrumentId },
    })

    if (!instrument) {
      throw new Error("Instrument not found")
    }

    const { sequenceLength, chordPoolSize } = this.getSequenceConfig(level)

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

    const shuffledChords = allChords.sort(() => 0.5 - Math.random())
    const chordPool = shuffledChords.slice(0, chordPoolSize)

    const targetSequence = []
    for (let i = 0; i < sequenceLength; i++) {
      const randomChord = chordPool[Math.floor(Math.random() * chordPool.length)]
      targetSequence.push(randomChord)
    }

    let guestUser = await prisma.user.findFirst({
      where: { email: "guest@trainmyears.com" },
    })

    if (!guestUser) {
      guestUser = await prisma.user.create({
        data: {
          name: "Guest User",
          email: "guest@trainmyears.com",
        },
      })
    }

    const gameSession = await prisma.gameSession.create({
      data: {
        userId: guestUser.id,
        instrumentId,
        levelId: level,
        gameMode: "ADVANCE_MODE",
        startedAt: new Date(),
      },
    })

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
      sequenceAudioUrls,
      instrument: {
        id: instrument.id,
        name: instrument.name,
        displayName: instrument.displayName,
      },
      playerName,
    }
  }

  async submitAdvancedSequenceAnswer(gameSessionId, submittedSequence, responseTimeMs = null) {
    const gameSession = await prisma.gameSession.findUnique({
      where: { id: gameSessionId },
      include: {
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

    if (gameSession.isCompleted) {
      throw new Error("Answer already submitted for this game session")
    }

    const expectedLength = gameSession.chords.length
    if (submittedSequence.length !== expectedLength) {
      throw new Error(`Expected sequence length ${expectedLength}, got ${submittedSequence.length}`)
    }

    const correctSequence = gameSession.chords.map((round) => round.chordId)
    const isCorrect = JSON.stringify(submittedSequence) === JSON.stringify(correctSequence)

    for (let i = 0; i < submittedSequence.length; i++) {
      const submittedChordId = submittedSequence[i]
      const gameRound = gameSession.chords[i]

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

    await prisma.gameSession.update({
      where: { id: gameSessionId },
      data: {
        totalQuestions: expectedLength,
        correctAnswers: isCorrect ? expectedLength : 0,
        accuracy: isCorrect ? 100 : 0,
        isCompleted: true,
        completedAt: new Date(),
        durationMs: responseTimeMs,
      },
    })

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
      responseTimeMs,
      feedback: isCorrect
        ? `Perfect! You got the entire sequence correct!`
        : `Not quite right. Check the sequence comparison to see where you went wrong.`,
    }
  }

  // SOCIAL MODE METHODS
  async createSocialChallenge(instrumentId, level, challengeType, creatorName, maxParticipants = 10) {
    console.log(`🎮 Creating social challenge - Type: ${challengeType}, Level: ${level}`)

    const instrument = await prisma.instrument.findUnique({
      where: { id: instrumentId },
    })

    if (!instrument) {
      throw new Error("Instrument not found")
    }

    // Get chords for the challenge based on level
    const challengeChords = await this.getCumulativeChords(instrumentId, level)

    if (challengeChords.length === 0) {
      throw new Error(`No chords found for instrument ${instrumentId} at level ${level}`)
    }

    // Select 5 random chords for the challenge
    const shuffledChords = challengeChords.sort(() => 0.5 - Math.random())
    const selectedChords = shuffledChords.slice(0, Math.min(5, challengeChords.length))

    // Calculate expiry time based on challenge type
    const now = new Date()
    const expiresAt = new Date(now)

    switch (challengeType) {
      case "DAILY":
        expiresAt.setDate(now.getDate() + 1)
        break
      case "WEEKLY":
        expiresAt.setDate(now.getDate() + 7)
        break
      case "CUSTOM":
        expiresAt.setHours(now.getHours() + 2) // 2 hours for custom challenges
        break
    }

    // Create a unique challenge ID
    const challengeId = `challenge_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

    // Store challenge data (in a real app, you'd have a SocialChallenge model)
    const challengeData = {
      id: challengeId,
      instrumentId,
      level,
      challengeType,
      creatorName,
      maxParticipants,
      currentParticipants: 0,
      status: "ACTIVE",
      createdAt: now,
      expiresAt,
      chords: selectedChords.map((chord) => ({
        id: chord.id,
        name: chord.name,
        displayName: chord.displayName,
        audioFileUrl: chord.audioFileUrl,
      })),
      participants: [],
      leaderboard: [],
    }

    // In a real implementation, you'd save this to a database
    // For now, we'll return the challenge data
    console.log(`✅ Social challenge created: ${challengeId}`)

    return {
      challengeId,
      ...challengeData,
      instrument: {
        id: instrument.id,
        name: instrument.name,
        displayName: instrument.displayName,
      },
      joinCode: challengeId.split("_")[2], // Short code for easy sharing
    }
  }

  async joinSocialChallenge(challengeId, playerName) {
    console.log(`🎮 Player ${playerName} joining challenge: ${challengeId}`)

    // In a real implementation, you'd fetch the challenge from database
    // For now, we'll simulate the challenge data
    const participantId = `participant_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

    const participant = {
      id: participantId,
      challengeId,
      playerName,
      joinedAt: new Date(),
      hasSubmitted: false,
      score: 0,
      accuracy: 0,
      responseTime: null,
    }

    console.log(`✅ Player ${playerName} joined challenge with ID: ${participantId}`)

    return {
      participant,
      challengeInfo: {
        challengeId,
        status: "ACTIVE",
        timeRemaining: "1h 45m", // This would be calculated from expiresAt
        currentParticipants: 1, // This would be updated
        maxParticipants: 10,
      },
    }
  }

  async submitSocialAnswer(challengeId, participantId, answers, responseTimeMs = null) {
    console.log(`🎮 Submitting social answer for challenge: ${challengeId}`)

    // In a real implementation, you'd:
    // 1. Fetch the challenge and participant from database
    // 2. Validate the answers against the challenge chords
    // 3. Calculate score and update leaderboard
    // 4. Update participant status

    // Simulate scoring logic
    const totalQuestions = 5
    const correctAnswers = Math.floor(Math.random() * totalQuestions) + 1 // Random for demo
    const accuracy = (correctAnswers / totalQuestions) * 100
    const score = Math.round(accuracy * (10000 / (responseTimeMs || 10000))) // Score based on accuracy and speed

    const result = {
      participantId,
      challengeId,
      score,
      accuracy,
      correctAnswers,
      totalQuestions,
      responseTimeMs,
      rank: 1, // This would be calculated based on other participants
      isNewBest: true,
      feedback: `Great job! You scored ${score} points with ${accuracy}% accuracy!`,
      leaderboardPosition: {
        current: 1,
        total: 1,
        improvement: 0,
      },
    }

    console.log(`✅ Social answer submitted with score: ${score}`)
    return result
  }

  async getSocialLeaderboard(period = "weekly", instrumentId = null, level = null, limit = 20) {
    console.log(`🏆 Getting social leaderboard for period: ${period}`)

    // In a real implementation, you'd query the database for leaderboard data
    // For now, we'll return mock data
    const mockLeaderboard = [
      {
        rank: 1,
        playerName: "ChordMaster",
        score: 9850,
        accuracy: 98.5,
        averageResponseTime: 1200,
        gamesPlayed: 25,
        level: level || 3,
        instrument: instrumentId || "guitar",
      },
      {
        rank: 2,
        playerName: "MusicNinja",
        score: 9720,
        accuracy: 97.2,
        averageResponseTime: 1350,
        gamesPlayed: 22,
        level: level || 3,
        instrument: instrumentId || "guitar",
      },
      {
        rank: 3,
        playerName: "HarmonyHero",
        score: 9650,
        accuracy: 96.5,
        averageResponseTime: 1400,
        gamesPlayed: 28,
        level: level || 3,
        instrument: instrumentId || "guitar",
      },
    ]

    return {
      period,
      instrumentId,
      level,
      totalPlayers: mockLeaderboard.length,
      leaderboard: mockLeaderboard.slice(0, limit),
      lastUpdated: new Date(),
    }
  }

  async getDailyChallenges() {
    console.log(`🎯 Getting daily challenges`)

    // In a real implementation, you'd fetch active daily challenges from database
    const mockChallenges = [
      {
        id: "daily_guitar_beginner",
        title: "Guitar Basics Challenge",
        description: "Master the essential guitar chords",
        instrumentId: "guitar",
        level: 1,
        type: "DAILY",
        participants: 156,
        timeRemaining: "18h 32m",
        difficulty: "Beginner",
        reward: "50 XP",
        status: "ACTIVE",
      },
      {
        id: "daily_piano_intermediate",
        title: "Piano Progression Challenge",
        description: "Advanced chord progressions",
        instrumentId: "piano",
        level: 2,
        type: "DAILY",
        participants: 89,
        timeRemaining: "18h 32m",
        difficulty: "Intermediate",
        reward: "75 XP",
        status: "ACTIVE",
      },
      {
        id: "weekly_mixed_advanced",
        title: "Multi-Instrument Master",
        description: "Challenge across all instruments",
        instrumentId: null,
        level: 3,
        type: "WEEKLY",
        participants: 234,
        timeRemaining: "4d 18h",
        difficulty: "Advanced",
        reward: "200 XP + Badge",
        status: "ACTIVE",
      },
    ]

    return {
      challenges: mockChallenges,
      totalActive: mockChallenges.length,
      lastUpdated: new Date(),
    }
  }
}

module.exports = new GameService()
