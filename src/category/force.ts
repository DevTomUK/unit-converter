import { Unit } from '../types'

export const force: Record<string, Unit> = {
  n: {
    name: 'newtons',
    toBase: (value) => {
      return value
    },
    fromBase: (value) => {
      return value
    },
  },
  kn: {
    name: 'kilonewtons',
    toBase: (value) => {
      return value * 1000
    },
    fromBase: (value) => {
      return value / 1000
    },
  },
  dyn: {
    name: 'dynes',
    toBase: (value) => {
      return value / 100000
    },
    fromBase: (value) => {
      return value * 100000
    },
  },
  lbf: {
    name: 'pounds-force',
    toBase: (value) => {
      return value * 4.44822
    },
    fromBase: (value) => {
      return value / 4.44822
    },
  },
  kgf: {
    name: 'kilogram-force',
    toBase: (value) => {
      return value * 9.80665
    },
    fromBase: (value) => {
      return value / 9.80665
    },
  },
}
