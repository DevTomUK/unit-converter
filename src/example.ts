import { Unit } from './types'

// COPY THIS FILE TO CREATE A NEW UNIT CATEGORY
// Example: rename to "volume.ts" and fill in the conversions below

export const example: Record<string, Unit> = {

  // THIS IS YOUR BASE UNIT - every other unit converts to/from this
  // (This is basically scale:1)

  milliliters: {
    name: 'ml',
    toBase: (value) => {
      return value
    },
    fromBase: (value) => {
      return value
    },
  },

  // OTHER UNITS - add formulas to convert to/from the base unit
  // (This is basically scale:1000)

  liter: {
    name: 'L',
    toBase: (value) => {
      return value * 1000
    },
    fromBase: (value) => {
      return value / 1000
    },
  },

  // THIS IS ANOTHER RELATEABLE UNIT. JUST ADD AS MANY RELATEABLE UNITS AS YOU CAN THINK ABOUT LIKE THIS

  fluidounce: {
    name: 'Fl/Oz',
    toBase: (value) => {
      return value * 29.5735
    },
    fromBase: (value) => {
      return value / 29.5735
    },
  },
}


// See CONTRIBUTING.md for step-by-step instructions
// Create tests in src/tests/example.test.js following the pattern in existing test files