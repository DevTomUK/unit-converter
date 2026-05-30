import { Unit } from '../types'

export const area: Record<string, Unit> = {
  m2: {
    name: 'square meters',
    toBase: (value) => {
      return value
    },
    fromBase: (value) => {
      return value
    },
  },
  km2: {
    name: 'square kilometers',
    toBase: (value) => {
      return value * 1000000
    },
    fromBase: (value) => {
      return value / 1000000
    },
  },
  hectare: {
    name: 'hectares',
    toBase: (value) => {
      return value * 10000
    },
    fromBase: (value) => {
      return value / 10000
    },
  },
  acre: {
    name: 'acres',
    toBase: (value) => {
      return value * 4046.86
    },
    fromBase: (value) => {
      return value / 4046.86
    },
  },
  sqft: {
    name: 'square feet',
    toBase: (value) => {
      return value * 0.092903
    },
    fromBase: (value) => {
      return value / 0.092903
    },
  },
  sqmi: {
    name: 'square miles',
    toBase: (value) => {
      return value * 2589988
    },
    fromBase: (value) => {
      return value / 2589988
    },
  },
}
