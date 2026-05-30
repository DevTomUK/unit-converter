import { Unit } from '../types'

export const viscosity: Record<string, Unit> = {
  centistokes: {
    names: ['centistoke', 'centistokes'],
    symbols: ['cSt'],
    toBase: (value) => {
      return value / 1000000
    },
    fromBase: (value) => {
      return value * 1000000
    },
  },
  stokes: {
    names: ['stoke', 'stokes'],
    symbols: ['St'],
    toBase: (value) => {
      return value / 10000
    },
    fromBase: (value) => {
      return value * 10000
    },
  },
  centipoise: {
    names: ['centipoise'],
    symbols: ['cP'],
    toBase: (value) => {
      return value / 1000
    },
    fromBase: (value) => {
      return value * 1000
    },
  },
  poise: {
    names: ['poise'],
    symbols: ['P'],
    toBase: (value) => {
      return value / 10
    },
    fromBase: (value) => {
      return value * 10
    },
  },
  pascalseconds: {
    names: ['pascal second', 'pascal-second'],
    symbols: ['Pa·s', 'Pas'],
    toBase: (value) => {
      return value
    },
    fromBase: (value) => {
      return value
    },
  },
}
