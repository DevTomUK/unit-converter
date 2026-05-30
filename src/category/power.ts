import { Unit } from '../types'

export const power: Record<string, Unit> = {
  watts: {
    names: ['watt', 'watts'],
    symbols: ['W'],
    toBase: (value) => {
      return value
    },
    fromBase: (value) => {
      return value
    },
  },
  kilowatts: {
    names: ['kilowatt', 'kilowatts'],
    symbols: ['kW'],
    toBase: (value) => {
      return value * 1000
    },
    fromBase: (value) => {
      return value / 1000
    },
  },
  megawatts: {
    names: ['megawatt', 'megawatts'],
    symbols: ['MW'],
    toBase: (value) => {
      return value * 1000000
    },
    fromBase: (value) => {
      return value / 1000000
    },
  },
  horsepower: {
    names: ['horsepower'],
    symbols: ['hp'],
    toBase: (value) => {
      return value * 746
    },
    fromBase: (value) => {
      return value / 746
    },
  },
  btuperhour: {
    names: ['BTU per hour', 'british thermal unit per hour'],
    symbols: ['BTU/h'],
    toBase: (value) => {
      return value * 0.293071
    },
    fromBase: (value) => {
      return value / 0.293071
    },
  },
}
