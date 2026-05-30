import { angle } from './category/angle'
import { area } from './category/area'
import { concentration } from './category/concentration'
import { data } from './category/data'
import { density } from './category/density'
import { energy } from './category/energy'
import { force } from './category/force'
import { frequency } from './category/frequency'
import { illuminance } from './category/illuminance'
import { length } from './category/length'
import { mass } from './category/mass'
import { power } from './category/power'
import { pressure } from './category/pressure'
import { speed } from './category/speed'
import { temperature } from './category/temperature'
import { time } from './category/time'
import { viscosity } from './category/viscosity'
import { volume } from './category/volume'
import { Unit } from './types'

const categories: Record<string, Record<string, Unit>> = {
  length,
  mass,
  temperature,
  volume,
  area,
  time,
  speed,
  pressure,
  data,
  energy,
  power,
  force,
  angle,
  frequency,
  density,
  illuminance,
  viscosity,
  concentration,
}

function convert(value: number, fromUnitName: string) {
  let fromUnit: Unit | null = null
  
  for (const units of Object.values(categories)) {
    if (units[fromUnitName as keyof typeof units]) {
      fromUnit = units[fromUnitName as keyof typeof units]
      break
    }
  }

  if (!fromUnit) throw new Error(`Unknown unit: ${fromUnitName}`)

  return {
    to: (toUnitName: string) => {
      for (const units of Object.values(categories)) {
        if (units[toUnitName as keyof typeof units]) {
          const toUnit = units[toUnitName as keyof typeof units]
          const baseValue = fromUnit!.toBase(value)
          return toUnit.fromBase(baseValue)
        }
      }
      throw new Error(`Unknown unit: ${toUnitName}`)
    }
  }
}

export default convert
export { convert }
export type { Unit } from './types'