import { Unit } from '../types'

export const data: Record<string, Unit> = {
  b: {
    name: 'bytes',
    toBase: (value) => {
      return value
    },
    fromBase: (value) => {
      return value
    },
  },
  kb: {
    name: 'kilobytes',
    toBase: (value) => {
      return value * 1024
    },
    fromBase: (value) => {
      return value / 1024
    },
  },
  mb: {
    name: 'megabytes',
    toBase: (value) => {
      return value * 1048576
    },
    fromBase: (value) => {
      return value / 1048576
    },
  },
  gb: {
    name: 'gigabytes',
    toBase: (value) => {
      return value * 1073741824
    },
    fromBase: (value) => {
      return value / 1073741824
    },
  },
  tb: {
    name: 'terabytes',
    toBase: (value) => {
      return value * 1099511627776
    },
    fromBase: (value) => {
      return value / 1099511627776
    },
  },
  pb: {
    name: 'petabytes',
    toBase: (value) => {
      return value * 1125899906842624
    },
    fromBase: (value) => {
      return value / 1125899906842624
    },
  },
}
