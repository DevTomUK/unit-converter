const { convert } = require('../../dist/index.js')

describe('Time Conversions', () => {
  test('minutes to seconds', () => {
    const result = convert(1, 'minutes').to('seconds')
    expect(result).toBe(60)
  })

  test('hours to minutes', () => {
    const result = convert(1, 'hours').to('minutes')
    expect(result).toBe(60)
  })

  test('days to hours', () => {
    const result = convert(1, 'days').to('hours')
    expect(result).toBe(24)
  })

  test('weeks to days', () => {
    const result = convert(1, 'weeks').to('days')
    expect(result).toBe(7)
  })

  test('hours to seconds', () => {
    const result = convert(1, 'hours').to('seconds')
    expect(result).toBe(3600)
  })

  test('milliseconds to seconds', () => {
    const result = convert(1000, 'milliseconds').to('seconds')
    expect(result).toBe(1)
  })
})
