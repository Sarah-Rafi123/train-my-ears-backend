const express = require("express")
const { body, param, query } = require("express-validator")
const {
  getChords,
  startGameSession,
  submitAnswer,
  completeGameSession,
  getGameHistory,
  getGameStatistics,
  // Simple mode endpoints
  startSimpleGameRound,
  submitSimpleAnswer,
  // Advanced mode endpoints
  startAdvancedGameRound,
  submitAdvancedSequenceAnswer,
  // Social mode endpoints
  createSocialChallenge,
  joinSocialChallenge,
  submitSocialAnswer,
  getSocialLeaderboard,
  getDailyChallenges,
} = require("../controllers/gameController")

const router = express.Router()

// Existing routes remain the same...
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
 *               - instrumentId
 *               - levelId
 *             properties:
 *               instrumentId:
 *                 type: string
 *                 description: Instrument ID
 *               levelId:
 *                 type: integer
 *                 minimum: 1
 *                 description: Level ID
 *               gameMode:
 *                 type: string
 *                 enum: [SIMPLE_MODE, ADVANCE_MODE, SOCIAL_MODE]
 *                 default: SIMPLE_MODE
 *                 description: Game mode
 *     responses:
 *       201:
 *         description: Game session started successfully
 */
router.post(
  "/sessions",
  [
    body("instrumentId").notEmpty().withMessage("Instrument ID is required"),
    body("levelId").isInt({ min: 1 }).withMessage("Level ID must be a positive integer"),
    body("gameMode").optional().isIn(["SIMPLE_MODE", "ADVANCE_MODE", "SOCIAL_MODE"]).withMessage("Invalid game mode"),
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
 *                 description: Sequence order for advance mode
 *     responses:
 *       200:
 *         description: Answer submitted successfully
 */
router.post(
  "/sessions/answer",
  [
    body("gameSessionId").notEmpty().withMessage("Game session ID is required"),
    body("chordId").notEmpty().withMessage("Chord ID is required"),
    body("userAnswer").notEmpty().withMessage("User answer is required"),
    body("responseTimeMs").optional().isInt({ min: 0 }).withMessage("Response time must be a positive integer"),
    body("sequenceOrder").optional().isInt({ min: 1 }).withMessage("Sequence order must be a positive integer"),
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
 */
router.put("/sessions/:gameSessionId/complete", completeGameSession)

/**
 * @swagger
 * /game/history:
 *   get:
 *     summary: Get game history
 *     tags: [Game]
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 10
 *         description: Number of records to return
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *           minimum: 0
 *           default: 0
 *         description: Number of records to skip
 *       - in: query
 *         name: gameMode
 *         schema:
 *           type: string
 *           enum: [SIMPLE_MODE, ADVANCE_MODE, SOCIAL_MODE]
 *         description: Filter by game mode
 *     responses:
 *       200:
 *         description: Game history retrieved successfully
 */
router.get(
  "/history",
  [
    query("limit").optional().isInt({ min: 1, max: 100 }).withMessage("Limit must be between 1 and 100"),
    query("offset").optional().isInt({ min: 0 }).withMessage("Offset must be a non-negative integer"),
    query("gameMode").optional().isIn(["SIMPLE_MODE", "ADVANCE_MODE", "SOCIAL_MODE"]).withMessage("Invalid game mode"),
  ],
  getGameHistory,
)

/**
 * @swagger
 * /game/statistics:
 *   get:
 *     summary: Get game statistics
 *     tags: [Game]
 *     parameters:
 *       - in: query
 *         name: gameMode
 *         schema:
 *           type: string
 *           enum: [SIMPLE_MODE, ADVANCE_MODE, SOCIAL_MODE]
 *         description: Filter by game mode
 *       - in: query
 *         name: levelId
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: Filter by level ID
 *     responses:
 *       200:
 *         description: Game statistics retrieved successfully
 */
router.get(
  "/statistics",
  [
    query("gameMode").optional().isIn(["SIMPLE_MODE", "ADVANCE_MODE", "SOCIAL_MODE"]).withMessage("Invalid game mode"),
    query("levelId").optional().isInt({ min: 1 }).withMessage("Level ID must be a positive integer"),
  ],
  getGameStatistics,
)

// SIMPLE MODE ROUTES
/**
 * @swagger
 * /game/simple/start:
 *   post:
 *     summary: Start a new simple game round (no authentication required)
 *     tags: [Game - Simple Mode]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - instrumentId
 *             properties:
 *               instrumentId:
 *                 type: string
 *                 description: Instrument ID
 *               level:
 *                 type: integer
 *                 minimum: 1
 *                 maximum: 4
 *                 default: 1
 *                 description: Game level (1=3 chords, 2=6 chords, 3=9 chords, 4=12 chords)
 *     responses:
 *       201:
 *         description: Simple game round started successfully
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
 *                             totalChordsAvailable:
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
 *                                   level:
 *                                     type: integer
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
 *                                 level:
 *                                   type: integer
 *       404:
 *         description: Instrument not found
 *       500:
 *         description: Server error
 */
router.post(
  "/simple/start",
  [
    body("instrumentId").notEmpty().withMessage("Instrument ID is required"),
    body("level").optional().isInt({ min: 1, max: 4 }).withMessage("Level must be between 1 and 4"),
  ],
  startSimpleGameRound,
)

/**
 * @swagger
 * /game/simple/answer:
 *   post:
 *     summary: Submit answer for a simple game round
 *     tags: [Game - Simple Mode]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - gameRoundId
 *               - selectedChordId
 *             properties:
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
 *                                 level:
 *                                   type: integer
 *                             selectedChord:
 *                               type: object
 *                               properties:
 *                                 id:
 *                                   type: string
 *                                 name:
 *                                   type: string
 *                                 displayName:
 *                                   type: string
 *                                 level:
 *                                   type: integer
 *                             stats:
 *                               type: object
 *                               properties:
 *                                 sessionStreak:
 *                                   type: integer
 *                                 accuracy:
 *                                   type: number
 *                                 totalQuestions:
 *                                   type: integer
 *                                 correctAnswers:
 *                                   type: integer
 *                             feedback:
 *                               type: string
 *       404:
 *         description: Game round or chord not found
 *       409:
 *         description: Answer already submitted
 *       500:
 *         description: Server error
 */
router.post(
  "/simple/answer",
  [
    body("gameRoundId").notEmpty().withMessage("Game round ID is required"),
    body("selectedChordId").notEmpty().withMessage("Selected chord ID is required"),
    body("responseTimeMs").optional().isInt({ min: 0 }).withMessage("Response time must be a positive integer"),
  ],
  submitSimpleAnswer,
)

// ADVANCED MODE ROUTES
/**
 * @swagger
 * /game/advanced/start:
 *   post:
 *     summary: Start a new advanced game round (chord sequence)
 *     tags: [Game - Advanced Mode]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - instrumentId
 *             properties:
 *               instrumentId:
 *                 type: string
 *                 description: Instrument ID
 *               level:
 *                 type: integer
 *                 minimum: 1
 *                 maximum: 4
 *                 default: 1
 *                 description: Game level (1=3 sequence/6 options, 2=4 sequence/8 options, 3=5 sequence/10 options, 4=6 sequence/12 options)
 *               playerName:
 *                 type: string
 *                 default: "Anonymous"
 *                 description: Player name for anonymous play
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
 *                             instrument:
 *                               type: object
 *                               properties:
 *                                 id:
 *                                   type: string
 *                                 name:
 *                                   type: string
 *                                 displayName:
 *                                   type: string
 *                             playerName:
 *                               type: string
 *       403:
 *         description: Subscription required for Level 3+
 *       404:
 *         description: Instrument not found
 *       500:
 *         description: Server error
 */
router.post(
  "/advanced/start",
  [
    body("instrumentId").notEmpty().withMessage("Instrument ID is required"),
    body("level").optional().isInt({ min: 1, max: 4 }).withMessage("Level must be between 1 and 4"),
    body("playerName").optional().isString().withMessage("Player name must be a string"),
  ],
  startAdvancedGameRound,
)

/**
 * @swagger
 * /game/advanced/submit-sequence:
 *   post:
 *     summary: Submit sequence answer for advanced game round
 *     tags: [Game - Advanced Mode]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - gameSessionId
 *               - submittedSequence
 *             properties:
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
 *                             responseTimeMs:
 *                               type: integer
 *                             feedback:
 *                               type: string
 *       400:
 *         description: Invalid request, answer already submitted, or sequence length mismatch
 *       404:
 *         description: Game session not found
 *       500:
 *         description: Server error
 */
router.post(
  "/advanced/submit-sequence",
  [
    body("gameSessionId").notEmpty().withMessage("Game session ID is required"),
    body("submittedSequence").isArray({ min: 1 }).withMessage("Submitted sequence must be a non-empty array"),
    body("submittedSequence.*").notEmpty().withMessage("Each chord ID in sequence is required"),
    body("responseTimeMs").optional().isInt({ min: 0 }).withMessage("Response time must be a positive integer"),
  ],
  submitAdvancedSequenceAnswer,
)

// SOCIAL MODE ROUTES
/**
 * @swagger
 * /game/social/challenge/create:
 *   post:
 *     summary: Create a new social challenge
 *     tags: [Game - Social Mode]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - instrumentId
 *               - level
 *               - challengeType
 *               - creatorName
 *             properties:
 *               instrumentId:
 *                 type: string
 *                 description: Instrument ID
 *               level:
 *                 type: integer
 *                 minimum: 1
 *                 maximum: 4
 *                 description: Game level
 *               challengeType:
 *                 type: string
 *                 enum: [DAILY, WEEKLY, CUSTOM]
 *                 description: Type of challenge
 *               creatorName:
 *                 type: string
 *                 description: Name of the challenge creator
 *               maxParticipants:
 *                 type: integer
 *                 minimum: 2
 *                 maximum: 100
 *                 default: 10
 *                 description: Maximum number of participants allowed
 *     responses:
 *       201:
 *         description: Social challenge created successfully
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
 *                         challenge:
 *                           type: object
 *                           properties:
 *                             challengeId:
 *                               type: string
 *                             instrumentId:
 *                               type: string
 *                             level:
 *                               type: integer
 *                             challengeType:
 *                               type: string
 *                             creatorName:
 *                               type: string
 *                             maxParticipants:
 *                               type: integer
 *                             currentParticipants:
 *                               type: integer
 *                             status:
 *                               type: string
 *                             createdAt:
 *                               type: string
 *                               format: date-time
 *                             expiresAt:
 *                               type: string
 *                               format: date-time
 *                             chords:
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
 *                             instrument:
 *                               type: object
 *                               properties:
 *                                 id:
 *                                   type: string
 *                                 name:
 *                                   type: string
 *                                 displayName:
 *                                   type: string
 *                             joinCode:
 *                               type: string
 *       404:
 *         description: Instrument not found
 *       500:
 *         description: Server error
 */
router.post(
  "/social/challenge/create",
  [
    body("instrumentId").notEmpty().withMessage("Instrument ID is required"),
    body("level").isInt({ min: 1, max: 4 }).withMessage("Level must be between 1 and 4"),
    body("challengeType").isIn(["DAILY", "WEEKLY", "CUSTOM"]).withMessage("Invalid challenge type"),
    body("creatorName").notEmpty().withMessage("Creator name is required"),
    body("maxParticipants")
      .optional()
      .isInt({ min: 2, max: 100 })
      .withMessage("Max participants must be between 2 and 100"),
  ],
  createSocialChallenge,
)

/**
 * @swagger
 * /game/social/challenge/join:
 *   post:
 *     summary: Join an existing social challenge
 *     tags: [Game - Social Mode]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - challengeId
 *               - playerName
 *             properties:
 *               challengeId:
 *                 type: string
 *                 description: Challenge ID
 *               playerName:
 *                 type: string
 *                 description: Player name
 *     responses:
 *       200:
 *         description: Successfully joined challenge
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
 *                         participant:
 *                           type: object
 *                           properties:
 *                             id:
 *                               type: string
 *                             challengeId:
 *                               type: string
 *                             playerName:
 *                               type: string
 *                             joinedAt:
 *                               type: string
 *                               format: date-time
 *                             hasSubmitted:
 *                               type: boolean
 *                             score:
 *                               type: integer
 *                             accuracy:
 *                               type: number
 *                             responseTime:
 *                               type: integer
 *                         challengeInfo:
 *                           type: object
 *                           properties:
 *                             challengeId:
 *                               type: string
 *                             status:
 *                               type: string
 *                             timeRemaining:
 *                               type: string
 *                             currentParticipants:
 *                               type: integer
 *                             maxParticipants:
 *                               type: integer
 *       400:
 *         description: Challenge is full or player already joined
 *       404:
 *         description: Challenge not found
 *       500:
 *         description: Server error
 */
router.post(
  "/social/challenge/join",
  [
    body("challengeId").notEmpty().withMessage("Challenge ID is required"),
    body("playerName").notEmpty().withMessage("Player name is required"),
  ],
  joinSocialChallenge,
)

/**
 * @swagger
 * /game/social/challenge/submit:
 *   post:
 *     summary: Submit answer for a social challenge
 *     tags: [Game - Social Mode]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - challengeId
 *               - participantId
 *               - answers
 *             properties:
 *               challengeId:
 *                 type: string
 *                 description: Challenge ID
 *               participantId:
 *                 type: string
 *                 description: Participant ID
 *               answers:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     chordId:
 *                       type: string
 *                     answer:
 *                       type: string
 *                 description: Array of answers for each chord
 *               responseTimeMs:
 *                 type: integer
 *                 minimum: 0
 *                 description: Total response time in milliseconds
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
 *                             participantId:
 *                               type: string
 *                             challengeId:
 *                               type: string
 *                             score:
 *                               type: integer
 *                             accuracy:
 *                               type: number
 *                             correctAnswers:
 *                               type: integer
 *                             totalQuestions:
 *                               type: integer
 *                             responseTimeMs:
 *                               type: integer
 *                             rank:
 *                               type: integer
 *                             isNewBest:
 *                               type: boolean
 *                             feedback:
 *                               type: string
 *                             leaderboardPosition:
 *                               type: object
 *                               properties:
 *                                 current:
 *                                   type: integer
 *                                 total:
 *                                   type: integer
 *                                 improvement:
 *                                   type: integer
 *       400:
 *         description: Answer already submitted or challenge not active
 *       404:
 *         description: Challenge or participant not found
 *       500:
 *         description: Server error
 */
router.post(
  "/social/challenge/submit",
  [
    body("challengeId").notEmpty().withMessage("Challenge ID is required"),
    body("participantId").notEmpty().withMessage("Participant ID is required"),
    body("answers").isArray({ min: 1 }).withMessage("Answers must be a non-empty array"),
    body("responseTimeMs").optional().isInt({ min: 0 }).withMessage("Response time must be a positive integer"),
  ],
  submitSocialAnswer,
)

/**
 * @swagger
 * /game/social/leaderboard:
 *   get:
 *     summary: Get social mode leaderboard
 *     tags: [Game - Social Mode]
 *     parameters:
 *       - in: query
 *         name: period
 *         schema:
 *           type: string
 *           enum: [daily, weekly, monthly, all-time]
 *           default: weekly
 *         description: Time period for leaderboard
 *       - in: query
 *         name: instrumentId
 *         schema:
 *           type: string
 *         description: Filter by instrument
 *       - in: query
 *         name: level
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 4
 *         description: Filter by level
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 50
 *           default: 20
 *         description: Number of records to return
 *     responses:
 *       200:
 *         description: Leaderboard retrieved successfully
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
 *                           type: object
 *                           properties:
 *                             period:
 *                               type: string
 *                             instrumentId:
 *                               type: string
 *                             level:
 *                               type: integer
 *                             totalPlayers:
 *                               type: integer
 *                             leaderboard:
 *                               type: array
 *                               items:
 *                                 type: object
 *                                 properties:
 *                                   rank:
 *                                     type: integer
 *                                   playerName:
 *                                     type: string
 *                                   score:
 *                                     type: integer
 *                                   accuracy:
 *                                     type: number
 *                                   averageResponseTime:
 *                                     type: integer
 *                                   gamesPlayed:
 *                                     type: integer
 *                                   level:
 *                                     type: integer
 *                                   instrument:
 *                                     type: string
 *                             lastUpdated:
 *                               type: string
 *                               format: date-time
 *       500:
 *         description: Server error
 */
router.get(
  "/social/leaderboard",
  [
    query("period").optional().isIn(["daily", "weekly", "monthly", "all-time"]).withMessage("Invalid period"),
    query("instrumentId").optional().notEmpty().withMessage("Instrument ID cannot be empty"),
    query("level").optional().isInt({ min: 1, max: 4 }).withMessage("Level must be between 1 and 4"),
    query("limit").optional().isInt({ min: 1, max: 50 }).withMessage("Limit must be between 1 and 50"),
  ],
  getSocialLeaderboard,
)

/**
 * @swagger
 * /game/social/challenges/daily:
 *   get:
 *     summary: Get daily challenges
 *     tags: [Game - Social Mode]
 *     responses:
 *       200:
 *         description: Daily challenges retrieved successfully
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
 *                         challenges:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               id:
 *                                 type: string
 *                               title:
 *                                 type: string
 *                               description:
 *                                 type: string
 *                               instrumentId:
 *                                 type: string
 *                               level:
 *                                 type: integer
 *                               type:
 *                                 type: string
 *                               participants:
 *                                 type: integer
 *                               timeRemaining:
 *                                 type: string
 *                               difficulty:
 *                                 type: string
 *                               reward:
 *                                 type: string
 *                               status:
 *                                 type: string
 *                         totalActive:
 *                           type: integer
 *                         lastUpdated:
 *                           type: string
 *                           format: date-time
 *       500:
 *         description: Server error
 */
router.get("/social/challenges/daily", getDailyChallenges)

module.exports = router
