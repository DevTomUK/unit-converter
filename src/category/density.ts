import { Unit } from '../types'

export const density: Record<string, Unit> = {
  kilogramspermetercubed: {
    names: ['kilogram per cubic meter', 'kilograms per cubic meter'],
    symbols: ['kg/m³', 'kg/m3'],
    toBase: (value) => {
      return value
    },
    fromBase: (value) => {
      return value
    },
  },
  gramspercentimetercubed: {
    names: ['gram per cubic centimeter', 'grams per cubic centimeter'],
    symbols: ['g/cm³', 'g/cm3'],
    toBase: (value) => {
      return value * 1000
    },
    fromBase: (value) => {
      return value / 1000
    },
  },
  poundsperfoot: {
    names: ['pound per cubic foot', 'pounds per cubic foot'],
    symbols: ['lb/ft³', 'lb/ft3'],
    toBase: (value) => {
      return value * 16.0185
    },
    fromBase: (value) => {
      return value / 16.0185
    },
  },
  poundspergallon: {
    names: ['pound per gallon', 'pounds per gallon'],
    symbols: ['lb/gal'],
    toBase: (value) => {
      return value * 119.827
    },
    fromBase: (value) => {
      return value / 119.827
    },
  },
}
