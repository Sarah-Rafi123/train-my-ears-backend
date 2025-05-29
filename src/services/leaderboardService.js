const prisma = require("../config/database")

/**
 * Leaderboard service - handles leaderboard-related business logic
 */
class LeaderboardService {
  /**
   * Get daily leaderboard for a specific level
   * @param {number} levelId - Level ID
   * @param {Date} date - Date for leaderboard (defaults to today)
   * @returns {Object} Leaderboard data
   */
  async getDailyLeaderboard(levelId, date = null) {
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

    return {
      leaderboard: rankedLeaderboard,
      date: targetDate,
      level: leaderboard[0]?.level || null,
    }
  }

  /**
   * Update user's leaderboard entry
   * @param {Object} entryData - Leaderboard entry data
   * @returns {Object} Updated leaderboard entry
   */
  async updateLeaderboardEntry(entryData) {
    const { userId, levelId, score, accuracy, streak, gamesPlayed, averageTimeMs } = entryData

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

    return leaderboardEntry
  }

  /**
   * Get leaderboard summary for all levels
   * @returns {Object} Leaderboard summary
   */
  async getAllLevelsLeaderboard() {
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

    return {
      leaderboardSummary,
      date: today,
    }
  }

  /**
   * Get user's leaderboard rankings
   * @param {string} userId - User ID
   * @returns {Object} User's rankings
   */
  async getUserRankings(userId) {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const userEntries = await prisma.leaderboardEntry.findMany({
      where: {
        userId,
        date: today,
      },
      include: {
        level: true,
      },
    })

    // For each entry, get the user's rank
    const rankings = await Promise.all(
      userEntries.map(async (entry) => {
        // Count how many users have a higher score
        const higherScores = await prisma.leaderboardEntry.count({
          where: {
            levelId: entry.levelId,
            date: today,
            score: {
              gt: entry.score,
            },
          },
        })

        // User's rank is higherScores + 1
        const rank = higherScores + 1

        return {
          ...entry,
          rank,
        }
      }),
    )

    return {
      rankings,
      date: today,
    }
  }
}

module.exports = new LeaderboardService()
