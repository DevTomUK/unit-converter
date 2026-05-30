import { Unit } from '../types'

export const concentration: Record<string, Unit> = {
  molarity: {
    names: ['molar', 'molarity'],
    symbols: ['M'],
    description: 'Moles of solute per litre of solution; the standard unit of concentration in chemistry.',
    system: 'SI',
    precision: 4,
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  percent: {
    names: ['percent', 'percentage'],
    symbols: ['%'],
    description: 'Parts per hundred; the most common way to express concentration in everyday contexts.',
    system: 'other',
    precision: 2,
    toBase: (v) => v / 100,
    fromBase: (v) => v * 100,
  },
  ppt: {
    names: ['parts per thousand', 'part per thousand'],
    symbols: ['ppt'],
    description: 'Parts per thousand; used in salinity measurements for oceanography and aquaculture.',
    system: 'other',
    precision: 2,
    toBase: (v) => v / 1000,
    fromBase: (v) => v * 1000,
  },
  ppm: {
    names: ['parts per million', 'part per million'],
    symbols: ['ppm'],
    description: 'Parts per million; used for trace concentrations such as pollutants in air or water.',
    system: 'other',
    precision: 2,
    toBase: (v) => v / 1000000,
    fromBase: (v) => v * 1000000,
  },
  ppb: {
    names: ['parts per billion', 'part per billion'],
    symbols: ['ppb'],
    description: 'Parts per billion; used for ultra-trace concentrations in environmental and pharmaceutical testing.',
    system: 'other',
    precision: 2,
    toBase: (v) => v / 1000000000,
    fromBase: (v) => v * 1000000000,
  },
}
