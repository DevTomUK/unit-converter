const { convert } = require('../../dist/index.js')

describe('Area Conversions', () => {
  test('hectares to square meters', () => {
    const result = convert(1, 'hectares').to('squaremeters')
    expect(result).toBe(10000)
  })

  test('acres to square meters', () => {
    const result = convert(1, 'acres').to('squaremeters')
    expect(Math.round(result)).toBe(4047)
  })

  test('square kilometers to square meters', () => {
    const result = convert(1, 'squarekilometers').to('squaremeters')
    expect(result).toBe(1000000)
  })

  test('square feet to square meters', () => {
    const result = convert(100, 'squarefeet').to('squaremeters')
    expect(Math.round(result * 100) / 100).toBe(9.29)
  })

  test('hectares to acres', () => {
    const result = convert(1, 'hectares').to('acres')
    expect(Math.round(result * 100) / 100).toBe(2.47)
  })

  test('square miles to square kilometers', () => {
    const result = convert(1, 'squaremiles').to('squarekilometers')
    expect(Math.round(result * 100) / 100).toBe(2.59)
  })
})
