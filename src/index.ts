import { length } from './category/length'
import { mass } from './category/mass'
import { temperature } from './category/temperature'
import { volume } from './category/volume'
import { area } from './category/area'
import { time } from './category/time'
import { speed } from './category/speed'
import { pressure } from './category/pressure'
import { data } from './category/data'
import { energy } from './category/energy'
import { power } from './category/power'
import { force } from './category/force'
import { angle } from './category/angle'
import { frequency } from './category/frequency'
import { density } from './category/density'
import { illuminance } from './category/illuminance'
import { viscosity } from './category/viscosity'
import { concentration } from './category/concentration'
import { Unit, Conversion } from './types'

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

function findUnit(unitName: string): { category: string; unit: Unit } | null {
  for (const [categoryName, units] of Object.entries(categories)) {
    const unit = units[unitName as keyof typeof units]
    if (unit) {
      return { category: categoryName, unit }
    }
  }
  return null
}

function convert(value: number, fromUnitName: string): Conversion {
  const fromResult = findUnit(fromUnitName)
  if (!fromResult) {
    throw new Error(`Unknown unit: ${fromUnitName}`)
  }

  const fromUnit = fromResult.unit

  return {
    value,
    unit: fromUnit,
    to: (toUnitName: string) => {
      const toResult = findUnit(toUnitName)
      if (!toResult) {
        throw new Error(`Unknown unit: ${toUnitName}`)
      }

      const toUnit = toResult.unit
      const baseValue = fromUnit.toBase(value)
      return toUnit.fromBase(baseValue)
    },
  }
}

export default convert
export { convert }
export type { Unit } from './types'
