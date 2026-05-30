export type ConversionFn = (value: number) => number;

export type UnitSystem = 'SI' | 'metric' | 'imperial' | 'US' | 'CGS' | 'other';

export type Unit = {
  names: string[];
  symbols: string[];
  description: string;
  system: UnitSystem;
  precision: number;
  toBase: ConversionFn;
  fromBase: ConversionFn;
};

export type UnitInfo = {
  name: string;
  names: string[];
  symbol: string;
  symbols: string[];
  description: string;
  system: UnitSystem;
  precision: number;
  category: string;
};

export type ConversionResult = {
  from: {
    value: number;
    unit: UnitInfo;
  };
  to: {
    value: number;
    unit: UnitInfo;
  };
};

export type Conversion = {
  to: (unitName: string) => ConversionResult;
};

export type Convert = (value: number, unitName: string) => Conversion;
