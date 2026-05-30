export type ConversionFn = (value: number) => number

export type Unit = {
  name: string
  toBase: ConversionFn
  fromBase: ConversionFn
}

export type ConversionMethods = {
  [unitName: string]: () => number
}

export type Conversion = {
  value: number
  unit: Unit
  to: ConversionMethods
  from: ConversionMethods
}

export type Convert = {
  [unitName: string]: (value: number) => Conversion
}