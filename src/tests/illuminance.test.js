const { convert } = require('../../dist/index.js')

describe('Illuminance Conversions', () => {
  test('foot-candles to lux', () => {
    const result = convert(1, 'foot-candle').to('lux')
    expect(Math.round(result.to.value * 100) / 100).toBe(10.76)
  })

  test('lux to foot-candles', () => {
    const result = convert(10.764, 'lux').to('foot-candle')
    expect(Math.round(result.to.value * 100) / 100).toBe(1.0)
  })

  test('lux to lumens per square meter', () => {
    const result = convert(100, 'lux').to('lumens per square meter')
    expect(result.to.value).toBe(100)
  })

  test('foot-candles to lumens per square meter', () => {
    const result = convert(1, 'foot-candle').to('lumens per square meter')
    expect(Math.round(result.to.value * 100) / 100).toBe(10.76)
  })

  test('lumens per square meter to foot-candles', () => {
    const result = convert(100, 'lumens per square meter').to('foot-candle')
    expect(Math.round(result.to.value * 100) / 100).toBe(9.29)
  })

  test('lux to lux (base)', () => {
    const result = convert(500, 'lux').to('lux')
    expect(result.to.value).toBe(500)
  })
})
