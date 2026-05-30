import { Unit } from '../types'

export const frequency: Record<string, Unit> = {
  hertz: {
    names: ['hertz'],
    symbols: ['Hz'],
    toBase: (value) => {
      return value
    },
    fromBase: (value) => {
      return value
    },
  },
  kilohertz: {
    names: ['kilohertz'],
    symbols: ['kHz'],
    toBase: (value) => {
      return value * 1000
    },
    fromBase: (value) => {
      return value / 1000
    },
  },
  megahertz: {
    names: ['megahertz'],
    symbols: ['MHz'],
    toBase: (value) => {
      return value * 1000000
    },
    fromBase: (value) => {
      return value / 1000000
    },
  },
  gigahertz: {
    names: ['gigahertz'],
    symbols: ['GHz'],
    toBase: (value) => {
      return value * 1000000000
    },
    fromBase: (value) => {
      return value / 1000000000
    },
  },
  rpm: {
    names: ['revolutions per minute', 'revolution per minute'],
    symbols: ['rpm'],
    toBase: (value) => {
      return value / 60
    },
    fromBase: (value) => {
      return value * 60
    },
  },
}
