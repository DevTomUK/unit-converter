const { convert } = require('../../dist/index.js')

describe('Density Conversions', () => {
  test('grams per cubic centimeter to kilograms per cubic meter', () => {
    const result = convert(1, 'grams per cubic centimeter').to('kilograms per cubic meter')
    expect(result.to.value).toBe(1000)
  })

  test('kilograms per cubic meter to grams per cubic centimeter', () => {
    const result = convert(1000, 'kilograms per cubic meter').to('grams per cubic centimeter')
    expect(result.to.value).toBe(1)
  })

  test('pounds per cubic foot to kilograms per cubic meter', () => {
    const result = convert(1, 'pounds per cubic foot').to('kilograms per cubic meter')
    expect(Math.round(result.to.value * 100) / 100).toBe(16.02)
  })

  test('pounds per gallon to kilograms per cubic meter', () => {
    const result = convert(1, 'pounds per gallon').to('kilograms per cubic meter')
    expect(Math.round(result.to.value * 100) / 100).toBe(119.83)
  })

  test('grams per cubic centimeter to pounds per cubic foot', () => {
    const result = convert(1, 'grams per cubic centimeter').to('pounds per cubic foot')
    expect(Math.round(result.to.value * 100) / 100).toBe(62.43)
  })

  test('pounds per gallon to pounds per cubic foot', () => {
    const result = convert(8.336, 'pounds per gallon').to('pounds per cubic foot')
    expect(Math.round(result.to.value * 100) / 100).toBe(62.36)
  })
})
