const { validationResult } = require("express-validator")
const chordService = require("../services/chordService")

// Get all chords
const getAllChords = async (req, res) => {
  try {
    const chords = await chordService.getAllChords(req.query)

    res.json({
      success: true,
      data: { chords },
    })
  } catch (error) {
    console.error("Get chords error:", error)
    res.status(500).json({
      success: false,
      error: { message: error.message || "Server error fetching chords" },
    })
  }
}

// Create a new chord
const createChord = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: { message: "Validation error", details: errors.array() },
      })
    }

    const chord = await chordService.createChord(req.body, req.file)

    res.status(201).json({
      success: true,
      data: { chord },
    })
  } catch (error) {
    console.error("Create chord error:", error)

    // Handle specific errors with appropriate status codes
    if (
      error.message === "Invalid instrument ID" ||
      error.message === "Invalid level ID" ||
      error.message === "Chord already exists for this instrument and level"
    ) {
      return res.status(400).json({
        success: false,
        error: { message: error.message },
      })
    }

    res.status(500).json({
      success: false,
      error: { message: error.message || "Server error creating chord" },
    })
  }
}

// Update chord
const updateChord = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: { message: "Validation error", details: errors.array() },
      })
    }

    const { chordId } = req.params
    const chord = await chordService.updateChord(chordId, req.body, req.file)

    res.json({
      success: true,
      data: { chord },
    })
  } catch (error) {
    console.error("Update chord error:", error)

    // Handle specific errors with appropriate status codes
    if (error.message === "Chord not found") {
      return res.status(404).json({
        success: false,
        error: { message: error.message },
      })
    }

    res.status(500).json({
      success: false,
      error: { message: error.message || "Server error updating chord" },
    })
  }
}

// Delete chord
const deleteChord = async (req, res) => {
  try {
    const { chordId } = req.params
    await chordService.deleteChord(chordId)

    res.json({
      success: true,
      data: { message: "Chord deleted successfully" },
    })
  } catch (error) {
    console.error("Delete chord error:", error)

    // Handle specific errors with appropriate status codes
    if (error.message === "Chord not found") {
      return res.status(404).json({
        success: false,
        error: { message: error.message },
      })
    }

    res.status(500).json({
      success: false,
      error: { message: error.message || "Server error deleting chord" },
    })
  }
}

// Upload multiple chord files
const uploadMultipleChords = async (req, res) => {
  try {
    const result = await chordService.uploadMultipleChords(req.body, req.files)

    res.status(201).json({
      success: true,
      data: result,
    })
  } catch (error) {
    console.error("Upload multiple chords error:", error)

    // Handle specific errors with appropriate status codes
    if (
      error.message === "No files uploaded" ||
      error.message === "Invalid instrument ID" ||
      error.message === "Invalid level ID"
    ) {
      return res.status(400).json({
        success: false,
        error: { message: error.message },
      })
    }

    res.status(500).json({
      success: false,
      error: { message: error.message || "Server error uploading chord files" },
    })
  }
}

module.exports = {
  getAllChords,
  createChord,
  updateChord,
  deleteChord,
  uploadMultipleChords,
}
