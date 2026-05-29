import { Unit } from '../types'

export const temperature: Record<string, Unit> = {
  c: {
    name: 'celsius',
    toBase: (value) => value + 273.15,
    fromBase: (value) => value - 273.15,
  },
  k: {
    name: 'kelvin',
    toBase: (value) => value,
    fromBase: (value) => value,
  },
  f: {
    name: 'fahrenheit',
    toBase: (value) => (value - 32) * (5 / 9) + 273.15,
    fromBase: (value) => (value - 273.15) * (9 / 5) + 32,
  },
}