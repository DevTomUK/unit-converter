const { convert } = require('../../dist/index.js')

describe('Cross-category guard', () => {
  test('throws when converting between different categories', () => {
    expect(() => convert(5, 'meters').to('kilograms')).toThrow(
      /different categories/
    )
  })

  test('error names both categories', () => {
    expect(() => convert(1, 'celsius').to('meters')).toThrow(/temperature/)
  })

  test('still allows conversion within the same category', () => {
    const result = convert(1, 'meters').to('centimeters')
    expect(result.to.value).toBe(100)
  })

  test('works across name and symbol lookups in the same category', () => {
    const result = convert(1, 'kg').to('grams')
    expect(result.to.value).toBe(1000)
  })
})
