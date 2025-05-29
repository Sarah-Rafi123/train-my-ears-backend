const express = require("express")
const { body } = require("express-validator")
const {
  getSubscriptionStatus,
  createSubscription,
  cancelSubscription,
  getSubscriptionPricing,
} = require("../controllers/subscriptionController")

const router = express.Router()

/**
 * @swagger
 * /subscription/pricing:
 *   get:
 *     summary: Get subscription pricing
 *     tags: [Subscription]
 *     responses:
 *       200:
 *         description: Subscription pricing retrieved successfully
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
 *                         monthly:
 *                           type: object
 *                           properties:
 *                             price:
 *                               type: number
 *                               format: float
 *                               example: 2.95
 *                             currency:
 *                               type: string
 *                               example: "USD"
 *                         yearly:
 *                           type: object
 *                           properties:
 *                             price:
 *                               type: number
 *                               format: float
 *                               example: 29.95
 *                             currency:
 *                               type: string
 *                               example: "USD"
 */
router.get("/pricing", getSubscriptionPricing)

/**
 * @swagger
 * /subscription/status/{userId}:
 *   get:
 *     summary: Get user subscription status
 *     tags: [Subscription]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: Subscription status retrieved successfully
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
 *                         hasActiveSubscription:
 *                           type: boolean
 *                           description: Whether user has active subscription
 *                         subscription:
 *                           $ref: '#/components/schemas/Subscription'
 *                         canAccessLevel3Plus:
 *                           type: boolean
 *                           description: Whether user can access Level 3+
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 */
router.get("/status/:userId", getSubscriptionStatus)

/**
 * @swagger
 * /subscription:
 *   post:
 *     summary: Create subscription
 *     tags: [Subscription]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - type
 *             properties:
 *               userId:
 *                 type: string
 *                 description: User ID
 *               type:
 *                 type: string
 *                 enum: [MONTHLY, YEARLY]
 *                 description: Subscription type
 *               paymentMethod:
 *                 type: string
 *                 description: Payment method
 *               externalId:
 *                 type: string
 *                 description: External payment provider ID
 *     responses:
 *       201:
 *         description: Subscription created successfully
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
 *                         subscription:
 *                           $ref: '#/components/schemas/Subscription'
 */
router.post(
  "/",
  [
    body("userId").notEmpty(),
    body("type").isIn(["MONTHLY", "YEARLY"]),
    body("paymentMethod").optional(),
    body("externalId").optional(),
  ],
  createSubscription,
)

/**
 * @swagger
 * /subscription/{userId}:
 *   delete:
 *     summary: Cancel subscription
 *     tags: [Subscription]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: Subscription cancelled successfully
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
 *                         subscription:
 *                           $ref: '#/components/schemas/Subscription'
 */
router.delete("/:userId", cancelSubscription)

module.exports = router
