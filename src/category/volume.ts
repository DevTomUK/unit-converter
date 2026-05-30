import { Unit } from '../types'

export const volume: Record<string, Unit> = {
  l: {
    name: 'liters',
    toBase: (value) => {
      return value
    },
    fromBase: (value) => {
      return value
    },
  },
  ml: {
    name: 'milliliters',
    toBase: (value) => {
      return value / 1000
    },
    fromBase: (value) => {
      return value * 1000
    },
  },
  gallon: {
    name: 'gallons (US)',
    toBase: (value) => {
      return value * 3.78541
    },
    fromBase: (value) => {
      return value / 3.78541
    },
  },
  cup: {
    name: 'cups (US)',
    toBase: (value) => {
      return value * 0.236588
    },
    fromBase: (value) => {
      return value / 0.236588
    },
  },
  pint: {
    name: 'pints (US)',
    toBase: (value) => {
      return value * 0.473176
    },
    fromBase: (value) => {
      return value / 0.473176
    },
  },
  floz: {
    name: 'fluid ounces (US)',
    toBase: (value) => {
      return value * 0.0295735
    },
    fromBase: (value) => {
      return value / 0.0295735
    },
  },
}
