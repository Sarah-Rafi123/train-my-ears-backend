const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "TrainmyEars API",
      version: "1.0.0",
      description: "API for TrainmyEars - Chord Recognition Training App",
      contact: {
        name: "TrainmyEars Support",
        email: "support@trainmyears.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000/api",
        description: "Development server",
      },
      {
        url: "https://your-production-url.com/api",
        description: "Production server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        User: {
          type: "object",
          required: ["name", "email"],
          properties: {
            id: {
              type: "string",
              description: "User ID",
            },
            name: {
              type: "string",
              description: "User's name",
            },
            email: {
              type: "string",
              format: "email",
              description: "User's email address",
            },
            currentLevel: {
              type: "integer",
              description: "Current level",
              default: 1,
            },
            currentStreak: {
              type: "integer",
              description: "Current streak",
              default: 0,
            },
            overallAccuracy: {
              type: "number",
              format: "float",
              description: "Overall accuracy percentage",
              default: 0.0,
            },
            totalGamesPlayed: {
              type: "integer",
              description: "Total games played",
              default: 0,
            },
            lastPlayedAt: {
              type: "string",
              format: "date-time",
              description: "Last played timestamp",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "Account creation timestamp",
            },
          },
        },
        Instrument: {
          type: "object",
          properties: {
            id: {
              type: "string",
              description: "Instrument ID",
            },
            name: {
              type: "string",
              description: "Instrument name",
              example: "Guitar",
            },
            displayName: {
              type: "string",
              description: "Display name",
              example: "Guitar Chord",
            },
            isActive: {
              type: "boolean",
              description: "Whether instrument is active",
              default: true,
            },
          },
        },
        Level: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              description: "Level ID",
            },
            number: {
              type: "integer",
              description: "Level number",
              example: 1,
            },
            name: {
              type: "string",
              description: "Level name",
              example: "Level 1",
            },
            description: {
              type: "string",
              description: "Level description",
              example: "Basic chords - Free",
            },
            isFree: {
              type: "boolean",
              description: "Whether level is free",
              default: true,
            },
            isActive: {
              type: "boolean",
              description: "Whether level is active",
              default: true,
            },
          },
        },
        Chord: {
          type: "object",
          properties: {
            id: {
              type: "string",
              description: "Chord ID",
            },
            name: {
              type: "string",
              description: "Chord name",
              example: "G",
            },
            displayName: {
              type: "string",
              description: "Chord display name",
              example: "G Major",
            },
            audioFileUrl: {
              type: "string",
              description: "Audio file URL",
              example: "/audio/guitar/g.mp3",
            },
            instrumentId: {
              type: "string",
              description: "Instrument ID",
            },
            levelId: {
              type: "integer",
              description: "Level ID",
            },
            isActive: {
              type: "boolean",
              description: "Whether chord is active",
              default: true,
            },
          },
        },
        GameSession: {
          type: "object",
          properties: {
            id: {
              type: "string",
              description: "Game session ID",
            },
            userId: {
              type: "string",
              description: "User ID",
            },
            instrumentId: {
              type: "string",
              description: "Instrument ID",
            },
            levelId: {
              type: "integer",
              description: "Level ID",
            },
            gameMode: {
              type: "string",
              enum: ["SINGLE_CHORD", "ADVANCED_SEQUENCE"],
              description: "Game mode",
              default: "SINGLE_CHORD",
            },
            isCompleted: {
              type: "boolean",
              description: "Whether session is completed",
              default: false,
            },
            totalQuestions: {
              type: "integer",
              description: "Total questions",
              default: 0,
            },
            correctAnswers: {
              type: "integer",
              description: "Correct answers",
              default: 0,
            },
            accuracy: {
              type: "number",
              format: "float",
              description: "Session accuracy",
              default: 0.0,
            },
            sessionStreak: {
              type: "integer",
              description: "Session streak",
              default: 0,
            },
            maxStreak: {
              type: "integer",
              description: "Maximum streak",
              default: 0,
            },
            startedAt: {
              type: "string",
              format: "date-time",
              description: "Session start time",
            },
            completedAt: {
              type: "string",
              format: "date-time",
              description: "Session completion time",
            },
            durationMs: {
              type: "integer",
              description: "Session duration in milliseconds",
            },
          },
        },
        LeaderboardEntry: {
          type: "object",
          properties: {
            id: {
              type: "string",
              description: "Leaderboard entry ID",
            },
            userId: {
              type: "string",
              description: "User ID",
            },
            levelId: {
              type: "integer",
              description: "Level ID",
            },
            score: {
              type: "integer",
              description: "Score",
            },
            accuracy: {
              type: "number",
              format: "float",
              description: "Accuracy percentage",
            },
            streak: {
              type: "integer",
              description: "Streak",
            },
            gamesPlayed: {
              type: "integer",
              description: "Games played",
            },
            averageTimeMs: {
              type: "integer",
              description: "Average time in milliseconds",
            },
            date: {
              type: "string",
              format: "date",
              description: "Date",
            },
            rank: {
              type: "integer",
              description: "Rank",
            },
          },
        },
        Subscription: {
          type: "object",
          properties: {
            id: {
              type: "string",
              description: "Subscription ID",
            },
            userId: {
              type: "string",
              description: "User ID",
            },
            type: {
              type: "string",
              enum: ["MONTHLY", "YEARLY"],
              description: "Subscription type",
            },
            status: {
              type: "string",
              enum: ["ACTIVE", "EXPIRED", "CANCELLED", "PENDING"],
              description: "Subscription status",
              default: "ACTIVE",
            },
            startDate: {
              type: "string",
              format: "date-time",
              description: "Subscription start date",
            },
            endDate: {
              type: "string",
              format: "date-time",
              description: "Subscription end date",
            },
            amount: {
              type: "number",
              format: "float",
              description: "Subscription amount",
            },
            currency: {
              type: "string",
              description: "Currency",
              default: "USD",
            },
          },
        },
        ApiResponse: {
          type: "object",
          properties: {
            success: {
              type: "boolean",
              description: "Whether the request was successful",
            },
            data: {
              type: "object",
              description: "Response data",
            },
            error: {
              type: "object",
              properties: {
                message: {
                  type: "string",
                  description: "Error message",
                },
              },
            },
          },
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/routes/*.js"], // Path to the API docs
}

const specs = swaggerJsdoc(options)

module.exports = {
  swaggerUi,
  specs,
}
