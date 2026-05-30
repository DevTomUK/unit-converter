import { Unit } from '../types'

export const angle: Record<string, Unit> = {
  degrees: {
    names: ['degree', 'degrees'],
    symbols: ['°', 'deg'],
    toBase: (value) => {
      return value * (Math.PI / 180)
    },
    fromBase: (value) => {
      return value * (180 / Math.PI)
    },
  },
  radians: {
    names: ['radian', 'radians'],
    symbols: ['rad'],
    toBase: (value) => {
      return value
    },
    fromBase: (value) => {
      return value
    },
  },
  gradians: {
    names: ['gradian', 'gradians'],
    symbols: ['grad'],
    toBase: (value) => {
      return value * (Math.PI / 200)
    },
    fromBase: (value) => {
      return value * (200 / Math.PI)
    },
  },
  arcminutes: {
    names: ['arcminute', 'arcminutes'],
    symbols: ["'"],
    toBase: (value) => {
      return value * (Math.PI / 10800)
    },
    fromBase: (value) => {
      return value * (10800 / Math.PI)
    },
  },
  arcseconds: {
    names: ['arcsecond', 'arcseconds'],
    symbols: ['"'],
    toBase: (value) => {
      return value * (Math.PI / 648000)
    },
    fromBase: (value) => {
      return value * (648000 / Math.PI)
    },
  },
}
