const express = require("express")
const { body, param } = require("express-validator")
const { startGameRound, submitAnswer, changeLevel, getUserStats } = require("../controllers/simpleGameController")

const router = express.Router()

/**
 * @swagger
 * /simple-game/start:
 *   post:
 *     summary: Start a new simple game round
 *     tags: [Simple Game]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - instrumentId
 *             properties:
 *               userId:
 *                 type: string
 *                 description: User ID
 *               instrumentId:
 *                 type: string
 *                 description: Instrument ID
 *               level:
 *                 type: integer
 *                 minimum: 1
 *                 maximum: 3
 *                 default: 1
 *                 description: Game level (1=3 chords, 2=6 chords, 3=9 chords)
 *     responses:
 *       201:
 *         description: Game round started successfully
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
 *                         gameRound:
 *                           type: object
 *                           properties:
 *                             gameSessionId:
 *                               type: string
 *                             gameRoundId:
 *                               type: string
 *                             level:
 *                               type: integer
 *                             chordOptions:
 *                               type: array
 *                               items:
 *                                 type: object
 *                                 properties:
 *                                   id:
 *                                     type: string
 *                                   name:
 *                                     type: string
 *                                   displayName:
 *                                     type: string
 *                             targetChord:
 *                               type: object
 *                               properties:
 *                                 id:
 *                                   type: string
 *                                 name:
 *                                   type: string
 *                                 displayName:
 *                                   type: string
 *                                 audioFileUrl:
 *                                   type: string
 *       403:
 *         description: Subscription required for Level 3+
 *       404:
 *         description: User or instrument not found
 */
router.post(
  "/start",
  [
    body("userId").notEmpty().withMessage("User ID is required"),
    body("instrumentId").notEmpty().withMessage("Instrument ID is required"),
    body("level").optional().isInt({ min: 1, max: 3 }).withMessage("Level must be between 1 and 3"),
  ],
  startGameRound,
)

/**
 * @swagger
 * /simple-game/submit-answer:
 *   post:
 *     summary: Submit answer for a game round
 *     tags: [Simple Game]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - gameRoundId
 *               - selectedChordId
 *             properties:
 *               userId:
 *                 type: string
 *                 description: User ID
 *               gameRoundId:
 *                 type: string
 *                 description: Game round ID
 *               selectedChordId:
 *                 type: string
 *                 description: Selected chord ID
 *               responseTimeMs:
 *                 type: integer
 *                 minimum: 0
 *                 description: Response time in milliseconds
 *     responses:
 *       200:
 *         description: Answer submitted successfully
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
 *                         result:
 *                           type: object
 *                           properties:
 *                             isCorrect:
 *                               type: boolean
 *                             correctChord:
 *                               type: object
 *                               properties:
 *                                 id:
 *                                   type: string
 *                                 name:
 *                                   type: string
 *                                 displayName:
 *                                   type: string
 *                             selectedChord:
 *                               type: object
 *                               properties:
 *                                 id:
 *                                   type: string
 *                                 name:
 *                                   type: string
 *                                 displayName:
 *                                   type: string
 *                             stats:
 *                               type: object
 *                               properties:
 *                                 streak:
 *                                   type: integer
 *                                 accuracy:
 *                                   type: number
 *                                 totalAttempts:
 *                                   type: integer
 *                                 correctAnswers:
 *                                   type: integer
 *       400:
 *         description: Invalid request or answer already submitted
 *       404:
 *         description: Game round or chord not found
 */
router.post(
  "/submit-answer",
  [
    body("userId").notEmpty().withMessage("User ID is required"),
    body("gameRoundId").notEmpty().withMessage("Game round ID is required"),
    body("selectedChordId").notEmpty().withMessage("Selected chord ID is required"),
    body("responseTimeMs").optional().isInt({ min: 0 }).withMessage("Response time must be a positive integer"),
  ],
  submitAnswer,
)

/**
 * @swagger
 * /simple-game/change-level:
 *   post:
 *     summary: Change user level (level up or level down)
 *     tags: [Simple Game]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - newLevel
 *             properties:
 *               userId:
 *                 type: string
 *                 description: User ID
 *               newLevel:
 *                 type: integer
 *                 minimum: 1
 *                 maximum: 3
 *                 description: New level (1, 2, or 3)
 *     responses:
 *       200:
 *         description: Level changed successfully
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
 *                         user:
 *                           $ref: '#/components/schemas/User'
 *       400:
 *         description: Invalid level or subscription required
 *       404:
 *         description: User not found
 */
router.post(
  "/change-level",
  [
    body("userId").notEmpty().withMessage("User ID is required"),
    body("newLevel").isInt({ min: 1, max: 3 }).withMessage("New level must be between 1 and 3"),
  ],
  changeLevel,
)

/**
 * @swagger
 * /simple-game/stats/{userId}:
 *   get:
 *     summary: Get user's current game stats
 *     tags: [Simple Game]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: User stats retrieved successfully
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
 *                         user:
 *                           type: object
 *                           properties:
 *                             id:
 *                               type: string
 *                             name:
 *                               type: string
 *                             currentLevel:
 *                               type: integer
 *                             currentStreak:
 *                               type: integer
 *                             overallAccuracy:
 *                               type: number
 *                             totalGamesPlayed:
 *                               type: integer
 *                             stats:
 *                               type: object
 *                               properties:
 *                                 level:
 *                                   type: integer
 *                                 streak:
 *                                   type: integer
 *                                 accuracy:
 *                                   type: number
 *                                 totalAttempts:
 *                                   type: integer
 *                                 correctAnswers:
 *                                   type: integer
 *                                 chordOptionsCount:
 *                                   type: integer
 *       404:
 *         description: User not found
 */
router.get("/stats/:userId", [param("userId").notEmpty().withMessage("User ID is required")], getUserStats)

module.exports = router
