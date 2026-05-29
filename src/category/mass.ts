import { Unit } from '../types'

export const mass: Record<string, Unit> = {
  kg: {
    name: 'kilograms',
    toBase: (value) => value,
    fromBase: (value) => value,
  },
  g: {
    name: 'grams',
    toBase: (value) => value / 1000,
    fromBase: (value) => value * 1000,
  },
  mg: {
    name: 'milligrams',
    toBase: (value) => value / 1000000,
    fromBase: (value) => value * 1000000,
  },
  lb: {
    name: 'pounds',
    toBase: (value) => value * 0.453592,
    fromBase: (value) => value / 0.453592,
  },
  oz: {
    name: 'ounces',
    toBase: (value) => value * 0.0283495,
    fromBase: (value) => value / 0.0283495,
  },
}