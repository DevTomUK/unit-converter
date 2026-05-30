const { convert } = require('../../dist/index.js')

describe('Time Conversions', () => {
  test('minutes to seconds', () => {
    const result = convert(1, 'min').to('s')
    expect(result).toBe(60)
  })

  test('hours to minutes', () => {
    const result = convert(1, 'h').to('min')
    expect(result).toBe(60)
  })

  test('days to hours', () => {
    const result = convert(1, 'd').to('h')
    expect(result).toBe(24)
  })

  test('weeks to days', () => {
    const result = convert(1, 'week').to('d')
    expect(result).toBe(7)
  })

  test('hours to seconds', () => {
    const result = convert(1, 'h').to('s')
    expect(result).toBe(3600)
  })

  test('milliseconds to seconds', () => {
    const result = convert(1000, 'ms').to('s')
    expect(result).toBe(1)
  })
})
