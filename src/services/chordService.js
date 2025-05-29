const prisma = require("../config/database")
const path = require("path")
const fs = require("fs-extra")

/**
 * Chord service - handles chord-related business logic
 */
class ChordService {
  /**
   * Get all chords with optional filtering
   * @param {Object} filters - Filter options (instrumentId, levelId, instrumentName, levelNumber)
   * @returns {Array} List of chords
   */
  async getAllChords(filters = {}) {
    const { instrumentId, levelId, instrumentName, levelNumber } = filters
    const where = {}

    if (instrumentId) where.instrumentId = instrumentId
    if (levelId) where.levelId = Number.parseInt(levelId)

    // If instrumentName is provided, find instrument by name
    if (instrumentName && !instrumentId) {
      const instrument = await prisma.instrument.findUnique({
        where: { name: instrumentName },
      })
      if (instrument) where.instrumentId = instrument.id
    }

    // If levelNumber is provided, find level by number
    if (levelNumber && !levelId) {
      const level = await prisma.level.findUnique({
        where: { number: Number.parseInt(levelNumber) },
      })
      if (level) where.levelId = level.id
    }

    const chords = await prisma.chord.findMany({
      where,
      include: {
        instrument: true,
        level: true,
      },
      orderBy: [{ levelId: "asc" }, { name: "asc" }],
    })

    return chords
  }

  /**
   * Create a new chord
   * @param {Object} chordData - Chord data (name, displayName, instrumentId, levelId)
   * @param {Object} file - Uploaded audio file
   * @returns {Object} Created chord
   */
  async createChord(chordData, file) {
    const { name, displayName, instrumentId, levelId } = chordData

    // Validate that instrument exists
    const instrument = await prisma.instrument.findUnique({
      where: { id: instrumentId },
    })

    if (!instrument) {
      throw new Error("Invalid instrument ID")
    }

    // Validate that level exists
    const level = await prisma.level.findUnique({
      where: { id: Number.parseInt(levelId) },
    })

    if (!level) {
      throw new Error("Invalid level ID")
    }

    // Check if chord already exists for this instrument and level
    const existingChord = await prisma.chord.findUnique({
      where: {
        name_instrumentId_levelId: {
          name,
          instrumentId,
          levelId: Number.parseInt(levelId),
        },
      },
    })

    if (existingChord) {
      throw new Error("Chord already exists for this instrument and level")
    }

    // Handle file upload if present
    let audioFileUrl = null
    if (file) {
      // Generate relative URL for the uploaded file
      audioFileUrl = `/uploads/audio/${file.filename}`
    }

    const chord = await prisma.chord.create({
      data: {
        name,
        displayName,
        instrumentId,
        levelId: Number.parseInt(levelId),
        audioFileUrl,
        isActive: true,
      },
      include: {
        instrument: true,
        level: true,
      },
    })

    return chord
  }

  /**
   * Update an existing chord
   * @param {string} chordId - Chord ID
   * @param {Object} chordData - Chord data to update
   * @param {Object} file - New audio file (optional)
   * @returns {Object} Updated chord
   */
  async updateChord(chordId, chordData, file) {
    const { name, displayName, isActive } = chordData

    // Get existing chord
    const existingChord = await prisma.chord.findUnique({
      where: { id: chordId },
    })

    if (!existingChord) {
      throw new Error("Chord not found")
    }

    const updateData = {}
    if (name) updateData.name = name
    if (displayName) updateData.displayName = displayName
    if (typeof isActive === "boolean") updateData.isActive = isActive

    // Handle new audio file upload
    if (file) {
      // Delete old audio file if it exists
      if (existingChord.audioFileUrl) {
        const oldFilePath = path.join(__dirname, "../../uploads", existingChord.audioFileUrl.replace("/uploads/", ""))
        await fs.remove(oldFilePath).catch(console.error)
      }

      // Set new audio file URL
      updateData.audioFileUrl = `/uploads/audio/${file.filename}`
    }

    const chord = await prisma.chord.update({
      where: { id: chordId },
      data: updateData,
      include: {
        instrument: true,
        level: true,
      },
    })

    return chord
  }

  /**
   * Delete a chord
   * @param {string} chordId - Chord ID
   * @returns {boolean} Success status
   */
  async deleteChord(chordId) {
    const chord = await prisma.chord.findUnique({
      where: { id: chordId },
    })

    if (!chord) {
      throw new Error("Chord not found")
    }

    // Delete audio file if it exists
    if (chord.audioFileUrl) {
      const filePath = path.join(__dirname, "../../uploads", chord.audioFileUrl.replace("/uploads/", ""))
      await fs.remove(filePath).catch(console.error)
    }

    await prisma.chord.delete({
      where: { id: chordId },
    })

    return true
  }

  /**
   * Upload multiple chord files
   * @param {Object} data - Upload data (instrumentId, levelId)
   * @param {Array} files - Uploaded audio files
   * @returns {Object} Upload results
   */
  async uploadMultipleChords(data, files) {
    const { instrumentId, levelId } = data

    if (!files || files.length === 0) {
      throw new Error("No files uploaded")
    }

    // Validate that instrument exists
    const instrument = await prisma.instrument.findUnique({
      where: { id: instrumentId },
    })

    if (!instrument) {
      throw new Error("Invalid instrument ID")
    }

    // Validate that level exists
    const level = await prisma.level.findUnique({
      where: { id: Number.parseInt(levelId) },
    })

    if (!level) {
      throw new Error("Invalid level ID")
    }

    const uploadedChords = []
    const errors = []

    for (const file of files) {
      try {
        // Extract chord name from filename (assuming format: chordname.mp3)
        const chordName = path.basename(file.originalname, path.extname(file.originalname)).toUpperCase()

        // Check if chord already exists
        const existingChord = await prisma.chord.findUnique({
          where: {
            name_instrumentId_levelId: {
              name: chordName,
              instrumentId,
              levelId: Number.parseInt(levelId),
            },
          },
        })

        if (existingChord) {
          // Update existing chord with new audio file
          const updatedChord = await prisma.chord.update({
            where: { id: existingChord.id },
            data: {
              audioFileUrl: `/uploads/audio/${file.filename}`,
            },
            include: {
              instrument: true,
              level: true,
            },
          })
          uploadedChords.push(updatedChord)
        } else {
          // Create new chord
          const newChord = await prisma.chord.create({
            data: {
              name: chordName,
              displayName: `${chordName} Chord`,
              instrumentId,
              levelId: Number.parseInt(levelId),
              audioFileUrl: `/uploads/audio/${file.filename}`,
              isActive: true,
            },
            include: {
              instrument: true,
              level: true,
            },
          })
          uploadedChords.push(newChord)
        }
      } catch (error) {
        errors.push({
          filename: file.originalname,
          error: error.message,
        })
      }
    }

    return {
      uploadedChords,
      errors: errors.length > 0 ? errors : undefined,
      summary: {
        totalFiles: files.length,
        successful: uploadedChords.length,
        failed: errors.length,
      },
    }
  }
}

module.exports = new ChordService()
