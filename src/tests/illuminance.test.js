const { convert } = require('../../dist/index.js')

describe('Illuminance Conversions', () => {
  test('foot-candles to lux', () => {
    const result = convert(1, 'footcandles').to('lux')
    expect(Math.round(result * 100) / 100).toBe(10.76)
  })

  test('lux to foot-candles', () => {
    const result = convert(10.764, 'lux').to('footcandles')
    expect(Math.round(result * 100) / 100).toBe(1.0)
  })

  test('lux to lumens per square meter', () => {
    const result = convert(100, 'lux').to('lumenspermetersquared')
    expect(result).toBe(100)
  })

  test('foot-candles to lumens per square meter', () => {
    const result = convert(1, 'footcandles').to('lumenspermetersquared')
    expect(Math.round(result * 100) / 100).toBe(10.76)
  })

  test('lumens per square meter to foot-candles', () => {
    const result = convert(100, 'lumenspermetersquared').to('footcandles')
    expect(Math.round(result * 100) / 100).toBe(9.29)
  })

  test('lux to lux (base)', () => {
    const result = convert(500, 'lux').to('lux')
    expect(result).toBe(500)
  })
})
