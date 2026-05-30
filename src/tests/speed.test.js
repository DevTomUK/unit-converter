const { convert } = require('../../dist/index.js')

describe('Speed Conversions', () => {
  test('kmh to mps', () => {
    const result = convert(100, 'kmh').to('mps')
    expect(Math.round(result * 100) / 100).toBe(27.78)
  })

  test('mph to kmh', () => {
    const result = convert(60, 'mph').to('kmh')
    expect(Math.round(result * 100) / 100).toBe(96.56)
  })

  test('knots to kmh', () => {
    const result = convert(10, 'knot').to('kmh')
    expect(Math.round(result * 100) / 100).toBe(18.52)
  })

  test('mps to fps', () => {
    const result = convert(10, 'mps').to('fps')
    expect(Math.round(result * 100) / 100).toBe(32.81)
  })

  test('mph to mps', () => {
    const result = convert(60, 'mph').to('mps')
    expect(Math.round(result * 100) / 100).toBe(26.82)
  })

  test('fps to mps', () => {
    const result = convert(30, 'fps').to('mps')
    expect(Math.round(result * 100) / 100).toBe(9.14)
  })
})