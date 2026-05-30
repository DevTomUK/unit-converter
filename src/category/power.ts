import { Unit } from '../types'

export const power: Record<string, Unit> = {
  watts: {
    names: ['watt', 'watts'],
    symbols: ['W'],
    description: 'The SI derived unit of power; one joule per second.',
    system: 'SI',
    precision: 2,
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  kilowatts: {
    names: ['kilowatt', 'kilowatts'],
    symbols: ['kW'],
    description: 'Equal to 1,000 watts; used for electric motors, appliances, and power grids.',
    system: 'metric',
    precision: 3,
    toBase: (v) => v * 1000,
    fromBase: (v) => v / 1000,
  },
  megawatts: {
    names: ['megawatt', 'megawatts'],
    symbols: ['MW'],
    description: 'Equal to 1,000,000 watts; used for power stations and large industrial loads.',
    system: 'metric',
    precision: 3,
    toBase: (v) => v * 1000000,
    fromBase: (v) => v / 1000000,
  },
  horsepower: {
    names: ['horsepower'],
    symbols: ['hp'],
    description: 'Traditional unit of power originally defined by James Watt; 1 hp = 746 W. Used for engines and motors.',
    system: 'other',
    precision: 2,
    toBase: (v) => v * 746,
    fromBase: (v) => v / 746,
  },
  btuperhour: {
    names: ['BTU per hour', 'british thermal unit per hour'],
    symbols: ['BTU/h'],
    description: 'Imperial unit of power used for heating and cooling systems; 1 BTU/h ≈ 0.293 W.',
    system: 'imperial',
    precision: 2,
    toBase: (v) => v * 0.293071,
    fromBase: (v) => v / 0.293071,
  },
}
