import { Unit } from '../types'

export const speed: Record<string, Unit> = {
  meterspersecond: {
    names: ['meter per second', 'meters per second'],
    symbols: ['m/s', 'mps'],
    toBase: (value) => {
      return value
    },
    fromBase: (value) => {
      return value
    },
  },
  kilometersperhour: {
    names: ['kilometer per hour', 'kilometers per hour'],
    symbols: ['km/h', 'kmh'],
    toBase: (value) => {
      return value / 3.6
    },
    fromBase: (value) => {
      return value * 3.6
    },
  },
  milesperhour: {
    names: ['mile per hour', 'miles per hour'],
    symbols: ['mph'],
    toBase: (value) => {
      return value * 0.44704
    },
    fromBase: (value) => {
      return value / 0.44704
    },
  },
  knots: {
    names: ['knot', 'knots'],
    symbols: ['kt'],
    toBase: (value) => {
      return value * 0.51444
    },
    fromBase: (value) => {
      return value / 0.51444
    },
  },
  feetpersecond: {
    names: ['foot per second', 'feet per second'],
    symbols: ['ft/s', 'fps'],
    toBase: (value) => {
      return value * 0.3048
    },
    fromBase: (value) => {
      return value / 0.3048
    },
  },
}
