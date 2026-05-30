import { Unit } from '../types'

export const illuminance: Record<string, Unit> = {
  lux: {
    names: ['lux'],
    symbols: ['lx'],
    description: 'The SI derived unit of illuminance; one lumen per square metre. Measures how much light falls on a surface.',
    system: 'SI',
    precision: 2,
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  footcandles: {
    names: ['foot-candle', 'foot candle'],
    symbols: ['fc'],
    description: 'Imperial unit of illuminance equal to 10.764 lux; one lumen per square foot. Common in US lighting design.',
    system: 'imperial',
    precision: 3,
    toBase: (v) => v * 10.764,
    fromBase: (v) => v / 10.764,
  },
  lumenspermetersquared: {
    names: ['lumen per square meter', 'lumens per square meter'],
    symbols: ['lm/m²', 'lm/m2'],
    description: 'Equivalent to lux; explicitly states the defining relationship of illuminance.',
    system: 'SI',
    precision: 2,
    toBase: (v) => v,
    fromBase: (v) => v,
  },
}
