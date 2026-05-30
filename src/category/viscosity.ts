import { Unit } from '../types'

export const viscosity: Record<string, Unit> = {
  cst: {
    name: 'centistokes',
    toBase: (value) => {
      return value / 1000000
    },
    fromBase: (value) => {
      return value * 1000000
    },
  },
  st: {
    name: 'stokes',
    toBase: (value) => {
      return value / 10000
    },
    fromBase: (value) => {
      return value * 10000
    },
  },
  cps: {
    name: 'centipoise',
    toBase: (value) => {
      return value / 1000
    },
    fromBase: (value) => {
      return value * 1000
    },
  },
  p: {
    name: 'poise',
    toBase: (value) => {
      return value / 10
    },
    fromBase: (value) => {
      return value * 10
    },
  },
  pas: {
    name: 'pascal-seconds',
    toBase: (value) => {
      return value
    },
    fromBase: (value) => {
      return value
    },
  },
}
