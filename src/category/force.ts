import { Unit } from '../types'

export const force: Record<string, Unit> = {
  newtons: {
    names: ['newton', 'newtons'],
    symbols: ['N'],
    toBase: (value) => {
      return value
    },
    fromBase: (value) => {
      return value
    },
  },
  kilonewtons: {
    names: ['kilonewton', 'kilonewtons'],
    symbols: ['kN'],
    toBase: (value) => {
      return value * 1000
    },
    fromBase: (value) => {
      return value / 1000
    },
  },
  dynes: {
    names: ['dyne', 'dynes'],
    symbols: ['dyn'],
    toBase: (value) => {
      return value / 100000
    },
    fromBase: (value) => {
      return value * 100000
    },
  },
  poundsforce: {
    names: ['pound-force', 'pounds-force'],
    symbols: ['lbf'],
    toBase: (value) => {
      return value * 4.44822
    },
    fromBase: (value) => {
      return value / 4.44822
    },
  },
  kilogramforce: {
    names: ['kilogram-force', 'kilogram force'],
    symbols: ['kgf'],
    toBase: (value) => {
      return value * 9.80665
    },
    fromBase: (value) => {
      return value / 9.80665
    },
  },
}
