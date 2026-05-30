const { convert } = require('../../dist/index.js')

describe('Temperature Conversions', () => {
  test('celsius to kelvin', () => {
    const result = convert(0, 'c').to('k')
    expect(Math.round(result * 100) / 100).toBe(273.15)
  })

  test('kelvin to celsius', () => {
    const result = convert(273.15, 'k').to('c')
    expect(Math.round(result * 100) / 100).toBe(0)
  })

  test('fahrenheit to celsius', () => {
    const result = convert(32, 'f').to('c')
    expect(Math.round(result * 100) / 100).toBe(0)
  })

  test('celsius to fahrenheit', () => {
    const result = convert(0, 'c').to('f')
    expect(Math.round(result * 100) / 100).toBe(32)
  })

  test('fahrenheit to kelvin', () => {
    const result = convert(32, 'f').to('k')
    expect(Math.round(result * 100) / 100).toBe(273.15)
  })
})