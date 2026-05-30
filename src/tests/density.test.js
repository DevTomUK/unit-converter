const { convert } = require('../../dist/index.js')

describe('Density Conversions', () => {
  test('grams per cubic centimeter to kilograms per cubic meter', () => {
    const result = convert(1, 'gramspercentimetercubed').to('kilogramspermetercubed')
    expect(result).toBe(1000)
  })

  test('kilograms per cubic meter to grams per cubic centimeter', () => {
    const result = convert(1000, 'kilogramspermetercubed').to('gramspercentimetercubed')
    expect(result).toBe(1)
  })

  test('pounds per cubic foot to kilograms per cubic meter', () => {
    const result = convert(1, 'poundsperfoot').to('kilogramspermetercubed')
    expect(Math.round(result * 100) / 100).toBe(16.02)
  })

  test('pounds per gallon to kilograms per cubic meter', () => {
    const result = convert(1, 'poundspergallon').to('kilogramspermetercubed')
    expect(Math.round(result * 100) / 100).toBe(119.83)
  })

  test('grams per cubic centimeter to pounds per cubic foot', () => {
    const result = convert(1, 'gramspercentimetercubed').to('poundsperfoot')
    expect(Math.round(result * 100) / 100).toBe(62.43)
  })

  test('pounds per gallon to pounds per cubic foot', () => {
    const result = convert(8.336, 'poundspergallon').to('poundsperfoot')
    expect(Math.round(result * 100) / 100).toBe(62.36)
  })
})
