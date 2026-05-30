const { convert } = require('../../dist/index.js')

describe('Pressure Conversions', () => {
  test('bars to pascals', () => {
    const result = convert(1, 'bars').to('pascals')
    expect(result.to.value).toBe(100000)
  })

  test('psi to bars', () => {
    const result = convert(14.696, 'psi').to('bars')
    expect(Math.round(result.to.value * 100) / 100).toBe(1.01)
  })

  test('atmospheres to kilopascals', () => {
    const result = convert(1, 'atmospheres').to('kilopascals')
    expect(Math.round(result.to.value * 100) / 100).toBe(101.33)
  })

  test('millimeters of mercury to pascals', () => {
    const result = convert(760, 'mmHg').to('pascals')
    expect(Math.round(result.to.value)).toBe(101325)
  })

  test('kilopascals to psi', () => {
    const result = convert(100, 'kilopascals').to('psi')
    expect(Math.round(result.to.value * 100) / 100).toBe(14.5)
  })

  test('bars to atmospheres', () => {
    const result = convert(1, 'bars').to('atmospheres')
    expect(Math.round(result.to.value * 100) / 100).toBe(0.99)
  })
})
