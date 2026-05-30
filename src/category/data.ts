import { Unit } from '../types'

export const data: Record<string, Unit> = {
  bytes: {
    names: ['byte', 'bytes'],
    symbols: ['B'],
    toBase: (value) => {
      return value
    },
    fromBase: (value) => {
      return value
    },
  },
  kilobytes: {
    names: ['kilobyte', 'kilobytes'],
    symbols: ['KB'],
    toBase: (value) => {
      return value * 1024
    },
    fromBase: (value) => {
      return value / 1024
    },
  },
  megabytes: {
    names: ['megabyte', 'megabytes'],
    symbols: ['MB'],
    toBase: (value) => {
      return value * 1048576
    },
    fromBase: (value) => {
      return value / 1048576
    },
  },
  gigabytes: {
    names: ['gigabyte', 'gigabytes'],
    symbols: ['GB'],
    toBase: (value) => {
      return value * 1073741824
    },
    fromBase: (value) => {
      return value / 1073741824
    },
  },
  terabytes: {
    names: ['terabyte', 'terabytes'],
    symbols: ['TB'],
    toBase: (value) => {
      return value * 1099511627776
    },
    fromBase: (value) => {
      return value / 1099511627776
    },
  },
  petabytes: {
    names: ['petabyte', 'petabytes'],
    symbols: ['PB'],
    toBase: (value) => {
      return value * 1125899906842624
    },
    fromBase: (value) => {
      return value / 1125899906842624
    },
  },
}
