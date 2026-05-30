import { Unit } from '../types'

export const viscosity: Record<string, Unit> = {
  pascalseconds: {
    names: ['pascal second', 'pascal-second'],
    symbols: ['Pa·s', 'Pas'],
    description: 'The SI derived unit of dynamic viscosity; resistance of a fluid to flow under shear stress.',
    system: 'SI',
    precision: 6,
    toBase: (v) => v,
    fromBase: (v) => v,
  },
  poise: {
    names: ['poise'],
    symbols: ['P'],
    description: 'CGS unit of dynamic viscosity; 1 P = 0.1 Pa·s. Named after Jean Léonard Marie Poiseuille.',
    system: 'CGS',
    precision: 4,
    toBase: (v) => v / 10,
    fromBase: (v) => v * 10,
  },
  centipoise: {
    names: ['centipoise'],
    symbols: ['cP'],
    description: 'One hundredth of a poise (0.001 Pa·s); water at 20°C has a viscosity of approximately 1 cP.',
    system: 'CGS',
    precision: 4,
    toBase: (v) => v / 1000,
    fromBase: (v) => v * 1000,
  },
  stokes: {
    names: ['stoke', 'stokes'],
    symbols: ['St'],
    description: 'CGS unit of kinematic viscosity; ratio of dynamic viscosity to density.',
    system: 'CGS',
    precision: 4,
    toBase: (v) => v / 10000,
    fromBase: (v) => v * 10000,
  },
  centistokes: {
    names: ['centistoke', 'centistokes'],
    symbols: ['cSt'],
    description: 'One hundredth of a stoke; commonly used for motor oils and hydraulic fluids.',
    system: 'CGS',
    precision: 4,
    toBase: (v) => v / 1000000,
    fromBase: (v) => v * 1000000,
  },
}
