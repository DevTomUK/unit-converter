const { convert } = require('../../dist/index.js')

describe('Pressure Conversions', () => {
  test('bar to pa', () => {
    const result = convert(1, 'bar').to('pa')
    expect(result).toBe(100000)
  })

  test('psi to bar', () => {
    const result = convert(14.696, 'psi').to('bar')
    expect(Math.round(result * 100) / 100).toBe(1.01)
  })

  test('atm to kpa', () => {
    const result = convert(1, 'atm').to('kpa')
    expect(Math.round(result * 100) / 100).toBe(101.33)
  })

  test('mmhg to pa', () => {
    const result = convert(760, 'mmhg').to('pa')
    expect(Math.round(result)).toBe(101325)
  })

  test('kpa to psi', () => {
    const result = convert(100, 'kpa').to('psi')
    expect(Math.round(result * 100) / 100).toBe(14.5)
  })

  test('bar to atm', () => {
    const result = convert(1, 'bar').to('atm')
    expect(Math.round(result * 100) / 100).toBe(0.99)
  })
})
