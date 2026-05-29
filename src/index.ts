import { length } from './category/length'
import { mass } from './category/mass'
import { temperature } from './category/temperature'
import { Convert, Conversion } from './types'

const categories = {
  length,
  mass,
  temperature,
}

function createConversion(value: number, fromUnit: any): Conversion {
  return {
    value,
    unit: fromUnit,
    to: createConversionMethods(value, fromUnit, 'to'),
    from: createConversionMethods(value, fromUnit, 'from'),
  }
}

function createConversionMethods(value: number, fromUnit: any, direction: 'to' | 'from') {
  const methods: any = {}

  Object.entries(categories).forEach(([categoryName, category]: [string, any]) => {
    Object.entries(category).forEach(([unitName, unit]: [string, any]) => {
      methods[unitName] = () => {
        if (direction === 'to') {
          const baseValue = fromUnit.toBase(value)
          return unit.fromBase(baseValue)
        } else {
          // from: reverse the conversion
          const baseValue = unit.toBase(value)
          return fromUnit.fromBase(baseValue)
        }
      }
    })
  })

  return methods
}

const convert: Convert = new Proxy({} as Convert, {
  get: (target, unitName: string) => {
    return (value: number) => {
      for (const [categoryName, units] of Object.entries(categories)) {
        if (units[unitName as keyof typeof units]) {
          const unit = units[unitName as keyof typeof units]
          return createConversion(value, unit)
        }
      }
      throw new Error(`Unknown unit: ${unitName}`)
    }
  },
})

export default convert
export type { Unit } from './types'