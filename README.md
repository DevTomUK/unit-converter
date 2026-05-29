# Unit Converter

A simple, extensible unit conversion library. Convert between units with a clean, intuitive API.

## Installation

```bash
npm install unit-converter
```

## Usage

```typescript
import convert from 'unit-converter'

// Length conversions
convert.miles(5).to.km()        // → 8.0467
convert.feet(10).to.cm()        // → 304.8

// Mass conversions
convert.kg(5).to.g()            // → 5000
convert.lb(10).to.kg()          // → 4.53592

// Temperature conversions
convert.c(0).to.f()             // → 32
convert.f(32).to.c()            // → 0
```

## Supported Units

### Length
`m`, `km`, `cm`, `mm`, `miles`, `feet`, `inches`

### Mass
`kg`, `g`, `mg`, `lb`, `oz`

### Temperature
`c` (Celsius), `k` (Kelvin), `f` (Fahrenheit)

## API

All conversions use the same simple pattern:

```typescript
convert.UNIT(value).to.TARGET_UNIT()
convert.UNIT(value).from.TARGET_UNIT()
```

## Contributing

Want to add more unit categories? It's super easy! Check out [CONTRIBUTING.md](./CONTRIBUTING.md) for step-by-step instructions.

## License

ISC