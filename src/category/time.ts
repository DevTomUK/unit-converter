import { Unit } from '../types'

export const time: Record<string, Unit> = {
  s: {
    name: 'seconds',
    toBase: (value) => {
      return value
    },
    fromBase: (value) => {
      return value
    },
  },
  ms: {
    name: 'milliseconds',
    toBase: (value) => {
      return value / 1000
    },
    fromBase: (value) => {
      return value * 1000
    },
  },
  min: {
    name: 'minutes',
    toBase: (value) => {
      return value * 60
    },
    fromBase: (value) => {
      return value / 60
    },
  },
  h: {
    name: 'hours',
    toBase: (value) => {
      return value * 3600
    },
    fromBase: (value) => {
      return value / 3600
    },
  },
  d: {
    name: 'days',
    toBase: (value) => {
      return value * 86400
    },
    fromBase: (value) => {
      return value / 86400
    },
  },
  week: {
    name: 'weeks',
    toBase: (value) => {
      return value * 604800
    },
    fromBase: (value) => {
      return value / 604800
    },
  },
  year: {
    name: 'years',
    toBase: (value) => {
      return value * 31536000
    },
    fromBase: (value) => {
      return value / 31536000
    },
  },
}
