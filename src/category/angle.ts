import { Unit } from '../types'

export const angle: Record<string, Unit> = {
  degrees: {
    names: ['degree', 'degrees'],
    symbols: ['°', 'deg'],
    description: 'The most common unit of angle; a full circle is divided into 360 degrees.',
    system: 'other',
    precision: 4,
    toBase: (v) => v * (Math.PI / 180),
    fromBase: (v) => v * (180 / Math.PI),
  },
  radians: {
    names: ['radian', 'radians'],
    symbols: ['rad'],
    description: 'The SI derived unit of angle; one radian is the angle subtended by an arc equal in length to the radius.',
    system: 'SI',
    precision: 6,
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  gradians: {
    names: ['gradian', 'gradians'],
    symbols: ['grad'],
    description: 'A right angle is 100 gradians; a full circle is 400 gradians. Used in surveying.',
    system: 'other',
    precision: 4,
    toBase: (v) => v * (Math.PI / 200),
    fromBase: (v) => v * (200 / Math.PI),
  },
  arcminutes: {
    names: ['arcminute', 'arcminutes'],
    symbols: ["'"],
    description: 'One sixtieth of a degree; used in astronomy, navigation, and optics.',
    system: 'other',
    precision: 2,
    toBase: (v) => v * (Math.PI / 10800),
    fromBase: (v) => v * (10800 / Math.PI),
  },
  arcseconds: {
    names: ['arcsecond', 'arcseconds'],
    symbols: ['"'],
    description: 'One sixtieth of an arcminute (1/3600 of a degree); used in precise astronomical and geodetic measurements.',
    system: 'other',
    precision: 2,
    toBase: (v) => v * (Math.PI / 648000),
    fromBase: (v) => v * (648000 / Math.PI),
  },
}
