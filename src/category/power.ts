import { Unit } from '../types'

export const power: Record<string, Unit> = {
  w: {
    name: 'watts',
    toBase: (value) => {
      return value
    },
    fromBase: (value) => {
      return value
    },
  },
  kw: {
    name: 'kilowatts',
    toBase: (value) => {
      return value * 1000
    },
    fromBase: (value) => {
      return value / 1000
    },
  },
  mw: {
    name: 'megawatts',
    toBase: (value) => {
      return value * 1000000
    },
    fromBase: (value) => {
      return value / 1000000
    },
  },
  hp: {
    name: 'horsepower',
    toBase: (value) => {
      return value * 746
    },
    fromBase: (value) => {
      return value / 746
    },
  },
  btuh: {
    name: 'BTU per hour',
    toBase: (value) => {
      return value * 0.293071
    },
    fromBase: (value) => {
      return value / 0.293071
    },
  },
}
