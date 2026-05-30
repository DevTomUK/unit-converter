const { convert } = require('../../dist/index.js')

describe('Frequency Conversions', () => {
  test('kilohertz to hertz', () => {
    const result = convert(1, 'kilohertz').to('hertz')
    expect(result.to.value).toBe(1000)
  })

  test('megahertz to kilohertz', () => {
    const result = convert(1, 'megahertz').to('kilohertz')
    expect(result.to.value).toBe(1000)
  })

  test('gigahertz to megahertz', () => {
    const result = convert(1, 'gigahertz').to('megahertz')
    expect(result.to.value).toBe(1000)
  })

  test('rpm to hertz', () => {
    const result = convert(60, 'rpm').to('hertz')
    expect(result.to.value).toBe(1)
  })

  test('gigahertz to hertz', () => {
    const result = convert(1, 'gigahertz').to('hertz')
    expect(result.to.value).toBe(1000000000)
  })

  test('megahertz to hertz', () => {
    const result = convert(5, 'megahertz').to('hertz')
    expect(result.to.value).toBe(5000000)
  })
})
