const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const morgan = require("morgan")
const path = require("path")
require("dotenv").config()

const { errorHandler, notFound } = require("./middleware/errorMiddleware")
const rateLimiter = require("./middleware/rateLimiter")
const routes = require("./routes")
const { swaggerUi, specs } = require("./config/swagger")

const app = express()
const PORT = process.env.PORT || 3000

// Security middleware
app.use(helmet())
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials: true,
  }),
)

// Rate limiting
app.use(rateLimiter)

// Logging
app.use(morgan("combined"))

// Body parsing middleware
app.use(express.json({ limit: "10mb" }))
app.use(express.urlencoded({ extended: true }))

// Serve static files (uploaded audio files)
app.use("/uploads", express.static(path.join(__dirname, "../uploads")))

// Swagger documentation
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, {
    explorer: true,
    customCss: ".swagger-ui .topbar { display: none }",
    customSiteTitle: "TrainmyEars API Documentation",
  }),
)

// Health check endpoint
app.get("/trainmyears", (req, res) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  })
})

// API routes
app.use("/api", routes)

// Error handling middleware
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
  console.log(`📊 Health check: http://localhost:${PORT}/trainmyears`)
  console.log(`📚 API Documentation: http://localhost:${PORT}/api-docs`)
  console.log(`🎵 Audio files: http://localhost:${PORT}/uploads/audio/`)
  console.log(`🌍 Environment: ${process.env.NODE_ENV || "development"}`)
})

module.exports = app
