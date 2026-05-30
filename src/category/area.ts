import { Unit } from '../types'

export const area: Record<string, Unit> = {
  squaremeters: {
    names: ['square meter', 'square meters'],
    symbols: ['m²', 'm2'],
    toBase: (value) => {
      return value
    },
    fromBase: (value) => {
      return value
    },
  },
  squarekilometers: {
    names: ['square kilometer', 'square kilometers'],
    symbols: ['km²', 'km2'],
    toBase: (value) => {
      return value * 1000000
    },
    fromBase: (value) => {
      return value / 1000000
    },
  },
  hectares: {
    names: ['hectare', 'hectares'],
    symbols: ['ha'],
    toBase: (value) => {
      return value * 10000
    },
    fromBase: (value) => {
      return value / 10000
    },
  },
  acres: {
    names: ['acre', 'acres'],
    symbols: ['ac'],
    toBase: (value) => {
      return value * 4046.86
    },
    fromBase: (value) => {
      return value / 4046.86
    },
  },
  squarefeet: {
    names: ['square foot', 'square feet'],
    symbols: ['ft²', 'ft2'],
    toBase: (value) => {
      return value * 0.092903
    },
    fromBase: (value) => {
      return value / 0.092903
    },
  },
  squaremiles: {
    names: ['square mile', 'square miles'],
    symbols: ['mi²', 'mi2'],
    toBase: (value) => {
      return value * 2589988
    },
    fromBase: (value) => {
      return value / 2589988
    },
  },
}
