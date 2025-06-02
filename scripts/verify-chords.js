    const { PrismaClient } = require("../src/generated/client")
const prisma = new PrismaClient()

/**
 * Verify and display chords by instrument and level
 */
async function verifyChords() {
  try {
    console.log("🎸 Verifying chord data in database...\n")

    // Get all instruments
    const instruments = await prisma.instrument.findMany()

    for (const instrument of instruments) {
      console.log(`\n📊 ${instrument.displayName} Chords:`)
      console.log("=".repeat(50))

      // Get all chords for this instrument, grouped by level
      const chords = await prisma.chord.findMany({
        where: {
          instrumentId: instrument.id,
          isActive: true,
        },
        include: {
          level: true,
        },
        orderBy: [{ levelId: "asc" }, { name: "asc" }],
      })

      // Group chords by level
      const chordsByLevel = {}
      chords.forEach((chord) => {
        const levelNum = chord.levelId
        if (!chordsByLevel[levelNum]) {
          chordsByLevel[levelNum] = []
        }
        chordsByLevel[levelNum].push(chord)
      })

      // Display chords by level
      for (let level = 1; level <= 4; level++) {
        const levelChords = chordsByLevel[level] || []
        console.log(`\n🎵 Level ${level} (${levelChords.length} chords):`)

        if (levelChords.length === 0) {
          console.log("   No chords found for this level")
        } else {
          levelChords.forEach((chord) => {
            console.log(`   • ${chord.displayName} (${chord.name})`)
          })
        }
      }

      // Show cumulative chord counts for each level
      console.log("\n📈 Cumulative Chord Counts:")
      for (let level = 1; level <= 4; level++) {
        const cumulativeChords = chords.filter((chord) => chord.levelId <= level)
        console.log(`   Level ${level}: ${cumulativeChords.length} chords total`)
      }
    }

    console.log("\n✅ Chord verification complete!")
  } catch (error) {
    console.error("❌ Error verifying chords:", error)
  } finally {
    await prisma.$disconnect()
  }
}

// Run the verification
verifyChords()
