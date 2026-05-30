const { convert } = require('../../dist/index.js')

describe('Concentration Conversions', () => {
  test('ppm to ppb', () => {
    const result = convert(1, 'ppm').to('ppb')
    expect(result).toBe(1000)
  })

  test('ppb to ppm', () => {
    const result = convert(1000, 'ppb').to('ppm')
    expect(result).toBe(1)
  })

  test('percent to ppm', () => {
    const result = convert(0.0001, 'percent').to('ppm')
    expect(result).toBe(1)
  })

  test('ppt to ppm', () => {
    const result = convert(1, 'ppt').to('ppm')
    expect(result).toBe(1000)
  })

  test('percent to percent (base)', () => {
    const result = convert(50, 'percent').to('percent')
    expect(result).toBe(50)
  })

  test('ppm to percent', () => {
    const result = convert(10000, 'ppm').to('percent')
    expect(result).toBe(1)
  })
})
