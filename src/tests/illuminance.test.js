const { convert } = require('../../dist/index.js')

describe('Illuminance Conversions', () => {
  test('foot-candles to lux', () => {
    const result = convert(1, 'fc').to('lux')
    expect(Math.round(result * 100) / 100).toBe(10.76)
  })

  test('lux to foot-candles', () => {
    const result = convert(10.764, 'lux').to('fc')
    expect(Math.round(result * 100) / 100).toBe(1.0)
  })

  test('lux to lm/m2', () => {
    const result = convert(100, 'lux').to('lmm2')
    expect(result).toBe(100)
  })

  test('foot-candles to lm/m2', () => {
    const result = convert(1, 'fc').to('lmm2')
    expect(Math.round(result * 100) / 100).toBe(10.76)
  })

  test('lm/m2 to foot-candles', () => {
    const result = convert(100, 'lmm2').to('fc')
    expect(Math.round(result * 100) / 100).toBe(9.29)
  })

  test('lux to lux (base)', () => {
    const result = convert(500, 'lux').to('lux')
    expect(result).toBe(500)
  })
})
