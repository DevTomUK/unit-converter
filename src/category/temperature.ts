import { Unit } from '../types'

export const temperature: Record<string, Unit> = {
  celsius: {
    names: ['celsius', 'degree celsius', 'degrees celsius'],
    symbols: ['°C', 'C'],
    description: 'Metric temperature scale where 0° is the freezing point of water and 100° is the boiling point at standard pressure.',
    system: 'metric',
    precision: 2,
    toBase: (v) => v + 273.15,
    fromBase: (v) => v - 273.15,
  },
  kelvin: {
    names: ['kelvin'],
    symbols: ['K'],
    description: 'The SI base unit of thermodynamic temperature; 0 K is absolute zero, the lowest possible temperature.',
    system: 'SI',
    precision: 2,
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  fahrenheit: {
    names: ['fahrenheit', 'degree fahrenheit', 'degrees fahrenheit'],
    symbols: ['°F', 'F'],
    description: 'Imperial temperature scale where 32° is the freezing point of water and 212° is the boiling point.',
    system: 'imperial',
    precision: 1,
    toBase: (v) => (v - 32) * (5 / 9) + 273.15,
    fromBase: (v) => (v - 273.15) * (9 / 5) + 32,
  },
}
