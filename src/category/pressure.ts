import { Unit } from '../types'

export const pressure: Record<string, Unit> = {
  pascals: {
    names: ['pascal', 'pascals'],
    symbols: ['Pa'],
    toBase: (value) => {
      return value
    },
    fromBase: (value) => {
      return value
    },
  },
  bars: {
    names: ['bar', 'bars'],
    symbols: ['bar'],
    toBase: (value) => {
      return value * 100000
    },
    fromBase: (value) => {
      return value / 100000
    },
  },
  psi: {
    names: ['pound per square inch', 'pounds per square inch'],
    symbols: ['psi'],
    toBase: (value) => {
      return value * 6894.76
    },
    fromBase: (value) => {
      return value / 6894.76
    },
  },
  atmospheres: {
    names: ['atmosphere', 'atmospheres'],
    symbols: ['atm'],
    toBase: (value) => {
      return value * 101325
    },
    fromBase: (value) => {
      return value / 101325
    },
  },
  millimetersmercury: {
    names: ['millimeter of mercury', 'millimeters of mercury'],
    symbols: ['mmHg'],
    toBase: (value) => {
      return value * 133.322
    },
    fromBase: (value) => {
      return value / 133.322
    },
  },
  kilopascals: {
    names: ['kilopascal', 'kilopascals'],
    symbols: ['kPa'],
    toBase: (value) => {
      return value * 1000
    },
    fromBase: (value) => {
      return value / 1000
    },
  },
}
