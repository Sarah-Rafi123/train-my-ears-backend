# Audio Upload Guide for TrainmyEars

This guide explains how to upload and manage chord MP3 files for your TrainmyEars application.

## 🎵 **Upload Methods**

### **1. Single Chord Upload**
Upload one chord at a time with detailed information.

**Endpoint**: `POST /api/chords`
**Content-Type**: `multipart/form-data`

**Required Fields**:
- `name`: Chord name (e.g., "G", "C", "D")
- `displayName`: Display name (e.g., "G Major")
- `instrumentId`: ID of the instrument
- `levelId`: ID of the level
- `audioFile`: MP3 file

**Optional Fields**:
- `instrumentName`: For file organization (e.g., "Guitar")
- `chordName`: For filename generation

### **2. Multiple Chord Upload**
Upload multiple chord files at once for efficiency.

**Endpoint**: `POST /api/chords/upload-multiple`
**Content-Type**: `multipart/form-data`

**Required Fields**:
- `instrumentId`: ID of the instrument
- `levelId`: ID of the level
- `audioFiles`: Array of MP3 files

**File Naming Convention**:
Name your files with the chord name: `G.mp3`, `C.mp3`, `D.mp3`, etc.
The system will automatically extract the chord name from the filename.

## 📁 **File Organization**

Files are automatically organized in the following structure:
\`\`\`
uploads/
└── audio/
    ├── guitar/
    │   ├── g_guitar_1640995200000.mp3
    │   ├── c_guitar_1640995201000.mp3
    │   └── d_guitar_1640995202000.mp3
    └── piano/
        ├── g_piano_1640995203000.mp3
        ├── c_piano_1640995204000.mp3
        └── d_piano_1640995205000.mp3
\`\`\`

## 🎯 **How to Use in Swagger**

### **Step 1: Get Instrument and Level IDs**
1. Go to `/api/instruments` to get instrument IDs
2. Use the instrument ID to get levels and chords

### **Step 2: Upload Single Chord**
1. Go to `POST /api/chords`
2. Fill in the form fields:
   - `name`: G
   - `displayName`: G Major
   - `instrumentId`: [copy from step 1]
   - `levelId`: 1
   - `instrumentName`: Guitar
   - `chordName`: G
3. Choose your MP3 file for `audioFile`
4. Click Execute

### **Step 3: Upload Multiple Chords**
1. Go to `POST /api/chords/upload-multiple`
2. Fill in:
   - `instrumentId`: [copy from step 1]
   - `levelId`: 1
3. Select multiple MP3 files (named G.mp3, C.mp3, D.mp3)
4. Click Execute

## 🔧 **File Requirements**

### **Supported Formats**
- MP3 (audio/mpeg)
- WAV (audio/wav)
- OGG (audio/ogg)
- M4A (audio/m4a)
- AAC (audio/aac)

### **File Size Limits**
- Maximum file size: 10MB per file
- Maximum files per upload: 10 files

### **Quality Recommendations**
- Sample Rate: 44.1kHz or 48kHz
- Bit Rate: 128kbps - 320kbps
- Duration: 2-5 seconds per chord
- Format: MP3 for best compatibility

## 🎼 **Chord Naming Convention**

### **Basic Chords**
- Major chords: `C`, `D`, `E`, `F`, `G`, `A`, `B`
- Minor chords: `Cm`, `Dm`, `Em`, `Fm`, `Gm`, `Am`, `Bm`

### **Extended Chords**
- Seventh chords: `C7`, `D7`, `G7`
- Major seventh: `Cmaj7`, `Dmaj7`
- Minor seventh: `Cm7`, `Dm7`

### **File Naming Examples**
\`\`\`
Level 1 (Basic): G.mp3, C.mp3, D.mp3
Level 2 (Intermediate): E.mp3, A.mp3, Em.mp3
Level 3 (Advanced): Am.mp3, Dm.mp3, F.mp3
\`\`\`

## 🔄 **Managing Existing Chords**

### **Update Chord Audio**
- Use `PUT /api/chords/{chordId}` to update existing chords
- Upload a new audio file to replace the old one
- Old files are automatically deleted

### **Delete Chords**
- Use `DELETE /api/chords/{chordId}` to remove chords
- Associated audio files are automatically deleted

### **View All Chords**
- Use `GET /api/chords` to see all uploaded chords
- Filter by instrument: `?instrumentName=Guitar`
- Filter by level: `?levelNumber=1`

## 🌐 **Accessing Audio Files**

Once uploaded, audio files are accessible via:
\`\`\`
http://localhost:3000/uploads/audio/guitar/g_guitar_1640995200000.mp3
\`\`\`

The URL is automatically stored in the database and returned in API responses.

## 🚨 **Error Handling**

### **Common Errors**
- **File too large**: Reduce file size to under 10MB
- **Invalid format**: Use supported audio formats only
- **Duplicate chord**: Chord already exists for this instrument/level
- **Missing fields**: Ensure all required fields are provided

### **Bulk Upload Errors**
The multiple upload endpoint returns a summary:
\`\`\`json
{
  "success": true,
  "data": {
    "uploadedChords": [...],
    "errors": [...],
    "summary": {
      "totalFiles": 5,
      "successful": 4,
      "failed": 1
    }
  }
}
\`\`\`

## 📱 **Mobile App Integration**

For your React Native app, use the chord URLs returned by the API:
\`\`\`javascript
// Get chords for guitar level 1
const response = await fetch('/api/game/chords/guitarId/1');
const { chords } = response.data;

// Play chord audio
const audio = new Audio(chord.audioFileUrl);
audio.play();
\`\`\`

## 🔐 **Security Notes**

- File uploads are validated for type and size
- Files are stored outside the web root for security
- Only authenticated users can upload/modify chords (when auth is enabled)
- Automatic cleanup of orphaned files when chords are deleted
