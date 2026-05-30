import { Unit } from '../types'

export const speed: Record<string, Unit> = {
  meterspersecond: {
    names: ['meter per second', 'meters per second'],
    symbols: ['m/s', 'mps'],
    description: 'The SI derived unit of speed; the distance in meters travelled per second.',
    system: 'SI',
    precision: 2,
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  kilometersperhour: {
    names: ['kilometer per hour', 'kilometers per hour'],
    symbols: ['km/h', 'kmh'],
    description: 'Metric unit of speed equal to 1,000 meters per hour; the standard for road speed limits in most countries.',
    system: 'metric',
    precision: 2,
    toBase: (v) => v / 3.6,
    fromBase: (v) => v * 3.6,
  },
  milesperhour: {
    names: ['mile per hour', 'miles per hour'],
    symbols: ['mph'],
    description: 'Imperial unit of speed; the standard for road speed limits in the US and UK.',
    system: 'imperial',
    precision: 2,
    toBase: (v) => v * 0.44704,
    fromBase: (v) => v / 0.44704,
  },
  knots: {
    names: ['knot', 'knots'],
    symbols: ['kt'],
    description: 'Nautical unit of speed equal to one nautical mile per hour (1.852 km/h); used in maritime and aviation.',
    system: 'other',
    precision: 2,
    toBase: (v) => v * 0.51444,
    fromBase: (v) => v / 0.51444,
  },
  feetpersecond: {
    names: ['foot per second', 'feet per second'],
    symbols: ['ft/s', 'fps'],
    description: 'Imperial unit of speed equal to 0.3048 m/s; used in engineering and ballistics.',
    system: 'imperial',
    precision: 2,
    toBase: (v) => v * 0.3048,
    fromBase: (v) => v / 0.3048,
  },
}
