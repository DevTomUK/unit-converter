import { Unit } from '../types'

export const energy: Record<string, Unit> = {
  joules: {
    names: ['joule', 'joules'],
    symbols: ['J'],
    toBase: (value) => {
      return value
    },
    fromBase: (value) => {
      return value
    },
  },
  kilojoules: {
    names: ['kilojoule', 'kilojoules'],
    symbols: ['kJ'],
    toBase: (value) => {
      return value * 1000
    },
    fromBase: (value) => {
      return value / 1000
    },
  },
  calories: {
    names: ['calorie', 'calories'],
    symbols: ['cal'],
    toBase: (value) => {
      return value * 4.184
    },
    fromBase: (value) => {
      return value / 4.184
    },
  },
  kilocalories: {
    names: ['kilocalorie', 'kilocalories'],
    symbols: ['kcal'],
    toBase: (value) => {
      return value * 4184
    },
    fromBase: (value) => {
      return value / 4184
    },
  },
  btu: {
    names: ['BTU', 'british thermal unit'],
    symbols: ['BTU', 'Btu'],
    toBase: (value) => {
      return value * 1055.06
    },
    fromBase: (value) => {
      return value / 1055.06
    },
  },
  watthours: {
    names: ['watt hour', 'watt hours'],
    symbols: ['Wh'],
    toBase: (value) => {
      return value * 3600
    },
    fromBase: (value) => {
      return value / 3600
    },
  },
}
