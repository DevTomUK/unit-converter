import { Unit } from '../types'

export const speed: Record<string, Unit> = {
  mps: {
    name: 'meters per second',
    toBase: (value) => {
      return value
    },
    fromBase: (value) => {
      return value
    },
  },
  kmh: {
    name: 'kilometers per hour',
    toBase: (value) => {
      return value / 3.6
    },
    fromBase: (value) => {
      return value * 3.6
    },
  },
  mph: {
    name: 'miles per hour',
    toBase: (value) => {
      return value * 0.44704
    },
    fromBase: (value) => {
      return value / 0.44704
    },
  },
  knot: {
    name: 'knots',
    toBase: (value) => {
      return value * 0.51444
    },
    fromBase: (value) => {
      return value / 0.51444
    },
  },
  fps: {
    name: 'feet per second',
    toBase: (value) => {
      return value * 0.3048
    },
    fromBase: (value) => {
      return value / 0.3048
    },
  },
}