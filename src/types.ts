export type ConversionFn = (value: number) => number

export type Unit = {
  variants: {
    [nameOrSymbol: string]: {
      name: string
      symbol: string
    }
  }
  toBase: ConversionFn
  fromBase: ConversionFn
}

export type Conversion = {
  value: number
  unit: Unit
  to: (unitName: string) => number
}  

export type Convert = (value: number, unitName: string) => Conversion
