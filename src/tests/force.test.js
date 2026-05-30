const { convert } = require('../../dist/index.js')

describe('Force Conversions', () => {
  test('kilonewtons to newtons', () => {
    const result = convert(1, 'kilonewtons').to('newtons')
    expect(result.to.value).toBe(1000)
  })

  test('pounds-force to newtons', () => {
    const result = convert(1, 'pound-force').to('newtons')
    expect(Math.round(result.to.value * 100) / 100).toBe(4.45)
  })

  test('kilogram-force to newtons', () => {
    const result = convert(1, 'kilogram-force').to('newtons')
    expect(Math.round(result.to.value * 100) / 100).toBe(9.81)
  })

  test('dynes to newtons', () => {
    const result = convert(100000, 'dynes').to('newtons')
    expect(result.to.value).toBe(1)
  })

  test('pounds-force to kilogram-force', () => {
    const result = convert(2.205, 'pound-force').to('kilogram-force')
    expect(Math.round(result.to.value * 100) / 100).toBe(1.0)
  })

  test('kilonewtons to pounds-force', () => {
    const result = convert(1, 'kilonewtons').to('pound-force')
    expect(Math.round(result.to.value * 100) / 100).toBe(224.81)
  })
})
