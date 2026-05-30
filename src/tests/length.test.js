const { convert } = require("../../dist")

describe('Length Conversions', () => {
  test('miles to km', () => {
    const result = convert.miles(5).to.km()
    expect(Math.round(result * 100) / 100).toBe(8.05)
  })

  test('km to miles', () => {
    const result = convert.km(8.05).to.miles()
    expect(Math.round(result * 100) / 100).toBe(5.0)
  })

  test('feet to cm', () => {
    const result = convert.feet(10).to.cm()
    expect(Math.round(result * 10) / 10).toBe(304.8)
  })

  test('cm to feet', () => {
    const result = convert.cm(304.8).to.feet()
    expect(Math.round(result * 10) / 10).toBe(10.0)
  })

  test('m to km', () => {
    const result = convert.m(1000).to.km()
    expect(result).toBe(1)
  })

  test('inches to cm', () => {
    const result = convert.inches(100).to.cm()
    expect(Math.round(result)).toBe(254)
  })
})