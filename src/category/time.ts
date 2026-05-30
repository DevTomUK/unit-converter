import { Unit } from '../types'

export const time: Record<string, Unit> = {
  seconds: {
    names: ['second', 'seconds'],
    symbols: ['s', 'sec'],
    toBase: (value) => {
      return value
    },
    fromBase: (value) => {
      return value
    },
  },
  milliseconds: {
    names: ['millisecond', 'milliseconds'],
    symbols: ['ms'],
    toBase: (value) => {
      return value / 1000
    },
    fromBase: (value) => {
      return value * 1000
    },
  },
  minutes: {
    names: ['minute', 'minutes'],
    symbols: ['min'],
    toBase: (value) => {
      return value * 60
    },
    fromBase: (value) => {
      return value / 60
    },
  },
  hours: {
    names: ['hour', 'hours'],
    symbols: ['h', 'hr'],
    toBase: (value) => {
      return value * 3600
    },
    fromBase: (value) => {
      return value / 3600
    },
  },
  days: {
    names: ['day', 'days'],
    symbols: ['d'],
    toBase: (value) => {
      return value * 86400
    },
    fromBase: (value) => {
      return value / 86400
    },
  },
  weeks: {
    names: ['week', 'weeks'],
    symbols: ['wk'],
    toBase: (value) => {
      return value * 604800
    },
    fromBase: (value) => {
      return value / 604800
    },
  },
  years: {
    names: ['year', 'years'],
    symbols: ['yr', 'y'],
    toBase: (value) => {
      return value * 31536000
    },
    fromBase: (value) => {
      return value / 31536000
    },
  },
}
