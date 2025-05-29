const express = require("express")
const { body } = require("express-validator")
const {
  getDailyLeaderboard,
  updateLeaderboardEntry,
  getAllLevelsLeaderboard,
} = require("../controllers/leaderboardController")

const router = express.Router()

/**
 * @swagger
 * /leaderboard/daily/{levelId}:
 *   get:
 *     summary: Get daily leaderboard for a specific level
 *     tags: [Leaderboard]
 *     parameters:
 *       - in: path
 *         name: levelId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Level ID
 *       - in: query
 *         name: date
 *         schema:
 *           type: string
 *           format: date
 *         description: Date for leaderboard (defaults to today)
 *     responses:
 *       200:
 *         description: Daily leaderboard retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/ApiResponse'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       type: object
 *                       properties:
 *                         leaderboard:
 *                           type: array
 *                           items:
 *                             $ref: '#/components/schemas/LeaderboardEntry'
 *                         date:
 *                           type: string
 *                           format: date
 *                         level:
 *                           $ref: '#/components/schemas/Level'
 */
router.get("/daily/:levelId", getDailyLeaderboard)

/**
 * @swagger
 * /leaderboard/summary:
 *   get:
 *     summary: Get leaderboard summary for all levels
 *     tags: [Leaderboard]
 *     responses:
 *       200:
 *         description: Leaderboard summary retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/ApiResponse'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       type: object
 *                       properties:
 *                         leaderboardSummary:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               level:
 *                                 $ref: '#/components/schemas/Level'
 *                               leader:
 *                                 $ref: '#/components/schemas/LeaderboardEntry'
 *                         date:
 *                           type: string
 *                           format: date
 */
router.get("/summary", getAllLevelsLeaderboard)

/**
 * @swagger
 * /leaderboard/entry:
 *   post:
 *     summary: Update leaderboard entry
 *     tags: [Leaderboard]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - levelId
 *               - score
 *               - accuracy
 *               - streak
 *               - gamesPlayed
 *             properties:
 *               userId:
 *                 type: string
 *                 description: User ID
 *               levelId:
 *                 type: integer
 *                 minimum: 1
 *                 description: Level ID
 *               score:
 *                 type: integer
 *                 minimum: 0
 *                 description: Score
 *               accuracy:
 *                 type: number
 *                 format: float
 *                 minimum: 0
 *                 maximum: 100
 *                 description: Accuracy percentage
 *               streak:
 *                 type: integer
 *                 minimum: 0
 *                 description: Streak
 *               gamesPlayed:
 *                 type: integer
 *                 minimum: 1
 *                 description: Games played
 *               averageTimeMs:
 *                 type: integer
 *                 minimum: 0
 *                 description: Average time in milliseconds
 *     responses:
 *       200:
 *         description: Leaderboard entry updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/ApiResponse'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       type: object
 *                       properties:
 *                         leaderboardEntry:
 *                           $ref: '#/components/schemas/LeaderboardEntry'
 */
router.post(
  "/entry",
  [
    body("userId").notEmpty(),
    body("levelId").isInt({ min: 1 }),
    body("score").isInt({ min: 0 }),
    body("accuracy").isFloat({ min: 0, max: 100 }),
    body("streak").isInt({ min: 0 }),
    body("gamesPlayed").isInt({ min: 1 }),
    body("averageTimeMs").optional().isInt({ min: 0 }),
  ],
  updateLeaderboardEntry,
)

module.exports = router
