import { Unit } from '../types'

export const mass: Record<string, Unit> = {
  kilograms: {
    names: ['kilogram', 'kilograms'],
    symbols: ['kg'],
    description: 'The SI base unit of mass.',
    system: 'SI',
    precision: 3,
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  grams: {
    names: ['gram', 'grams'],
    symbols: ['g'],
    description: 'One thousandth of a kilogram; used for small everyday weights.',
    system: 'metric',
    precision: 2,
    toBase: (v) => v / 1000,
    fromBase: (v) => v * 1000,
  },
  milligrams: {
    names: ['milligram', 'milligrams'],
    symbols: ['mg'],
    description: 'One millionth of a kilogram; used in medicine and pharmacology.',
    system: 'metric',
    precision: 0,
    toBase: (v) => v / 1000000,
    fromBase: (v) => v * 1000000,
  },
  pounds: {
    names: ['pound', 'pounds'],
    symbols: ['lb', 'lbs'],
    description: 'Imperial unit of mass equal to 16 ounces (0.453592 kg); the primary mass unit in the US.',
    system: 'imperial',
    precision: 2,
    toBase: (v) => v * 0.453592,
    fromBase: (v) => v / 0.453592,
  },
  ounces: {
    names: ['ounce', 'ounces'],
    symbols: ['oz'],
    description: 'Imperial unit of mass equal to one sixteenth of a pound (28.3495 g).',
    system: 'imperial',
    precision: 2,
    toBase: (v) => v * 0.0283495,
    fromBase: (v) => v / 0.0283495,
  },
}
