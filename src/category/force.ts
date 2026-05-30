import { Unit } from '../types'

export const force: Record<string, Unit> = {
  newtons: {
    names: ['newton', 'newtons'],
    symbols: ['N'],
    description: 'The SI derived unit of force; the force needed to accelerate 1 kg at 1 m/s².',
    system: 'SI',
    precision: 3,
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  kilonewtons: {
    names: ['kilonewton', 'kilonewtons'],
    symbols: ['kN'],
    description: 'Equal to 1,000 newtons; used in structural engineering and vehicle dynamics.',
    system: 'metric',
    precision: 3,
    toBase: (v) => v * 1000,
    fromBase: (v) => v / 1000,
  },
  dynes: {
    names: ['dyne', 'dynes'],
    symbols: ['dyn'],
    description: 'CGS unit of force; equal to 10⁻⁵ newtons. Used in surface tension and older physics literature.',
    system: 'CGS',
    precision: 0,
    toBase: (v) => v / 100000,
    fromBase: (v) => v * 100000,
  },
  poundsforce: {
    names: ['pound-force', 'pounds-force'],
    symbols: ['lbf'],
    description: 'Imperial unit of force equal to the gravitational force on a one-pound mass (4.44822 N).',
    system: 'imperial',
    precision: 3,
    toBase: (v) => v * 4.44822,
    fromBase: (v) => v / 4.44822,
  },
  kilogramforce: {
    names: ['kilogram-force', 'kilogram force'],
    symbols: ['kgf'],
    description: 'The gravitational force exerted on a one-kilogram mass at standard gravity (9.80665 N).',
    system: 'other',
    precision: 3,
    toBase: (v) => v * 9.80665,
    fromBase: (v) => v / 9.80665,
  },
}
