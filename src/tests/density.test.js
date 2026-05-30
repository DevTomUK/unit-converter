const { convert } = require('../../dist/index.js')

describe('Density Conversions', () => {
  test('g/cm3 to kg/m3', () => {
    const result = convert(1, 'gcm3').to('kgm3')
    expect(result).toBe(1000)
  })

  test('kg/m3 to g/cm3', () => {
    const result = convert(1000, 'kgm3').to('gcm3')
    expect(result).toBe(1)
  })

  test('lbft3 to kg/m3', () => {
    const result = convert(1, 'lbft3').to('kgm3')
    expect(Math.round(result * 100) / 100).toBe(16.02)
  })

  test('lbgal to kg/m3', () => {
    const result = convert(1, 'lbgal').to('kgm3')
    expect(Math.round(result * 100) / 100).toBe(119.83)
  })

  test('g/cm3 to lbft3', () => {
    const result = convert(1, 'gcm3').to('lbft3')
    expect(Math.round(result * 100) / 100).toBe(62.43)
  })

  test('lbgal to lbft3', () => {
    const result = convert(8.336, 'lbgal').to('lbft3')
    expect(Math.round(result * 100) / 100).toBe(62.36)
  })
})
