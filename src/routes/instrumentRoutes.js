const express = require("express")
const router = express.Router()
const prisma = require("../config/database")

/**
 * @swagger
 * /instruments:
 *   get:
 *     summary: Get all instruments
 *     tags: [Instruments]
 *     responses:
 *       200:
 *         description: List of all active instruments
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
 *                         instruments:
 *                           type: array
 *                           items:
 *                             $ref: '#/components/schemas/Instrument'
 */
router.get("/", async (req, res) => {
  try {
    const instruments = await prisma.instrument.findMany({
      where: {
        isActive: true,
      },
    })

    res.json({
      success: true,
      data: { instruments },
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: { message: "Server error fetching instruments" },
    })
  }
})

/**
 * @swagger
 * /instruments/{id}:
 *   get:
 *     summary: Get instrument by ID
 *     tags: [Instruments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Instrument ID
 *     responses:
 *       200:
 *         description: Instrument details with chords
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
 *                         instrument:
 *                           allOf:
 *                             - $ref: '#/components/schemas/Instrument'
 *                             - type: object
 *                               properties:
 *                                 chords:
 *                                   type: array
 *                                   items:
 *                                     $ref: '#/components/schemas/Chord'
 *       404:
 *         description: Instrument not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 */
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params

    const instrument = await prisma.instrument.findUnique({
      where: { id },
      include: {
        chords: {
          where: { isActive: true },
          include: {
            level: true,
          },
          orderBy: [{ levelId: "asc" }, { name: "asc" }],
        },
      },
    })

    if (!instrument) {
      return res.status(404).json({
        success: false,
        error: { message: "Instrument not found" },
      })
    }

    res.json({
      success: true,
      data: { instrument },
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: { message: "Server error fetching instrument" },
    })
  }
})

module.exports = router
