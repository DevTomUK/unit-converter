# Unit Converter

A simple, extensible TypeScript unit conversion library. Convert between units with a clean, intuitive API.

## Installation

```bash
npm install unit-converter
```

## Quick Start

```typescript
import convert from 'unit-converter'

// Length
convert.miles(5).to.km()        // → 8.0467
convert.feet(10).to.cm()        // → 304.8

// Mass
convert.kg(5).to.g()            // → 5000
convert.lb(10).to.kg()          // → 4.53592

// Temperature
convert.c(0).to.f()             // → 32
convert.f(32).to.c()            // → 0
```

## Supported Units

### Length
`m` • `km` • `cm` • `mm` • `miles` • `feet` • `inches`

### Mass
`kg` • `g` • `mg` • `lb` • `oz`

### Temperature
`c` (Celsius) • `k` (Kelvin) • `f` (Fahrenheit)

## API Reference

All conversions follow the same pattern:

```typescript
convert.UNIT(value).to.TARGET_UNIT()      // Convert to another unit
convert.UNIT(value).from.TARGET_UNIT()    // Reverse conversion
```

**Example:**
```typescript
convert.miles(10).to.km()           // 16.0934
convert.km(16.0934).from.miles()    // 10
```

## Contributing

Want to add more units or categories? Contributions are welcome! 

See [CONTRIBUTING.md](./CONTRIBUTING.md) for:
- How to add a new unit category
- How to add units to existing categories
- Testing requirements
- Code guidelines

## License

ISC