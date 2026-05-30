import { Unit } from '../types'

export const frequency: Record<string, Unit> = {
  hertz: {
    names: ['hertz'],
    symbols: ['Hz'],
    description: 'The SI derived unit of frequency; one cycle per second.',
    system: 'SI',
    precision: 2,
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  kilohertz: {
    names: ['kilohertz'],
    symbols: ['kHz'],
    description: 'Equal to 1,000 Hz; used for audio frequencies and AM radio signals.',
    system: 'metric',
    precision: 2,
    toBase: (v) => v * 1000,
    fromBase: (v) => v / 1000,
  },
  megahertz: {
    names: ['megahertz'],
    symbols: ['MHz'],
    description: 'Equal to 1,000,000 Hz; used for FM radio, WiFi, and CPU clock speeds.',
    system: 'metric',
    precision: 2,
    toBase: (v) => v * 1000000,
    fromBase: (v) => v / 1000000,
  },
  gigahertz: {
    names: ['gigahertz'],
    symbols: ['GHz'],
    description: 'Equal to 1,000,000,000 Hz; used for modern CPU/GPU clock speeds and 5G signals.',
    system: 'metric',
    precision: 2,
    toBase: (v) => v * 1000000000,
    fromBase: (v) => v / 1000000000,
  },
  rpm: {
    names: ['revolutions per minute', 'revolution per minute'],
    symbols: ['rpm'],
    description: 'Rotational frequency; the number of full rotations per minute. Used for engines, motors, and hard drives.',
    system: 'other',
    precision: 2,
    toBase: (v) => v / 60,
    fromBase: (v) => v * 60,
  },
}
