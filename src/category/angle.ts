import { Unit } from '../types'

export const angle: Record<string, Unit> = {
  deg: {
    name: 'degrees',
    toBase: (value) => {
      return value * (Math.PI / 180)
    },
    fromBase: (value) => {
      return value * (180 / Math.PI)
    },
  },
  rad: {
    name: 'radians',
    toBase: (value) => {
      return value
    },
    fromBase: (value) => {
      return value
    },
  },
  grad: {
    name: 'gradians',
    toBase: (value) => {
      return value * (Math.PI / 200)
    },
    fromBase: (value) => {
      return value * (200 / Math.PI)
    },
  },
  arcmin: {
    name: 'arcminutes',
    toBase: (value) => {
      return value * (Math.PI / 10800)
    },
    fromBase: (value) => {
      return value * (10800 / Math.PI)
    },
  },
  arcsec: {
    name: 'arcseconds',
    toBase: (value) => {
      return value * (Math.PI / 648000)
    },
    fromBase: (value) => {
      return value * (648000 / Math.PI)
    },
  },
}
