const { convert } = require('../../dist/index.js')

describe('Data Storage Conversions', () => {
  test('kb to bytes', () => {
    const result = convert(1, 'kb').to('b')
    expect(result).toBe(1024)
  })

  test('mb to kb', () => {
    const result = convert(1, 'mb').to('kb')
    expect(result).toBe(1024)
  })

  test('gb to mb', () => {
    const result = convert(1, 'gb').to('mb')
    expect(result).toBe(1024)
  })

  test('tb to gb', () => {
    const result = convert(1, 'tb').to('gb')
    expect(result).toBe(1024)
  })

  test('gb to bytes', () => {
    const result = convert(1, 'gb').to('b')
    expect(result).toBe(1073741824)
  })

  test('pb to tb', () => {
    const result = convert(1, 'pb').to('tb')
    expect(result).toBe(1024)
  })
})
