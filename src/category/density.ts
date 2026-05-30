import { Unit } from '../types'

export const density: Record<string, Unit> = {
  kgm3: {
    name: 'kilograms per cubic meter',
    toBase: (value) => {
      return value
    },
    fromBase: (value) => {
      return value
    },
  },
  gcm3: {
    name: 'grams per cubic centimeter',
    toBase: (value) => {
      return value * 1000
    },
    fromBase: (value) => {
      return value / 1000
    },
  },
  lbft3: {
    name: 'pounds per cubic foot',
    toBase: (value) => {
      return value * 16.0185
    },
    fromBase: (value) => {
      return value / 16.0185
    },
  },
  lbgal: {
    name: 'pounds per gallon',
    toBase: (value) => {
      return value * 119.827
    },
    fromBase: (value) => {
      return value / 119.827
    },
  },
}
