const { convert } = require('../../dist/index.js')

describe('Frequency Conversions', () => {
  test('khz to hz', () => {
    const result = convert(1, 'khz').to('hz')
    expect(result).toBe(1000)
  })

  test('mhz to khz', () => {
    const result = convert(1, 'mhz').to('khz')
    expect(result).toBe(1000)
  })

  test('ghz to mhz', () => {
    const result = convert(1, 'ghz').to('mhz')
    expect(result).toBe(1000)
  })

  test('rpm to hz', () => {
    const result = convert(60, 'rpm').to('hz')
    expect(result).toBe(1)
  })

  test('ghz to hz', () => {
    const result = convert(1, 'ghz').to('hz')
    expect(result).toBe(1000000000)
  })

  test('mhz to hz', () => {
    const result = convert(5, 'mhz').to('hz')
    expect(result).toBe(5000000)
  })
})
