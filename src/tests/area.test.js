const { convert } = require('../../dist/index.js')

describe('Area Conversions', () => {
  test('hectares to m2', () => {
    const result = convert(1, 'hectare').to('m2')
    expect(result).toBe(10000)
  })

  test('acres to m2', () => {
    const result = convert(1, 'acre').to('m2')
    expect(Math.round(result)).toBe(4047)
  })

  test('km2 to m2', () => {
    const result = convert(1, 'km2').to('m2')
    expect(result).toBe(1000000)
  })

  test('sqft to m2', () => {
    const result = convert(100, 'sqft').to('m2')
    expect(Math.round(result * 100) / 100).toBe(9.29)
  })

  test('hectares to acres', () => {
    const result = convert(1, 'hectare').to('acre')
    expect(Math.round(result * 100) / 100).toBe(2.47)
  })

  test('square miles to km2', () => {
    const result = convert(1, 'sqmi').to('km2')
    expect(Math.round(result * 100) / 100).toBe(2.59)
  })
})
