import { length } from './category/length'
import { mass } from './category/mass'
import { temperature } from './category/temperature'
import { Unit } from './types'

const categories: Record<string, Record<string, Unit>> = {
  length,
  mass,
  temperature,
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