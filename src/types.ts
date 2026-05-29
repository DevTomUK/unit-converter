export type ConversionFn = (value: number) => number

export type Unit = {
  name: string
  toBase: ConversionFn
  fromBase: ConversionFn
}

export type Conversion = {
  value: number
  unit: Unit
  to: {
    [unitName: string]: () => number
  }
  from: {
    [unitName: string]: () => number
  }
}

export type Convert = {
  [unitName: string]: (value: number) => Conversion
}