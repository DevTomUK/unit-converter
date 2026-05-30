import { Unit } from '../types'

export const concentration: Record<string, Unit> = {
  molarity: {
    names: ['molar', 'molarity'],
    symbols: ['M'],
    toBase: (value) => {
      return value
    },
    fromBase: (value) => {
      return value
    },
  },
  ppm: {
    names: ['parts per million', 'part per million'],
    symbols: ['ppm'],
    toBase: (value) => {
      return value / 1000000
    },
    fromBase: (value) => {
      return value * 1000000
    },
  },
  ppb: {
    names: ['parts per billion', 'part per billion'],
    symbols: ['ppb'],
    toBase: (value) => {
      return value / 1000000000
    },
    fromBase: (value) => {
      return value * 1000000000
    },
  },
  percent: {
    names: ['percent', 'percentage'],
    symbols: ['%'],
    toBase: (value) => {
      return value / 100
    },
    fromBase: (value) => {
      return value * 100
    },
  },
  ppt: {
    names: ['parts per thousand', 'part per thousand'],
    symbols: ['ppt'],
    toBase: (value) => {
      return value / 1000
    },
    fromBase: (value) => {
      return value * 1000
    },
  },
}
