import { Unit } from './types'

// COPY THIS FILE OR CREATE A NEW FILE IN THIS STRUCTURE TO CREATE A NEW CATEGORY
// Example: rename to "volume.ts" and fill in the conversions below

export const example: Record<string, Unit> = {

  // THIS IS YOUR BASE UNIT - EVERY OTHER UNIT WILL NEED A CONVERSION TECHNIQUE TO GET TO AND FROM THIS
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

  // THIS IS A RELATEABLE UNIT TO THE BASE UNIT. IT GIVES A FORMULA TO WORK OUT THE CONVERSION BETWEEN THE TWO
  

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
      return value * 10 / 2 // Or whatever that would be
    },
    fromBase: (value) => {
      return value / 2 * 10 // Or whatever that would be
    },
  },
}

// CHECK OUT CONTRIBUTING.md


// NOW CREATE SOME TESTS FOR YOUR CONVERSION IN src/tests/*

// const convert = require('../dist/index.js').default

// COPY THIS FILE TO CREATE TESTS FOR YOUR NEW UNIT CATEGORY
// Example: rename to "volume.test.js" and update the tests below

// describe('Example Unit Category', () => {
//   test('base_unit to base_unit should equal the same value', () => {
//     const result = convert.base_unit(5).to.base_unit()
//     expect(result).toBe(5)
//   })

//   test('other_unit to base_unit should convert correctly', () => {
//     const result = convert.other_unit(10).to.base_unit()
//     expect(result).toBe(100) // 10 * 10
//   })

//   test('base_unit to other_unit should convert correctly', () => {
//     const result = convert.base_unit(100).to.other_unit()
//     expect(result).toBe(10) // 100 / 10
//   })
// })