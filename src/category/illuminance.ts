import { Unit } from '../types'

export const illuminance: Record<string, Unit> = {
  lux: {
    name: 'lux',
    toBase: (value) => {
      return value
    },
    fromBase: (value) => {
      return value
    },
  },
  fc: {
    name: 'foot-candles',
    toBase: (value) => {
      return value * 10.764
    },
    fromBase: (value) => {
      return value / 10.764
    },
  },
  lmm2: {
    name: 'lumens per square meter',
    toBase: (value) => {
      return value
    },
    fromBase: (value) => {
      return value
    },
  },
}
