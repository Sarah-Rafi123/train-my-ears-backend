const multer = require("multer")
const path = require("path")
const fs = require("fs-extra")

// Ensure upload directories exist
const uploadDir = path.join(__dirname, "../../uploads")
const audioDir = path.join(uploadDir, "audio")
const guitarDir = path.join(audioDir, "guitar")
const pianoDir = path.join(audioDir, "piano")

// Create directories if they don't exist
fs.ensureDirSync(guitarDir)
fs.ensureDirSync(pianoDir)

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const { instrumentName } = req.body
    let uploadPath = audioDir

    if (instrumentName) {
      uploadPath = path.join(audioDir, instrumentName.toLowerCase())
      fs.ensureDirSync(uploadPath)
    }

    cb(null, uploadPath)
  },
  filename: (req, file, cb) => {
    // Generate filename: chordname_instrument_timestamp.mp3
    const { chordName, instrumentName } = req.body
    const timestamp = Date.now()
    const extension = path.extname(file.originalname)

    let filename = `${timestamp}${extension}`

    if (chordName && instrumentName) {
      filename = `${chordName.toLowerCase()}_${instrumentName.toLowerCase()}_${timestamp}${extension}`
    }

    cb(null, filename)
  },
})

// File filter to only allow audio files
const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = ["audio/mpeg", "audio/mp3", "audio/wav", "audio/ogg", "audio/m4a", "audio/aac"]

  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true)
  } else {
    cb(new Error("Only audio files are allowed (MP3, WAV, OGG, M4A, AAC)"), false)
  }
}

// Configure multer
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
})

// Middleware for single file upload
const uploadSingle = upload.single("audioFile")

// Middleware for multiple files upload
const uploadMultiple = upload.array("audioFiles", 10) // Max 10 files

// Error handling middleware for multer
const handleUploadError = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        success: false,
        error: { message: "File too large. Maximum size is 10MB." },
      })
    }
    if (err.code === "LIMIT_FILE_COUNT") {
      return res.status(400).json({
        success: false,
        error: { message: "Too many files. Maximum is 10 files." },
      })
    }
  }

  if (err.message.includes("Only audio files are allowed")) {
    return res.status(400).json({
      success: false,
      error: { message: err.message },
    })
  }

  next(err)
}

module.exports = {
  uploadSingle,
  uploadMultiple,
  handleUploadError,
}
