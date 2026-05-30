const { convert } = require("../../dist")

describe('Length Conversions', () => {
  test('miles to km', () => {
    const result = convert(5, 'miles').to('km')
    expect(Math.round(result * 100) / 100).toBe(8.05)
  })

  test('km to miles', () => {
    const result = convert(8.05, 'km').to('miles')
    expect(Math.round(result * 100) / 100).toBe(5.0)
  })

  test('feet to cm', () => {
    const result = convert(10, 'feet').to('cm')
    expect(Math.round(result * 10) / 10).toBe(304.8)
  })

  test('cm to feet', () => {
    const result = convert(304.8, 'cm').to('feet')
    expect(Math.round(result * 10) / 10).toBe(10.0)
  })

  test('m to km', () => {
    const result = convert(1000, 'm').to('km')
    expect(result).toBe(1)
  })

  test('inches to cm', () => {
    const result = convert(100, 'inches').to('cm')
    expect(Math.round(result)).toBe(254)
  })
})