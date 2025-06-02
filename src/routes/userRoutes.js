const express = require("express")
const { body } = require("express-validator")
const { registerUser, getUserProfile, updateUserStats, updateUserProfile } = require("../controllers/userController")
const { protect } = require("../middleware/auth")

const router = express.Router()

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management endpoints
 */


/**
 * @swagger
 * /users/{userId}/profile:
 *   get:
 *     summary: Get user profile
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
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
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 */
router.get("/:userId/profile", protect, getUserProfile)

/**
 * @swagger
 * /users/{userId}/stats:
 *   put:
 *     summary: Update user stats
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               level:
 *                 type: integer
 *                 minimum: 1
 *                 description: Current level
 *               accuracy:
 *                 type: number
 *                 format: float
 *                 minimum: 0
 *                 maximum: 100
 *                 description: Overall accuracy percentage
 *               streak:
 *                 type: integer
 *                 minimum: 0
 *                 description: Current streak
 *               gamesPlayed:
 *                 type: integer
 *                 minimum: 0
 *                 description: Total games played
 *     responses:
 *       200:
 *         description: User stats updated successfully
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
 */
router.put(
  "/:userId/stats",
  protect,
  [
    body("level").optional().isInt({ min: 1 }),
    body("accuracy").optional().isFloat({ min: 0, max: 100 }),
    body("streak").optional().isInt({ min: 0 }),
    body("gamesPlayed").optional().isInt({ min: 0 }),
  ],
  updateUserStats,
)

/**
 * @swagger
 * /users/{userId}:
 *   put:
 *     summary: Update user profile
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: User's name
 *               email:
 *                 type: string
 *                 format: email
 *                 description: User's email address
 *               currentPassword:
 *                 type: string
 *                 format: password
 *                 description: Current password (required for password change)
 *               newPassword:
 *                 type: string
 *                 format: password
 *                 description: New password (min 6 characters)
 *     responses:
 *       200:
 *         description: User profile updated successfully
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
 */
router.put(
  "/:userId",
  protect,
  [
    body("name").optional().notEmpty().withMessage("Name cannot be empty"),
    body("email").optional().isEmail().withMessage("Please include a valid email"),
    body("newPassword").optional().isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
  ],
  updateUserProfile,
)

module.exports = router
