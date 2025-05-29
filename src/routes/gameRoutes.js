const express = require("express")
const { body } = require("express-validator")
const { getChords, startGameSession, submitAnswer, completeGameSession } = require("../controllers/gameController")

const router = express.Router()

/**
 * @swagger
 * /game/chords/{instrumentId}/{levelId}:
 *   get:
 *     summary: Get chords for instrument and level
 *     tags: [Game]
 *     parameters:
 *       - in: path
 *         name: instrumentId
 *         required: true
 *         schema:
 *           type: string
 *         description: Instrument ID
 *       - in: path
 *         name: levelId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Level ID
 *     responses:
 *       200:
 *         description: List of chords for the specified instrument and level
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
 *                         chords:
 *                           type: array
 *                           items:
 *                             $ref: '#/components/schemas/Chord'
 */
router.get("/chords/:instrumentId/:levelId", getChords)

/**
 * @swagger
 * /game/sessions:
 *   post:
 *     summary: Start a new game session
 *     tags: [Game]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - instrumentId
 *               - levelId
 *             properties:
 *               userId:
 *                 type: string
 *                 description: User ID
 *               instrumentId:
 *                 type: string
 *                 description: Instrument ID
 *               levelId:
 *                 type: integer
 *                 minimum: 1
 *                 description: Level ID
 *               gameMode:
 *                 type: string
 *                 enum: [SINGLE_CHORD, ADVANCED_SEQUENCE]
 *                 default: SINGLE_CHORD
 *                 description: Game mode
 *     responses:
 *       201:
 *         description: Game session started successfully
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
 *                         gameSession:
 *                           $ref: '#/components/schemas/GameSession'
 */
router.post(
  "/sessions",
  [
    body("userId").notEmpty(),
    body("instrumentId").notEmpty(),
    body("levelId").isInt({ min: 1 }),
    body("gameMode").optional().isIn(["SINGLE_CHORD", "ADVANCED_SEQUENCE"]),
  ],
  startGameSession,
)

/**
 * @swagger
 * /game/sessions/answer:
 *   post:
 *     summary: Submit an answer for a chord
 *     tags: [Game]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - gameSessionId
 *               - chordId
 *               - userAnswer
 *             properties:
 *               gameSessionId:
 *                 type: string
 *                 description: Game session ID
 *               chordId:
 *                 type: string
 *                 description: Chord ID
 *               userAnswer:
 *                 type: string
 *                 description: User's answer
 *               responseTimeMs:
 *                 type: integer
 *                 minimum: 0
 *                 description: Response time in milliseconds
 *               sequenceOrder:
 *                 type: integer
 *                 minimum: 1
 *                 default: 1
 *                 description: Sequence order for advanced mode
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
 *                         isCorrect:
 *                           type: boolean
 *                           description: Whether the answer was correct
 *                         correctAnswer:
 *                           type: string
 *                           description: The correct answer
 *                         gameSession:
 *                           $ref: '#/components/schemas/GameSession'
 */
router.post(
  "/sessions/answer",
  [
    body("gameSessionId").notEmpty(),
    body("chordId").notEmpty(),
    body("userAnswer").notEmpty(),
    body("responseTimeMs").optional().isInt({ min: 0 }),
    body("sequenceOrder").optional().isInt({ min: 1 }),
  ],
  submitAnswer,
)

/**
 * @swagger
 * /game/sessions/{gameSessionId}/complete:
 *   put:
 *     summary: Complete a game session
 *     tags: [Game]
 *     parameters:
 *       - in: path
 *         name: gameSessionId
 *         required: true
 *         schema:
 *           type: string
 *         description: Game session ID
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               durationMs:
 *                 type: integer
 *                 minimum: 0
 *                 description: Session duration in milliseconds
 *     responses:
 *       200:
 *         description: Game session completed successfully
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
 *                         gameSession:
 *                           $ref: '#/components/schemas/GameSession'
 */
router.put("/sessions/:gameSessionId/complete", completeGameSession)

module.exports = router
