const { convert } = require('../../dist/index.js')

describe('Area Conversions', () => {
  test('hectares to square meters', () => {
    const result = convert(1, 'hectares').to('square meters')
    expect(result.to.value).toBe(10000)
  })

  test('acres to square meters', () => {
    const result = convert(1, 'acres').to('square meters')
    expect(Math.round(result.to.value)).toBe(4047)
  })

  test('square kilometers to square meters', () => {
    const result = convert(1, 'square kilometers').to('square meters')
    expect(result.to.value).toBe(1000000)
  })

  test('square feet to square meters', () => {
    const result = convert(100, 'square feet').to('square meters')
    expect(Math.round(result.to.value * 100) / 100).toBe(9.29)
  })

  test('hectares to acres', () => {
    const result = convert(1, 'hectares').to('acres')
    expect(Math.round(result.to.value * 100) / 100).toBe(2.47)
  })

  test('square miles to square kilometers', () => {
    const result = convert(1, 'square miles').to('square kilometers')
    expect(Math.round(result.to.value * 100) / 100).toBe(2.59)
  })
})
