const express = require("express")
const router = express.Router()

// Import route modules
const authRoutes = require("./authRoutes")
const userRoutes = require("./userRoutes")
const gameRoutes = require("./gameRoutes")
const leaderboardRoutes = require("./leaderboardRoutes")
const subscriptionRoutes = require("./subscriptionRoutes")
const instrumentRoutes = require("./instrumentRoutes")

// API routes
router.use("/auth", authRoutes)
router.use("/users", userRoutes)
router.use("/game", gameRoutes)
router.use("/leaderboard", leaderboardRoutes)
router.use("/subscription", subscriptionRoutes)
router.use("/instruments", instrumentRoutes)

module.exports = router
