const { convert } = require('../../dist/index.js')

describe('Force Conversions', () => {
  test('kn to n', () => {
    const result = convert(1, 'kn').to('n')
    expect(result).toBe(1000)
  })

  test('lbf to n', () => {
    const result = convert(1, 'lbf').to('n')
    expect(Math.round(result * 100) / 100).toBe(4.45)
  })

  test('kgf to n', () => {
    const result = convert(1, 'kgf').to('n')
    expect(Math.round(result * 100) / 100).toBe(9.81)
  })

  test('dynes to n', () => {
    const result = convert(100000, 'dyn').to('n')
    expect(result).toBe(1)
  })

  test('lbf to kgf', () => {
    const result = convert(2.205, 'lbf').to('kgf')
    expect(Math.round(result * 100) / 100).toBe(1.0)
  })

  test('kn to lbf', () => {
    const result = convert(1, 'kn').to('lbf')
    expect(Math.round(result * 100) / 100).toBe(224.81)
  })
})
