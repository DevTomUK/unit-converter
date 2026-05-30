const { convert } = require('../../dist/index.js')

describe('Power Conversions', () => {
  test('kw to w', () => {
    const result = convert(1, 'kw').to('w')
    expect(result).toBe(1000)
  })

  test('hp to w', () => {
    const result = convert(1, 'hp').to('w')
    expect(result).toBe(746)
  })

  test('mw to kw', () => {
    const result = convert(1, 'mw').to('kw')
    expect(result).toBe(1000)
  })

  test('btuh to w', () => {
    const result = convert(1000, 'btuh').to('w')
    expect(Math.round(result * 100) / 100).toBe(293.07)
  })

  test('hp to kw', () => {
    const result = convert(1, 'hp').to('kw')
    expect(Math.round(result * 100) / 100).toBe(0.75)
  })

  test('mw to w', () => {
    const result = convert(1, 'mw').to('w')
    expect(result).toBe(1000000)
  })
})
