const { convert } = require('../../dist/index.js')

describe('Temperature Conversions', () => {
  test('celsius to kelvin', () => {
    const result = convert(0, 'celsius').to('kelvin')
    expect(Math.round(result.to.value * 100) / 100).toBe(273.15)
  })

  test('kelvin to celsius', () => {
    const result = convert(273.15, 'kelvin').to('celsius')
    expect(Math.round(result.to.value * 100) / 100).toBe(0)
  })

  test('fahrenheit to celsius', () => {
    const result = convert(32, 'fahrenheit').to('celsius')
    expect(Math.round(result.to.value * 100) / 100).toBe(0)
  })

  test('celsius to fahrenheit', () => {
    const result = convert(0, 'celsius').to('fahrenheit')
    expect(Math.round(result.to.value * 100) / 100).toBe(32)
  })

  test('fahrenheit to kelvin', () => {
    const result = convert(32, 'fahrenheit').to('kelvin')
    expect(Math.round(result.to.value * 100) / 100).toBe(273.15)
  })
})
