const { convert } = require('../../dist/index.js')

describe('Mass Conversions', () => {
  test('kilograms to grams', () => {
    const result = convert(5, 'kilograms').to('grams')
    expect(result.to.value).toBe(5000)
  })

  test('grams to kilograms', () => {
    const result = convert(5000, 'grams').to('kilograms')
    expect(result.to.value).toBe(5)
  })

  test('pounds to kilograms', () => {
    const result = convert(1, 'pounds').to('kilograms')
    expect(Math.round(result.to.value * 100) / 100).toBe(0.45)
  })

  test('kilograms to pounds', () => {
    const result = convert(0.453592, 'kilograms').to('pounds')
    expect(Math.round(result.to.value * 100) / 100).toBe(1.0)
  })

  test('ounces to grams', () => {
    const result = convert(10, 'ounces').to('grams')
    expect(Math.round(result.to.value)).toBe(283)
  })

  test('milligrams to grams', () => {
    const result = convert(1000, 'milligrams').to('grams')
    expect(result.to.value).toBe(1)
  })
})
