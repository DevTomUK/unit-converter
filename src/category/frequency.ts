import { Unit } from '../types'

export const frequency: Record<string, Unit> = {
  hz: {
    name: 'hertz',
    toBase: (value) => {
      return value
    },
    fromBase: (value) => {
      return value
    },
  },
  khz: {
    name: 'kilohertz',
    toBase: (value) => {
      return value * 1000
    },
    fromBase: (value) => {
      return value / 1000
    },
  },
  mhz: {
    name: 'megahertz',
    toBase: (value) => {
      return value * 1000000
    },
    fromBase: (value) => {
      return value / 1000000
    },
  },
  ghz: {
    name: 'gigahertz',
    toBase: (value) => {
      return value * 1000000000
    },
    fromBase: (value) => {
      return value / 1000000000
    },
  },
  rpm: {
    name: 'revolutions per minute',
    toBase: (value) => {
      return value / 60
    },
    fromBase: (value) => {
      return value * 60
    },
  },
}
