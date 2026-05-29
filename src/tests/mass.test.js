const convert = require('../../dist/index.js').default

describe('Mass Conversions', () => {
  test('kg to g', () => {
    const result = convert.kg(5).to.g()
    expect(result).toBe(5000)
  })

  test('g to kg', () => {
    const result = convert.g(5000).to.kg()
    expect(result).toBe(5)
  })

  test('lb to kg', () => {
    const result = convert.lb(1).to.kg()
    expect(Math.round(result * 100) / 100).toBe(0.45)
  })

  test('kg to lb', () => {
    const result = convert.kg(0.453592).to.lb()
    expect(Math.round(result * 100) / 100).toBe(1.0)
  })

  test('oz to g', () => {
    const result = convert.oz(10).to.g()
    expect(Math.round(result)).toBe(283)
  })

  test('mg to g', () => {
    const result = convert.mg(1000).to.g()
    expect(result).toBe(1)
  })
})