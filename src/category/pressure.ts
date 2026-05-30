import { Unit } from '../types'

export const pressure: Record<string, Unit> = {
  pa: {
    name: 'pascals',
    toBase: (value) => {
      return value
    },
    fromBase: (value) => {
      return value
    },
  },
  bar: {
    name: 'bars',
    toBase: (value) => {
      return value * 100000
    },
    fromBase: (value) => {
      return value / 100000
    },
  },
  psi: {
    name: 'pounds per square inch',
    toBase: (value) => {
      return value * 6894.76
    },
    fromBase: (value) => {
      return value / 6894.76
    },
  },
  atm: {
    name: 'atmospheres',
    toBase: (value) => {
      return value * 101325
    },
    fromBase: (value) => {
      return value / 101325
    },
  },
  mmhg: {
    name: 'millimeters of mercury',
    toBase: (value) => {
      return value * 133.322
    },
    fromBase: (value) => {
      return value / 133.322
    },
  },
  kpa: {
    name: 'kilopascals',
    toBase: (value) => {
      return value * 1000
    },
    fromBase: (value) => {
      return value / 1000
    },
  },
}
