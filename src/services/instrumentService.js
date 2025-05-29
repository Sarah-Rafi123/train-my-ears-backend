const prisma = require("../config/database")

/**
 * Instrument service - handles instrument-related business logic
 */
class InstrumentService {
  /**
   * Get all instruments
   * @param {boolean} activeOnly - Whether to return only active instruments
   * @returns {Array} List of instruments
   */
  async getAllInstruments(activeOnly = true) {
    const where = activeOnly ? { isActive: true } : {}

    const instruments = await prisma.instrument.findMany({
      where,
      orderBy: { name: "asc" },
    })

    return instruments
  }

  /**
   * Get instrument by ID
   * @param {string} id - Instrument ID
   * @param {boolean} includeChords - Whether to include chords
   * @returns {Object} Instrument details
   */
  async getInstrumentById(id, includeChords = false) {
    const instrument = await prisma.instrument.findUnique({
      where: { id },
      include: includeChords
        ? {
            chords: {
              where: { isActive: true },
              include: {
                level: true,
              },
              orderBy: [{ levelId: "asc" }, { name: "asc" }],
            },
          }
        : undefined,
    })

    if (!instrument) {
      throw new Error("Instrument not found")
    }

    return instrument
  }

  /**
   * Create a new instrument
   * @param {Object} data - Instrument data (name, displayName)
   * @returns {Object} Created instrument
   */
  async createInstrument(data) {
    const { name, displayName } = data

    // Check if instrument already exists
    const existingInstrument = await prisma.instrument.findUnique({
      where: { name },
    })

    if (existingInstrument) {
      throw new Error("Instrument with this name already exists")
    }

    const instrument = await prisma.instrument.create({
      data: {
        name,
        displayName,
        isActive: true,
      },
    })

    return instrument
  }

  /**
   * Update an instrument
   * @param {string} id - Instrument ID
   * @param {Object} data - Instrument data to update
   * @returns {Object} Updated instrument
   */
  async updateInstrument(id, data) {
    const { name, displayName, isActive } = data

    // Check if instrument exists
    const instrument = await prisma.instrument.findUnique({
      where: { id },
    })

    if (!instrument) {
      throw new Error("Instrument not found")
    }

    // Check if name is being changed and if it's already in use
    if (name && name !== instrument.name) {
      const existingInstrument = await prisma.instrument.findUnique({
        where: { name },
      })

      if (existingInstrument) {
        throw new Error("Instrument with this name already exists")
      }
    }

    const updatedInstrument = await prisma.instrument.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(displayName && { displayName }),
        ...(typeof isActive === "boolean" && { isActive }),
      },
    })

    return updatedInstrument
  }

  /**
   * Delete an instrument
   * @param {string} id - Instrument ID
   * @returns {boolean} Success status
   */
  async deleteInstrument(id) {
    // Check if instrument exists
    const instrument = await prisma.instrument.findUnique({
      where: { id },
    })

    if (!instrument) {
      throw new Error("Instrument not found")
    }

    // Check if instrument has chords
    const chordCount = await prisma.chord.count({
      where: { instrumentId: id },
    })

    if (chordCount > 0) {
      throw new Error("Cannot delete instrument with associated chords")
    }

    await prisma.instrument.delete({
      where: { id },
    })

    return true
  }
}

module.exports = new InstrumentService()
