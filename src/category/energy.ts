import { Unit } from '../types'

export const energy: Record<string, Unit> = {
  j: {
    name: 'joules',
    toBase: (value) => {
      return value
    },
    fromBase: (value) => {
      return value
    },
  },
  kj: {
    name: 'kilojoules',
    toBase: (value) => {
      return value * 1000
    },
    fromBase: (value) => {
      return value / 1000
    },
  },
  cal: {
    name: 'calories',
    toBase: (value) => {
      return value * 4.184
    },
    fromBase: (value) => {
      return value / 4.184
    },
  },
  kcal: {
    name: 'kilocalories',
    toBase: (value) => {
      return value * 4184
    },
    fromBase: (value) => {
      return value / 4184
    },
  },
  btu: {
    name: 'BTU',
    toBase: (value) => {
      return value * 1055.06
    },
    fromBase: (value) => {
      return value / 1055.06
    },
  },
  wh: {
    name: 'watt-hours',
    toBase: (value) => {
      return value * 3600
    },
    fromBase: (value) => {
      return value / 3600
    },
  },
}
