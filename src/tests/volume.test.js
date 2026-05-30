const { convert } = require('../../dist/index.js')

describe('Volume Conversions', () => {
  test('liters to ml', () => {
    const result = convert(1, 'l').to('ml')
    expect(result).toBe(1000)
  })

  test('ml to liters', () => {
    const result = convert(1000, 'ml').to('l')
    expect(result).toBe(1)
  })

  test('gallons to liters', () => {
    const result = convert(1, 'gallon').to('l')
    expect(Math.round(result * 100) / 100).toBe(3.79)
  })

  test('liters to gallons', () => {
    const result = convert(3.78541, 'l').to('gallon')
    expect(Math.round(result * 100) / 100).toBe(1.0)
  })

  test('cups to ml', () => {
    const result = convert(1, 'cup').to('ml')
    expect(Math.round(result)).toBe(237)
  })

  test('pints to liters', () => {
    const result = convert(2, 'pint').to('l')
    expect(Math.round(result * 100) / 100).toBe(0.95)
  })
})
