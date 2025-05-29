const { PrismaClient } = require("../src/generated/client")

const prisma = new PrismaClient()

async function main() {
  console.log("🌱 Starting TrainmyEars database seeding...")

  // Create instruments
  const guitar = await prisma.instrument.upsert({
    where: { name: "Guitar" },
    update: {},
    create: {
      name: "Guitar",
      displayName: "Guitar Chord",
      isActive: true,
    },
  })

  const piano = await prisma.instrument.upsert({
    where: { name: "Piano" },
    update: {},
    create: {
      name: "Piano",
      displayName: "Piano Chord",
      isActive: true,
    },
  })

  // Create levels
  const level1 = await prisma.level.upsert({
    where: { number: 1 },
    update: {},
    create: {
      number: 1,
      name: "Level 1",
      description: "Basic chords - Free",
      isFree: true,
      isActive: true,
    },
  })

  const level2 = await prisma.level.upsert({
    where: { number: 2 },
    update: {},
    create: {
      number: 2,
      name: "Level 2",
      description: "Intermediate chords - Free",
      isFree: true,
      isActive: true,
    },
  })

  const level3 = await prisma.level.upsert({
    where: { number: 3 },
    update: {},
    create: {
      number: 3,
      name: "Level 3",
      description: "Advanced chords - Subscription Required",
      isFree: false,
      isActive: true,
    },
  })

  // Create chords for Level 1 (G, C, D)
  const level1Chords = [
    { name: "G", displayName: "G Major" },
    { name: "C", displayName: "C Major" },
    { name: "D", displayName: "D Major" },
  ]

  for (const chordData of level1Chords) {
    // Guitar chords
    await prisma.chord.upsert({
      where: {
        name_instrumentId_levelId: {
          name: chordData.name,
          instrumentId: guitar.id,
          levelId: level1.id,
        },
      },
      update: {},
      create: {
        name: chordData.name,
        displayName: chordData.displayName,
        instrumentId: guitar.id,
        levelId: level1.id,
        audioFileUrl: `/audio/guitar/${chordData.name.toLowerCase()}.mp3`,
      },
    })

    // Piano chords
    await prisma.chord.upsert({
      where: {
        name_instrumentId_levelId: {
          name: chordData.name,
          instrumentId: piano.id,
          levelId: level1.id,
        },
      },
      update: {},
      create: {
        name: chordData.name,
        displayName: chordData.displayName,
        instrumentId: piano.id,
        levelId: level1.id,
        audioFileUrl: `/audio/piano/${chordData.name.toLowerCase()}.mp3`,
      },
    })
  }

  // Create chords for Level 2 (E, A, Em)
  const level2Chords = [
    { name: "E", displayName: "E Major" },
    { name: "A", displayName: "A Major" },
    { name: "Em", displayName: "E Minor" },
  ]

  for (const chordData of level2Chords) {
    // Guitar chords
    await prisma.chord.upsert({
      where: {
        name_instrumentId_levelId: {
          name: chordData.name,
          instrumentId: guitar.id,
          levelId: level2.id,
        },
      },
      update: {},
      create: {
        name: chordData.name,
        displayName: chordData.displayName,
        instrumentId: guitar.id,
        levelId: level2.id,
        audioFileUrl: `/audio/guitar/${chordData.name.toLowerCase()}.mp3`,
      },
    })

    // Piano chords
    await prisma.chord.upsert({
      where: {
        name_instrumentId_levelId: {
          name: chordData.name,
          instrumentId: piano.id,
          levelId: level2.id,
        },
      },
      update: {},
      create: {
        name: chordData.name,
        displayName: chordData.displayName,
        instrumentId: piano.id,
        levelId: level2.id,
        audioFileUrl: `/audio/piano/${chordData.name.toLowerCase()}.mp3`,
      },
    })
  }

  // Create chords for Level 3 (Am, Dm, F) - Subscription required
  const level3Chords = [
    { name: "Am", displayName: "A Minor" },
    { name: "Dm", displayName: "D Minor" },
    { name: "F", displayName: "F Major" },
  ]

  for (const chordData of level3Chords) {
    // Guitar chords
    await prisma.chord.upsert({
      where: {
        name_instrumentId_levelId: {
          name: chordData.name,
          instrumentId: guitar.id,
          levelId: level3.id,
        },
      },
      update: {},
      create: {
        name: chordData.name,
        displayName: chordData.displayName,
        instrumentId: guitar.id,
        levelId: level3.id,
        audioFileUrl: `/audio/guitar/${chordData.name.toLowerCase()}.mp3`,
      },
    })

    // Piano chords
    await prisma.chord.upsert({
      where: {
        name_instrumentId_levelId: {
          name: chordData.name,
          instrumentId: piano.id,
          levelId: level3.id,
        },
      },
      update: {},
      create: {
        name: chordData.name,
        displayName: chordData.displayName,
        instrumentId: piano.id,
        levelId: level3.id,
        audioFileUrl: `/audio/piano/${chordData.name.toLowerCase()}.mp3`,
      },
    })
  }

  // Create app settings
  await prisma.appSettings.upsert({
    where: { key: "monthly_subscription_price" },
    update: {},
    create: {
      key: "monthly_subscription_price",
      value: "2.95",
      description: "Monthly subscription price in USD",
    },
  })

  await prisma.appSettings.upsert({
    where: { key: "yearly_subscription_price" },
    update: {},
    create: {
      key: "yearly_subscription_price",
      value: "29.95",
      description: "Yearly subscription price in USD",
    },
  })

  await prisma.appSettings.upsert({
    where: { key: "leaderboard_reset_time" },
    update: {},
    create: {
      key: "leaderboard_reset_time",
      value: "00:00",
      description: "Daily leaderboard reset time (UTC)",
    },
  })

  // Create a demo user
  const demoUser = await prisma.user.upsert({
    where: { email: "demo@trainmyears.com" },
    update: {},
    create: {
      name: "Demo User",
      email: "demo@trainmyears.com",
      currentLevel: 1,
      currentStreak: 5,
      overallAccuracy: 85.5,
      totalGamesPlayed: 25,
      lastPlayedAt: new Date(),
    },
  })

  console.log("✅ TrainmyEars database seeded successfully!")
  console.log({
    instruments: { guitar: guitar.id, piano: piano.id },
    levels: { level1: level1.id, level2: level2.id, level3: level3.id },
    demoUser: demoUser.id,
    totalChords: 18,
  })
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
