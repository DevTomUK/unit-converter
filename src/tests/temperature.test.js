const { convert } = require('../../dist/index.js')

describe('Temperature Conversions', () => {
  test('celsius to kelvin', () => {
    const result = convert.c(0).to.k()
    expect(Math.round(result * 100) / 100).toBe(273.15)
  })

  test('kelvin to celsius', () => {
    const result = convert.k(273.15).to.c()
    expect(Math.round(result * 100) / 100).toBe(0)
  })

  test('fahrenheit to celsius', () => {
    const result = convert.f(32).to.c()
    expect(Math.round(result * 100) / 100).toBe(0)
  })

  test('celsius to fahrenheit', () => {
    const result = convert.c(0).to.f()
    expect(Math.round(result * 100) / 100).toBe(32)
  })

  test('fahrenheit to kelvin', () => {
    const result = convert.f(32).to.k()
    expect(Math.round(result * 100) / 100).toBe(273.15)
  })
})