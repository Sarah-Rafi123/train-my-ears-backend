const express = require("express")
const { body } = require("express-validator")
const {
  getAllChords,
  createChord,
  updateChord,
  deleteChord,
  uploadMultipleChords,
} = require("../controllers/chordController")
const { uploadSingle, uploadMultiple, handleUploadError } = require("../middleware/upload")

const router = express.Router()

/**
 * @swagger
 * tags:
 *   name: Chords
 *   description: Chord management endpoints
 */

/**
 * @swagger
 * /chords:
 *   get:
 *     summary: Get all chords
 *     tags: [Chords]
 *     parameters:
 *       - in: query
 *         name: instrumentId
 *         schema:
 *           type: string
 *         description: Filter by instrument ID
 *       - in: query
 *         name: levelId
 *         schema:
 *           type: integer
 *         description: Filter by level ID
 *       - in: query
 *         name: instrumentName
 *         schema:
 *           type: string
 *         description: Filter by instrument name (Guitar, Piano)
 *       - in: query
 *         name: levelNumber
 *         schema:
 *           type: integer
 *         description: Filter by level number (1, 2, 3)
 *     responses:
 *       200:
 *         description: List of chords
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
router.get("/", getAllChords)

/**
 * @swagger
 * /chords:
 *   post:
 *     summary: Create a new chord with audio file
 *     tags: [Chords]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - displayName
 *               - instrumentId
 *               - levelId
 *             properties:
 *               name:
 *                 type: string
 *                 description: Chord name (e.g., G, C, D)
 *                 example: "G"
 *               displayName:
 *                 type: string
 *                 description: Chord display name
 *                 example: "G Major"
 *               instrumentId:
 *                 type: string
 *                 description: Instrument ID
 *               levelId:
 *                 type: integer
 *                 description: Level ID
 *               instrumentName:
 *                 type: string
 *                 description: Instrument name for file organization
 *                 example: "Guitar"
 *               chordName:
 *                 type: string
 *                 description: Chord name for filename
 *                 example: "G"
 *               audioFile:
 *                 type: string
 *                 format: binary
 *                 description: Audio file (MP3, WAV, OGG, M4A, AAC)
 *     responses:
 *       201:
 *         description: Chord created successfully
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
 *                         chord:
 *                           $ref: '#/components/schemas/Chord'
 *       400:
 *         description: Validation error or chord already exists
 */
router.post(
  "/",
  uploadSingle,
  [
    body("name").notEmpty().withMessage("Chord name is required"),
    body("displayName").notEmpty().withMessage("Display name is required"),
    body("instrumentId").notEmpty().withMessage("Instrument ID is required"),
    body("levelId").isInt({ min: 1 }).withMessage("Valid level ID is required"),
  ],
  createChord,
  handleUploadError,
)

/**
 * @swagger
 * /chords/upload-multiple:
 *   post:
 *     summary: Upload multiple chord audio files
 *     tags: [Chords]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - instrumentId
 *               - levelId
 *               - audioFiles
 *             properties:
 *               instrumentId:
 *                 type: string
 *                 description: Instrument ID
 *               levelId:
 *                 type: integer
 *                 description: Level ID
 *               audioFiles:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *                 description: Audio files (filename should be chord name, e.g., G.mp3, C.mp3)
 *     responses:
 *       201:
 *         description: Files uploaded successfully
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
 *                         uploadedChords:
 *                           type: array
 *                           items:
 *                             $ref: '#/components/schemas/Chord'
 *                         errors:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               filename:
 *                                 type: string
 *                               error:
 *                                 type: string
 *                         summary:
 *                           type: object
 *                           properties:
 *                             totalFiles:
 *                               type: integer
 *                             successful:
 *                               type: integer
 *                             failed:
 *                               type: integer
 */
router.post(
  "/upload-multiple",
  uploadMultiple,
  [
    body("instrumentId").notEmpty().withMessage("Instrument ID is required"),
    body("levelId").isInt({ min: 1 }).withMessage("Valid level ID is required"),
  ],
  uploadMultipleChords,
  handleUploadError,
)

/**
 * @swagger
 * /chords/{chordId}:
 *   put:
 *     summary: Update chord
 *     tags: [Chords]
 *     parameters:
 *       - in: path
 *         name: chordId
 *         required: true
 *         schema:
 *           type: string
 *         description: Chord ID
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Chord name
 *               displayName:
 *                 type: string
 *                 description: Chord display name
 *               isActive:
 *                 type: boolean
 *                 description: Whether chord is active
 *               audioFile:
 *                 type: string
 *                 format: binary
 *                 description: New audio file (optional)
 *     responses:
 *       200:
 *         description: Chord updated successfully
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
 *                         chord:
 *                           $ref: '#/components/schemas/Chord'
 *       404:
 *         description: Chord not found
 */
router.put("/:chordId", uploadSingle, updateChord, handleUploadError)

/**
 * @swagger
 * /chords/{chordId}:
 *   delete:
 *     summary: Delete chord
 *     tags: [Chords]
 *     parameters:
 *       - in: path
 *         name: chordId
 *         required: true
 *         schema:
 *           type: string
 *         description: Chord ID
 *     responses:
 *       200:
 *         description: Chord deleted successfully
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
 *                         message:
 *                           type: string
 *                           example: "Chord deleted successfully"
 *       404:
 *         description: Chord not found
 */
router.delete("/:chordId", deleteChord)

module.exports = router
