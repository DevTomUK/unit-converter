const { convert } = require('../dist/index.js')

describe('Angle Conversions', () => {
  test('degrees to radians', () => {
    const result = convert(180, 'degrees').to('radians')
    expect(Math.round(result.to.value * 100) / 100).toBe(3.14)
  })

  test('radians to degrees', () => {
    const result = convert(Math.PI, 'radians').to('degrees')
    expect(Math.round(result.to.value)).toBe(180)
  })

  test('degrees to gradians', () => {
    const result = convert(90, 'degrees').to('gradians')
    expect(result.to.value).toBe(100)
  })

  test('gradians to degrees', () => {
    const result = convert(100, 'gradians').to('degrees')
    expect(result.to.value).toBe(90)
  })

  test('degrees to arcminutes', () => {
    const result = convert(1, 'degrees').to('arcminutes')
    expect(result.to.value).toBe(60)
  })

  test('arcminutes to arcseconds', () => {
    const result = convert(1, 'arcminutes').to('arcseconds')
    expect(result.to.value).toBe(60)
  })
})
