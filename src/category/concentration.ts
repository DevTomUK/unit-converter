import { Unit } from '../types'

export const concentration: Record<string, Unit> = {
  m: {
    name: 'molarity',
    toBase: (value) => {
      return value
    },
    fromBase: (value) => {
      return value
    },
  },
  ppm: {
    name: 'parts per million',
    toBase: (value) => {
      return value / 1000000
    },
    fromBase: (value) => {
      return value * 1000000
    },
  },
  ppb: {
    name: 'parts per billion',
    toBase: (value) => {
      return value / 1000000000
    },
    fromBase: (value) => {
      return value * 1000000000
    },
  },
  percent: {
    name: 'percentage',
    toBase: (value) => {
      return value / 100
    },
    fromBase: (value) => {
      return value * 100
    },
  },
  ppt: {
    name: 'parts per thousand',
    toBase: (value) => {
      return value / 1000
    },
    fromBase: (value) => {
      return value * 1000
    },
  },
}
