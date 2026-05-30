const { convert } = require('../../dist/index.js')

describe('Angle Conversions', () => {
  test('degrees to radians', () => {
    const result = convert(180, 'deg').to('rad')
    expect(Math.round(result * 100) / 100).toBe(3.14)
  })

  test('radians to degrees', () => {
    const result = convert(Math.PI, 'rad').to('deg')
    expect(Math.round(result)).toBe(180)
  })

  test('degrees to gradians', () => {
    const result = convert(90, 'deg').to('grad')
    expect(result).toBe(100)
  })

  test('gradians to degrees', () => {
    const result = convert(100, 'grad').to('deg')
    expect(result).toBeCloseTo(90)
  })

  test('degrees to arcminutes', () => {
    const result = convert(1, 'deg').to('arcmin')
    expect(result).toBeCloseTo(60)
  })

  test('arcminutes to arcseconds', () => {
    const result = convert(1, 'arcmin').to('arcsec')
    expect(result).toBeCloseTo(60)
  })
})