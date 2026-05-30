import { Unit } from '../types'

export const density: Record<string, Unit> = {
  kilogramspermetercubed: {
    names: ['kilogram per cubic meter', 'kilograms per cubic meter'],
    symbols: ['kg/m³', 'kg/m3'],
    description: 'The SI derived unit of density; mass in kilograms per cubic metre.',
    system: 'SI',
    precision: 3,
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  gramspercentimetercubed: {
    names: ['gram per cubic centimeter', 'grams per cubic centimeter'],
    symbols: ['g/cm³', 'g/cm3'],
    description: 'CGS unit of density equal to 1,000 kg/m³; water has a density of approximately 1 g/cm³.',
    system: 'CGS',
    precision: 4,
    toBase: (v) => v * 1000,
    fromBase: (v) => v / 1000,
  },
  poundsperfoot: {
    names: ['pound per cubic foot', 'pounds per cubic foot'],
    symbols: ['lb/ft³', 'lb/ft3'],
    description: 'Imperial unit of density; commonly used in construction materials and fluid engineering in the US.',
    system: 'imperial',
    precision: 3,
    toBase: (v) => v * 16.0185,
    fromBase: (v) => v / 16.0185,
  },
  poundspergallon: {
    names: ['pound per gallon', 'pounds per gallon'],
    symbols: ['lb/gal'],
    description: 'Imperial/US unit of density; used in the oil and chemical industries.',
    system: 'imperial',
    precision: 3,
    toBase: (v) => v * 119.827,
    fromBase: (v) => v / 119.827,
  },
}
