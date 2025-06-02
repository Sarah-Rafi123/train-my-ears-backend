const express = require("express")
const { body, param } = require("express-validator")
const {
  startAdvancedGameRound,
  submitSequenceAnswer,
  getUserAdvancedStats,
} = require("../controllers/advanceGameController")

const router = express.Router()

/**
 * @swagger
 * /advanced-game/start:
 *   post:
 *     summary: Start a new advanced game round (chord sequence)
 *     tags: [Advanced Game]
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
 *                 description: Game level (1=3 sequence/6 options, 2=4 sequence/8 options, 3=5 sequence/10 options)
 *     responses:
 *       201:
 *         description: Advanced game round started successfully
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
 *                             gameRoundIds:
 *                               type: array
 *                               items:
 *                                 type: string
 *                             level:
 *                               type: integer
 *                             sequenceLength:
 *                               type: integer
 *                             chordPool:
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
 *                             targetSequence:
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
 *                                   audioFileUrl:
 *                                     type: string
 *                                   position:
 *                                     type: integer
 *                             sequenceAudioUrls:
 *                               type: array
 *                               items:
 *                                 type: string
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
  startAdvancedGameRound,
)

/**
 * @swagger
 * /advanced-game/submit-sequence:
 *   post:
 *     summary: Submit sequence answer for advanced game round
 *     tags: [Advanced Game]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - gameSessionId
 *               - submittedSequence
 *             properties:
 *               userId:
 *                 type: string
 *                 description: User ID
 *               gameSessionId:
 *                 type: string
 *                 description: Game session ID
 *               submittedSequence:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Array of chord IDs in submitted order
 *               responseTimeMs:
 *                 type: integer
 *                 minimum: 0
 *                 description: Response time in milliseconds
 *     responses:
 *       200:
 *         description: Sequence answer submitted successfully
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
 *                             correctSequence:
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
 *                                   position:
 *                                     type: integer
 *                             submittedSequence:
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
 *                             sequenceComparison:
 *                               type: array
 *                               items:
 *                                 type: object
 *                                 properties:
 *                                   position:
 *                                     type: integer
 *                                   correct:
 *                                     type: boolean
 *                                   correctChordId:
 *                                     type: string
 *                                   submittedChordId:
 *                                     type: string
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
 *         description: Game session not found
 */
router.post(
  "/submit-sequence",
  [
    body("userId").notEmpty().withMessage("User ID is required"),
    body("gameSessionId").notEmpty().withMessage("Game session ID is required"),
    body("submittedSequence").isArray({ min: 1 }).withMessage("Submitted sequence must be a non-empty array"),
    body("submittedSequence.*").notEmpty().withMessage("Each chord ID in sequence is required"),
    body("responseTimeMs").optional().isInt({ min: 0 }).withMessage("Response time must be a positive integer"),
  ],
  submitSequenceAnswer,
)

/**
 * @swagger
 * /advanced-game/stats/{userId}:
 *   get:
 *     summary: Get user's advanced game stats
 *     tags: [Advanced Game]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: User advanced stats retrieved successfully
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
 *                                 sequenceLength:
 *                                   type: integer
 *                                 chordPoolSize:
 *                                   type: integer
 *                                 advancedGamesPlayed:
 *                                   type: integer
 *       404:
 *         description: User not found
 */
router.get("/stats/:userId", [param("userId").notEmpty().withMessage("User ID is required")], getUserAdvancedStats)

module.exports = router
