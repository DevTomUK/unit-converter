const { convert } = require('../../dist/index.js')

describe('Power Conversions', () => {
  test('kilowatts to watts', () => {
    const result = convert(1, 'kilowatts').to('watts')
    expect(result.to.value).toBe(1000)
  })

  test('horsepower to watts', () => {
    const result = convert(1, 'horsepower').to('watts')
    expect(result.to.value).toBe(746)
  })

  test('megawatts to kilowatts', () => {
    const result = convert(1, 'megawatts').to('kilowatts')
    expect(result.to.value).toBe(1000)
  })

  test('btu per hour to watts', () => {
    const result = convert(1000, 'BTU per hour').to('watts')
    expect(Math.round(result.to.value * 100) / 100).toBe(293.07)
  })

  test('horsepower to kilowatts', () => {
    const result = convert(1, 'horsepower').to('kilowatts')
    expect(Math.round(result.to.value * 100) / 100).toBe(0.75)
  })

  test('megawatts to watts', () => {
    const result = convert(1, 'megawatts').to('watts')
    expect(result.to.value).toBe(1000000)
  })
})
