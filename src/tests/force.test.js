const { convert } = require('../../dist/index.js')

describe('Force Conversions', () => {
  test('kilonewtons to newtons', () => {
    const result = convert(1, 'kilonewtons').to('newtons')
    expect(result).toBe(1000)
  })

  test('pounds-force to newtons', () => {
    const result = convert(1, 'poundsforce').to('newtons')
    expect(Math.round(result * 100) / 100).toBe(4.45)
  })

  test('kilogram-force to newtons', () => {
    const result = convert(1, 'kilogramforce').to('newtons')
    expect(Math.round(result * 100) / 100).toBe(9.81)
  })

  test('dynes to newtons', () => {
    const result = convert(100000, 'dynes').to('newtons')
    expect(result).toBe(1)
  })

  test('pounds-force to kilogram-force', () => {
    const result = convert(2.205, 'poundsforce').to('kilogramforce')
    expect(Math.round(result * 100) / 100).toBe(1.0)
  })

  test('kilonewtons to pounds-force', () => {
    const result = convert(1, 'kilonewtons').to('poundsforce')
    expect(Math.round(result * 100) / 100).toBe(224.81)
  })
})
