# Unit Converter

A simple, extensible TypeScript unit conversion library. Convert between units with a clean, intuitive API.

## Installation

```bash
npm install unit-converter-js
```

## Quick Start

```typescript
import convert from 'unit-converter-js'

// Length
convert(5, 'miles').to('kilometers')     // → 8.0467
convert(10, 'feet').to('centimeters')   // → 304.8

// Mass
convert(5, 'kilograms').to('grams')     // → 5000
convert(10, 'pounds').to('kilograms')   // → 4.53592

// Temperature
convert(0, 'celsius').to('fahrenheit')  // → 32
convert(32, 'fahrenheit').to('celsius') // → 0

// Volume
convert(1, 'gallons').to('liters')      // → 3.78541

// Speed
convert(100, 'kilometersperhour').to('meterspersecond') // → 27.78
```

## API

All conversions follow the same simple pattern:

```typescript
convert(value, unitName).to(targetUnitName)
```

**Examples:**
```typescript
convert(10, 'miles').to('kilometers')           // 16.0934
convert(5, 'kilograms').to('pounds')            // 11.0231
convert(100, 'kilometersperhour').to('meterspersecond')       // 27.78
convert(1, 'gallons').to('liters')              // 3.78541
```

## Supported Units

### Length
`meters` • `kilometers` • `centimeters` • `millimeters` • `miles` • `feet` • `inches`

Symbols: `m` • `km` • `cm` • `mm` • `mi` • `ft` • `in`

### Mass
`kilograms` • `grams` • `milligrams` • `pounds` • `ounces`

Symbols: `kg` • `g` • `mg` • `lb`, `lbs` • `oz`

### Temperature
`celsius` • `kelvin` • `fahrenheit`

Symbols: `°C`, `C` • `K` • `°F`, `F`

### Volume
`liters` • `milliliters` • `gallons` • `cups` • `pints` • `fluidounces`

Symbols: `l`, `L` • `ml`, `mL` • `gal` • `cup` • `pt` • `fl oz`, `floz`

### Area
`squaremeters` • `squarekilometers` • `hectares` • `acres` • `squarefeet` • `squaremiles`

Symbols: `m²`, `m2` • `km²`, `km2` • `ha` • `ac` • `ft²`, `ft2` • `mi²`, `mi2`

### Time
`seconds` • `milliseconds` • `minutes` • `hours` • `days` • `weeks` • `years`

Symbols: `s`, `sec` • `ms` • `min` • `h`, `hr` • `d` • `wk` • `yr`, `y`

### Speed
`meterspersecond` • `kilometersperhour` • `milesperhour` • `knots` • `feetpersecond`

Symbols: `m/s`, `mps` • `km/h`, `kmh` • `mph` • `kt` • `ft/s`, `fps`

### Pressure
`pascals` • `bars` • `psi` • `atmospheres` • `millimetersmercury` • `kilopascals`

Symbols: `Pa` • `bar` • `psi` • `atm` • `mmHg` • `kPa`

### Data Storage
`bytes` • `kilobytes` • `megabytes` • `gigabytes` • `terabytes` • `petabytes`

Symbols: `B` • `KB` • `MB` • `GB` • `TB` • `PB`

### Energy
`joules` • `kilojoules` • `calories` • `kilocalories` • `btu` • `watthours`

Symbols: `J` • `kJ` • `cal` • `kcal` • `BTU`, `Btu` • `Wh`

### Power
`watts` • `kilowatts` • `megawatts` • `horsepower` • `btuperhour`

Symbols: `W` • `kW` • `MW` • `hp` • `BTU/h`

### Force
`newtons` • `kilonewtons` • `dynes` • `poundsforce` • `kilogramforce`

Symbols: `N` • `kN` • `dyn` • `lbf` • `kgf`

### Angle
`degrees` • `radians` • `gradians` • `arcminutes` • `arcseconds`

Symbols: `°`, `deg` • `rad` • `grad` • `'` • `"`

### Frequency
`hertz` • `kilohertz` • `megahertz` • `gigahertz` • `rpm`

Symbols: `Hz` • `kHz` • `MHz` • `GHz` • `rpm`

### Density
`kilogramspermetercubed` • `gramspercentimetercubed` • `poundsperfoot` • `poundspergallon`

Symbols: `kg/m³`, `kg/m3` • `g/cm³`, `g/cm3` • `lb/ft³`, `lb/ft3` • `lb/gal`

### Illuminance
`lux` • `footcandles` • `lumenspermetersquared`

Symbols: `lx` • `fc` • `lm/m²`, `lm/m2`

### Viscosity
`centistokes` • `stokes` • `centipoise` • `poise` • `pascalseconds`

Symbols: `cSt` • `St` • `cP` • `P` • `Pa·s`, `Pas`

### Concentration
`molarity` • `ppm` • `ppb` • `percent` • `ppt`

Symbols: `M` • `ppm` • `ppb` • `%` • `ppt`

## Contributing

Want to add more units or categories? Contributions are welcome!

See [CONTRIBUTING.md](./CONTRIBUTING.md) for:
- How to add a new unit category
- How to add units to existing categories  
- Testing requirements
- Code guidelines

## License

ISC