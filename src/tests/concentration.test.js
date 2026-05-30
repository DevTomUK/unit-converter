const { convert } = require('../../dist/index.js')

describe('Concentration Conversions', () => {
  test('parts per million to parts per billion', () => {
    const result = convert(1, 'ppm').to('ppb')
    expect(result.to.value).toBe(1000)
  })

  test('parts per billion to parts per million', () => {
    const result = convert(1000, 'ppb').to('ppm')
    expect(result.to.value).toBe(1)
  })

  test('percent to parts per million', () => {
    const result = convert(0.0001, 'percent').to('ppm')
    expect(result.to.value).toBe(1)
  })

  test('parts per thousand to parts per million', () => {
    const result = convert(1, 'ppt').to('ppm')
    expect(result.to.value).toBe(1000)
  })

  test('percent to percent (base)', () => {
    const result = convert(50, 'percent').to('percent')
    expect(result.to.value).toBe(50)
  })

  test('parts per million to percent', () => {
    const result = convert(10000, 'ppm').to('percent')
    expect(result.to.value).toBe(1)
  })
})
