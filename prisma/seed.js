const { PrismaClient } = require("../src/generated/client")
const bcrypt = require("bcryptjs")

const prisma = new PrismaClient()

async function main() {
  console.log("🌱 Starting TrainmyEars database seeding...")

  // Create guest user for anonymous sessions
  const guestUser = await prisma.user.upsert({
    where: { email: "guest@trainmyears.com" },
    update: {},
    create: {
      name: "Guest User",
      email: "guest@trainmyears.com",
      password: await bcrypt.hash("guestpassword", 10),
    },
  })
  console.log("✅ Created guest user:", guestUser.id)

  // Create demo user
  const demoUser = await prisma.user.upsert({
    where: { email: "demo@trainmyears.com" },
    update: {},
    create: {
      name: "Demo User",
      email: "demo@trainmyears.com",
      password: await bcrypt.hash("demopassword", 10),
      currentLevel: 1,
      currentStreak: 5,
      overallAccuracy: 75.5,
      totalGamesPlayed: 10,
    },
  })
  console.log("✅ Created demo user:", demoUser.id)

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
  console.log("✅ Created guitar instrument:", guitar.id)

  const piano = await prisma.instrument.upsert({
    where: { name: "Piano" },
    update: {},
    create: {
      name: "Piano",
      displayName: "Piano Chord",
      isActive: true,
    },
  })
  console.log("✅ Created piano instrument:", piano.id)

  // Create levels
  const level1 = await prisma.level.upsert({
    where: { number: 1 },
    update: {},
    create: {
      number: 1,
      name: "Level 1",
      description: "The Essentials",
      isFree: true,
      isActive: true,
    },
  })
  console.log("✅ Created level 1:", level1.id)

  const level2 = await prisma.level.upsert({
    where: { number: 2 },
    update: {},
    create: {
      number: 2,
      name: "Level 2",
      description: "Common and Useful",
      isFree: true,
      isActive: true,
    },
  })
  console.log("✅ Created level 2:", level2.id)

  const level3 = await prisma.level.upsert({
    where: { number: 3 },
    update: {},
    create: {
      number: 3,
      name: "Level 3",
      description: "Barre and Transitional",
      isFree: false,
      isActive: true,
    },
  })
  console.log("✅ Created level 3:", level3.id)

  const level4 = await prisma.level.upsert({
    where: { number: 4 },
    update: {},
    create: {
      number: 4,
      name: "Level 4",
      description: "Rare and Challenging",
      isFree: false,
      isActive: true,
    },
  })
  console.log("✅ Created level 4:", level4.id)

  // Create Guitar chords according to the document
 const guitarChords = [
  // Level 1 – The Essentials (Open Chords)
  { name: "G Major", displayName: "G Major", level: level1.id, instrument: guitar.id },
  { name: "C Major", displayName: "C Major", level: level1.id, instrument: guitar.id },
  { name: "D Major", displayName: "D Major", level: level1.id, instrument: guitar.id },

  // Level 2 – Common and Useful
  { name: "E Minor", displayName: "E Minor", level: level2.id, instrument: guitar.id },
  { name: "A Minor", displayName: "A Minor", level: level2.id, instrument: guitar.id },
  { name: "A Major", displayName: "A Major", level: level2.id, instrument: guitar.id },

  // Level 3 – Barre and Transitional
  { name: "E Major", displayName: "E Major", level: level3.id, instrument: guitar.id },
  { name: "D Minor", displayName: "D Minor", level: level3.id, instrument: guitar.id },
  { name: "F Major", displayName: "F Major", level: level3.id, instrument: guitar.id },

  // Level 4 – Rare and Challenging
  { name: "B Minor", displayName: "B Minor", level: level4.id, instrument: guitar.id },
  { name: "C Minor", displayName: "C Minor", level: level4.id, instrument: guitar.id },
  { name: "G Minor", displayName: "G Minor", level: level4.id, instrument: guitar.id },
];

const pianoChords = [
  // Level 1 – White Key Basics
  { name: "C Major", displayName: "C Major", level: level1.id, instrument: piano.id },
  { name: "A Minor", displayName: "A Minor", level: level1.id, instrument: piano.id },
  { name: "F Major", displayName: "F Major", level: level1.id, instrument: piano.id },

  // Level 2 – Easy Additions
  { name: "G Major", displayName: "G Major", level: level2.id, instrument: piano.id },
  { name: "E Minor", displayName: "E Minor", level: level2.id, instrument: piano.id },
  { name: "D Minor", displayName: "D Minor", level: level2.id, instrument: piano.id },

  // Level 3 – Moderate Complexity
  { name: "D Major", displayName: "D Major", level: level3.id, instrument: piano.id },
  { name: "A Major", displayName: "A Major", level: level3.id, instrument: piano.id },
  { name: "C Minor", displayName: "C Minor", level: level3.id, instrument: piano.id },

  // Level 4 – Less Common / More Complex
  { name: "B Minor", displayName: "B Minor", level: level4.id, instrument: piano.id },
  { name: "F Minor", displayName: "F Minor", level: level4.id, instrument: piano.id },
  { name: "B Major", displayName: "B Major", level: level4.id, instrument: piano.id },
];

  // Create all chords
  console.log("🎵 Creating chords...")
  for (const chord of [...guitarChords, ...pianoChords]) {
    const instrumentName = chord.instrument === guitar.id ? "guitar" : "piano"
    const audioFileUrl = `/uploads/audio/${instrumentName}/${chord.name.toLowerCase()}_${instrumentName}.mp3`

    await prisma.chord.upsert({
      where: {
        name_instrumentId_levelId: {
          name: chord.name,
          instrumentId: chord.instrument,
          levelId: chord.level,
        },
      },
      update: {
        displayName: chord.displayName,
        audioFileUrl,
        isActive: true,
      },
      create: {
        name: chord.name,
        displayName: chord.displayName,
        instrumentId: chord.instrument,
        levelId: chord.level,
        audioFileUrl,
        isActive: true,
      },
    })
  }
  console.log("✅ Created all chords (24 total)")

  // Create app settings
  await prisma.appSettings.upsert({
    where: { key: "subscription_monthly_price" },
    update: { value: "2.95" },
    create: {
      key: "subscription_monthly_price",
      value: "2.95",
      description: "Monthly subscription price in USD",
    },
  })

  await prisma.appSettings.upsert({
    where: { key: "subscription_yearly_price" },
    update: { value: "29.95" },
    create: {
      key: "subscription_yearly_price",
      value: "29.95",
      description: "Yearly subscription price in USD",
    },
  })

  await prisma.appSettings.upsert({
    where: { key: "leaderboard_reset_time" },
    update: { value: "00:00" },
    create: {
      key: "leaderboard_reset_time",
      value: "00:00",
      description: "Time of day when leaderboard resets (UTC)",
    },
  })

  console.log("✅ Created app settings")

  console.log("🎉 TrainmyEars database seeded successfully!")
  console.log({
    instruments: { guitar: guitar.id, piano: piano.id },
    levels: { level1: level1.id, level2: level2.id, level3: level3.id, level4: level4.id },
    demoUser: demoUser.id,
    guestUser: guestUser.id,
    totalChords: 24, // 12 guitar + 12 piano
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
