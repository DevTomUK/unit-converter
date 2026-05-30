const { convert } = require('../../dist/index.js')

describe('Length Conversions', () => {
  test('miles to kilometers', () => {
    const result = convert(5, 'miles').to('kilometers')
    expect(Math.round(result.to.value * 100) / 100).toBe(8.05)
  })

  test('kilometers to miles', () => {
    const result = convert(8.05, 'kilometers').to('miles')
    expect(Math.round(result.to.value * 100) / 100).toBe(5.0)
  })

  test('feet to centimeters', () => {
    const result = convert(10, 'feet').to('centimeters')
    expect(Math.round(result.to.value * 10) / 10).toBe(304.8)
  })

  test('centimeters to feet', () => {
    const result = convert(304.8, 'centimeters').to('feet')
    expect(Math.round(result.to.value * 10) / 10).toBe(10.0)
  })

  test('meters to kilometers', () => {
    const result = convert(1000, 'meters').to('kilometers')
    expect(result.to.value).toBe(1)
  })

  test('inches to centimeters', () => {
    const result = convert(100, 'inches').to('centimeters')
    expect(Math.round(result.to.value)).toBe(254)
  })
})
