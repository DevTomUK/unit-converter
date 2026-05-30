const { convert } = require('../../dist/index.js')

describe('Energy Conversions', () => {
  test('kilojoules to joules', () => {
    const result = convert(1, 'kilojoules').to('joules')
    expect(result).toBe(1000)
  })

  test('calories to joules', () => {
    const result = convert(100, 'calories').to('joules')
    expect(Math.round(result * 100) / 100).toBe(418.4)
  })

  test('btu to kilojoules', () => {
    const result = convert(1, 'btu').to('kilojoules')
    expect(Math.round(result * 100) / 100).toBe(1.06)
  })

  test('watt hours to joules', () => {
    const result = convert(1, 'watthours').to('joules')
    expect(result).toBe(3600)
  })

  test('kilocalories to kilojoules', () => {
    const result = convert(1, 'kilocalories').to('kilojoules')
    expect(Math.round(result * 100) / 100).toBe(4.18)
  })

  test('btu to calories', () => {
    const result = convert(1, 'btu').to('calories')
    expect(Math.round(result * 100) / 100).toBe(252.17)
  })
})
