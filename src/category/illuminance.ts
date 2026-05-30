import { Unit } from '../types'

export const illuminance: Record<string, Unit> = {
  lux: {
    names: ['lux'],
    symbols: ['lx'],
    toBase: (value) => {
      return value
    },
    fromBase: (value) => {
      return value
    },
  },
  footcandles: {
    names: ['foot-candle', 'foot candle'],
    symbols: ['fc'],
    toBase: (value) => {
      return value * 10.764
    },
    fromBase: (value) => {
      return value / 10.764
    },
  },
  lumenspermetersquared: {
    names: ['lumen per square meter', 'lumens per square meter'],
    symbols: ['lm/m²', 'lm/m2'],
    toBase: (value) => {
      return value
    },
    fromBase: (value) => {
      return value
    },
  },
}
