import { length } from "./category/length";
import { mass } from "./category/mass";
import { temperature } from "./category/temperature";
import { area } from "./category/area";
import { time } from "./category/time";
import { speed } from "./category/speed";
import { pressure } from "./category/pressure";
import { data } from "./category/data";
import { energy } from "./category/energy";
import { power } from "./category/power";
import { force } from "./category/force";
import { angle } from "./category/angle";
import { frequency } from "./category/frequency";
import { density } from "./category/density";
import { illuminance } from "./category/illuminance";
import { viscosity } from "./category/viscosity";
import { concentration } from "./category/concentration";

import { Unit, UnitInfo, Conversion, ConversionResult } from "./types";

const categories: Record<string, Record<string, Unit>> = {
  length,
  mass,
  temperature,
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
};

type FoundUnit = {
  unit: Unit;
  category: string;
};

function findUnit(unitName: string): FoundUnit | null {
  const normalized = unitName.toLowerCase();

  for (const [category, units] of Object.entries(categories)) {
    for (const unit of Object.values(units)) {
      const nameMatch = unit.names.find((n) => n.toLowerCase() === normalized);
      if (nameMatch) return { unit, category };

      const symbolMatch = unit.symbols.find((s) => s.toLowerCase() === normalized);
      if (symbolMatch) return { unit, category };
    }
  }

  return null;
}

function toUnitInfo(unit: Unit, category: string): UnitInfo {
  return {
    name: unit.names[0],
    names: unit.names,
    symbol: unit.symbols[0] ?? "",
    symbols: unit.symbols,
    description: unit.description,
    system: unit.system,
    precision: unit.precision,
    category,
  };
}

function convert(value: number, fromUnitName: string): Conversion {
  const fromResult = findUnit(fromUnitName);
  if (!fromResult) throw new Error(`Unknown unit: "${fromUnitName}"`);

  return {
    to(toUnitName: string): ConversionResult {
      const toResult = findUnit(toUnitName);
      if (!toResult) throw new Error(`Unknown unit: "${toUnitName}"`);

      if (fromResult.category !== toResult.category) {
        throw new Error(
          `Cannot convert between different categories: ` +
            `"${fromUnitName}" is ${fromResult.category}, ` +
            `"${toUnitName}" is ${toResult.category}`
        );
      }

      const baseValue = fromResult.unit.toBase(value);
      const convertedValue = toResult.unit.fromBase(baseValue);

      return {
        from: {
          value,
          unit: toUnitInfo(fromResult.unit, fromResult.category),
        },
        to: {
          value: convertedValue,
          unit: toUnitInfo(toResult.unit, toResult.category),
        },
      };
    },
  };
}

function getUnit(unitName: string): UnitInfo | null {
  const result = findUnit(unitName);
  if (!result) return null;
  return toUnitInfo(result.unit, result.category);
}

function listUnits(category?: string): UnitInfo[] {
  if (category) {
    const units = categories[category.toLowerCase()];
    if (!units) return [];
    return Object.values(units).map((u) => toUnitInfo(u, category.toLowerCase()));
  }

  const all: UnitInfo[] = [];
  for (const [cat, units] of Object.entries(categories)) {
    for (const unit of Object.values(units)) {
      all.push(toUnitInfo(unit, cat));
    }
  }
  return all;
}

function listCategories(): string[] {
  return Object.keys(categories);
}

export default convert;
export { convert, getUnit, listUnits, listCategories };
export type { Unit, UnitInfo, ConversionResult } from "./types";
