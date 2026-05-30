import { Unit } from '../types'

export const mass: Record<string, Unit> = {
  kilograms: {
    names: ['kilogram', 'kilograms'],
    symbols: ['kg'],
    toBase: (value) => {
      return value
    },
    fromBase: (value) => {
      return value
    },
  },
  grams: {
    names: ['gram', 'grams'],
    symbols: ['g'],
    toBase: (value) => {
      return value / 1000
    },
    fromBase: (value) => {
      return value * 1000
    },
  },
  milligrams: {
    names: ['milligram', 'milligrams'],
    symbols: ['mg'],
    toBase: (value) => {
      return value / 1000000
    },
    fromBase: (value) => {
      return value * 1000000
    },
  },
  pounds: {
    names: ['pound', 'pounds'],
    symbols: ['lb', 'lbs'],
    toBase: (value) => {
      return value * 0.453592
    },
    fromBase: (value) => {
      return value / 0.453592
    },
  },
  ounces: {
    names: ['ounce', 'ounces'],
    symbols: ['oz'],
    toBase: (value) => {
      return value * 0.0283495
    },
    fromBase: (value) => {
      return value / 0.0283495
    },
  },
}
