import { Unit } from '../types'

export const temperature: Record<string, Unit> = {
  celsius: {
    names: ['celsius', 'degree celsius', 'degrees celsius'],
    symbols: ['°C', 'C'],
    toBase: (value) => {
      return value + 273.15
    },
    fromBase: (value) => {
      return value - 273.15
    },
  },
  kelvin: {
    names: ['kelvin'],
    symbols: ['K'],
    toBase: (value) => {
      return value
    },
    fromBase: (value) => {
      return value
    },
  },
  fahrenheit: {
    names: ['fahrenheit', 'degree fahrenheit', 'degrees fahrenheit'],
    symbols: ['°F', 'F'],
    toBase: (value) => {
      return (value - 32) * (5 / 9) + 273.15
    },
    fromBase: (value) => {
      return (value - 273.15) * (9 / 5) + 32
    },
  },
}
