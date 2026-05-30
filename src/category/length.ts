import { Unit } from '../types'

export const length: Record<string, Unit> = {
  meters: {
    names: ['meter', 'meters'],
    symbols: ['m'],
    toBase: (value) => {
      return value
    },
    fromBase: (value) => {
      return value
    },
  },
  kilometers: {
    names: ['kilometer', 'kilometers'],
    symbols: ['km'],
    toBase: (value) => {
      return value * 1000
    },
    fromBase: (value) => {
      return value / 1000
    },
  },
  centimeters: {
    names: ['centimeter', 'centimeters'],
    symbols: ['cm'],
    toBase: (value) => {
      return value / 100
    },
    fromBase: (value) => {
      return value * 100
    },
  },
  millimeters: {
    names: ['millimeter', 'millimeters'],
    symbols: ['mm'],
    toBase: (value) => {
      return value / 1000
    },
    fromBase: (value) => {
      return value * 1000
    },
  },
  miles: {
    names: ['mile', 'miles'],
    symbols: ['mi'],
    toBase: (value) => {
      return value * 1609.34
    },
    fromBase: (value) => {
      return value / 1609.34
    },
  },
  feet: {
    names: ['foot', 'feet'],
    symbols: ['ft'],
    toBase: (value) => {
      return value * 0.3048
    },
    fromBase: (value) => {
      return value / 0.3048
    },
  },
  inches: {
    names: ['inch', 'inches'],
    symbols: ['in'],
    toBase: (value) => {
      return value * 0.0254
    },
    fromBase: (value) => {
      return value / 0.0254
    },
  },
}
