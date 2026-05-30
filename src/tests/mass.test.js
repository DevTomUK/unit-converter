const { convert } = require('../../dist/index.js')

describe('Mass Conversions', () => {
  test('kg to g', () => {
    const result = convert(5, 'kg').to('g')
    expect(result).toBe(5000)
  })

  test('g to kg', () => {
    const result = convert(5000, 'g').to('kg')
    expect(result).toBe(5)
  })

  test('lb to kg', () => {
    const result = convert(1, 'lb').to('kg')
    expect(Math.round(result * 100) / 100).toBe(0.45)
  })

  test('kg to lb', () => {
    const result = convert(0.453592, 'kg').to('lb')
    expect(Math.round(result * 100) / 100).toBe(1.0)
  })

  test('oz to g', () => {
    const result = convert(10, 'oz').to('g')
    expect(Math.round(result)).toBe(283)
  })

  test('mg to g', () => {
    const result = convert(1000, 'mg').to('g')
    expect(result).toBe(1)
  })
})