const { PrismaClient } = require("../src/generated/client")

const prisma = new PrismaClient()

async function migrateGameModes() {
  console.log("🔄 Starting game mode migration...")

  try {
    // First, let's see what data we have
    const existingSessions = await prisma.$queryRaw`
      SELECT "gameMode", COUNT(*) as count 
      FROM "game_sessions" 
      GROUP BY "gameMode"
    `

    console.log("📊 Current game mode distribution:")
    console.table(existingSessions)

    // Update SINGLE_CHORD to SIMPLE_MODE
    const singleChordUpdate = await prisma.$executeRaw`
      UPDATE "game_sessions" 
      SET "gameMode" = 'SIMPLE_MODE' 
      WHERE "gameMode" = 'SINGLE_CHORD'
    `
    console.log(`✅ Updated ${singleChordUpdate} records from SINGLE_CHORD to SIMPLE_MODE`)

    // Update ADVANCED_SEQUENCE to ADVANCE_MODE
    const advancedSequenceUpdate = await prisma.$executeRaw`
      UPDATE "game_sessions" 
      SET "gameMode" = 'ADVANCE_MODE' 
      WHERE "gameMode" = 'ADVANCED_SEQUENCE'
    `
    console.log(`✅ Updated ${advancedSequenceUpdate} records from ADVANCED_SEQUENCE to ADVANCE_MODE`)

    // Verify the changes
    const updatedSessions = await prisma.$queryRaw`
      SELECT "gameMode", COUNT(*) as count 
      FROM "game_sessions" 
      GROUP BY "gameMode"
    `

    console.log("📊 Updated game mode distribution:")
    console.table(updatedSessions)

    console.log("✅ Game mode migration completed successfully!")
  } catch (error) {
    console.error("❌ Error during migration:", error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

// Run the migration
migrateGameModes().catch((error) => {
  console.error("Migration failed:", error)
  process.exit(1)
})
