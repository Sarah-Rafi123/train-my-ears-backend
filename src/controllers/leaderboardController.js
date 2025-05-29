const prisma = require("../config/database")

// Get daily leaderboard for a specific level
const getDailyLeaderboard = async (req, res) => {
  try {
    const { levelId } = req.params
    const { date } = req.query

    const targetDate = date ? new Date(date) : new Date()
    targetDate.setHours(0, 0, 0, 0)

    const leaderboard = await prisma.leaderboardEntry.findMany({
      where: {
        levelId: Number.parseInt(levelId),
        date: targetDate,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
        level: {
          select: {
            number: true,
            name: true,
          },
        },
      },
      orderBy: [{ score: "desc" }, { accuracy: "desc" }, { streak: "desc" }],
      take: 50, // Top 50 players
    })

    // Add rank to each entry
    const rankedLeaderboard = leaderboard.map((entry, index) => ({
      ...entry,
      rank: index + 1,
    }))

    res.json({
      success: true,
      data: {
        leaderboard: rankedLeaderboard,
        date: targetDate,
        level: leaderboard[0]?.level || null,
      },
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: { message: "Server error fetching leaderboard" },
    })
  }
}

// Update user's leaderboard entry
const updateLeaderboardEntry = async (req, res) => {
  try {
    const { userId, levelId, score, accuracy, streak, gamesPlayed, averageTimeMs } = req.body

    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const leaderboardEntry = await prisma.leaderboardEntry.upsert({
      where: {
        userId_levelId_date: {
          userId,
          levelId: Number.parseInt(levelId),
          date: today,
        },
      },
      update: {
        score: Math.max(score, 0), // Ensure score is not negative
        accuracy,
        streak,
        gamesPlayed,
        averageTimeMs,
      },
      create: {
        userId,
        levelId: Number.parseInt(levelId),
        date: today,
        score,
        accuracy,
        streak,
        gamesPlayed,
        averageTimeMs,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
        level: {
          select: {
            number: true,
            name: true,
          },
        },
      },
    })

    res.json({
      success: true,
      data: { leaderboardEntry },
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: { message: "Server error updating leaderboard" },
    })
  }
}

// Get all levels leaderboard summary
const getAllLevelsLeaderboard = async (req, res) => {
  try {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const levels = await prisma.level.findMany({
      where: { isActive: true },
      orderBy: { number: "asc" },
    })

    const leaderboardSummary = await Promise.all(
      levels.map(async (level) => {
        const topEntry = await prisma.leaderboardEntry.findFirst({
          where: {
            levelId: level.id,
            date: today,
          },
          include: {
            user: {
              select: {
                id: true,
                name: true,
              },
            },
          },
          orderBy: [{ score: "desc" }, { accuracy: "desc" }, { streak: "desc" }],
        })

        return {
          level,
          leader: topEntry || null,
        }
      }),
    )

    res.json({
      success: true,
      data: {
        leaderboardSummary,
        date: today,
      },
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: { message: "Server error fetching leaderboard summary" },
    })
  }
}

module.exports = {
  getDailyLeaderboard,
  updateLeaderboardEntry,
  getAllLevelsLeaderboard,
}
