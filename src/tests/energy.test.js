const { convert } = require('../../dist/index.js')

describe('Energy Conversions', () => {
  test('kj to j', () => {
    const result = convert(1, 'kj').to('j')
    expect(result).toBe(1000)
  })

  test('calories to joules', () => {
    const result = convert(100, 'cal').to('j')
    expect(Math.round(result * 100) / 100).toBe(418.4)
  })

  test('btu to kj', () => {
    const result = convert(1, 'btu').to('kj')
    expect(Math.round(result * 100) / 100).toBe(1.06)
  })

  test('wh to j', () => {
    const result = convert(1, 'wh').to('j')
    expect(result).toBe(3600)
  })

  test('kcal to kj', () => {
    const result = convert(1, 'kcal').to('kj')
    expect(Math.round(result * 100) / 100).toBe(4.18)
  })

  test('btu to cal', () => {
    const result = convert(1, 'btu').to('cal')
    expect(Math.round(result * 100) / 100).toBe(252.17)
  })
})
