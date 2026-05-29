import { Unit } from '../types'

export const length: Record<string, Unit> = {
  m: {
    name: 'meters',
    toBase: (value) => {
      return value
    },
    fromBase: (value) => {
      return value
    },
  },
  km: {
    name: 'kilometers',
    toBase: (value) => {
      return value * 1000
    },
    fromBase: (value) => {
      return value / 1000
    },
  },
  cm: {
    name: 'centimeters',
    toBase: (value) => {
      return value / 100
    },
    fromBase: (value) => {
      return value * 100
    },
  },
  mm: {
    name: 'millimeters',
    toBase: (value) => {
      return value / 1000
    },
    fromBase: (value) => {
      return value * 1000
    },
  },
  miles: {
    name: 'miles',
    toBase: (value) => {
      return value * 1609.34
    },
    fromBase: (value) => {
      return value / 1609.34
    },
  },
  feet: {
    name: 'feet',
    toBase: (value) => {
      return value * 0.3048
    },
    fromBase: (value) => {
      return value / 0.3048
    },
  },
  inches: {
    name: 'inches',
    toBase: (value) => {
      return value * 0.0254
    },
    fromBase: (value) => {
      return value / 0.0254
    },
  },
}