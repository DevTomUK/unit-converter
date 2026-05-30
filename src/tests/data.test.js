const { convert } = require('../../dist/index.js')

describe('Data Storage Conversions', () => {
  test('kilobytes to bytes', () => {
    const result = convert(1, 'kilobytes').to('bytes')
    expect(result.to.value).toBe(1024)
  })

  test('megabytes to kilobytes', () => {
    const result = convert(1, 'megabytes').to('kilobytes')
    expect(result.to.value).toBe(1024)
  })

  test('gigabytes to megabytes', () => {
    const result = convert(1, 'gigabytes').to('megabytes')
    expect(result.to.value).toBe(1024)
  })

  test('terabytes to gigabytes', () => {
    const result = convert(1, 'terabytes').to('gigabytes')
    expect(result.to.value).toBe(1024)
  })

  test('gigabytes to bytes', () => {
    const result = convert(1, 'gigabytes').to('bytes')
    expect(result.to.value).toBe(1073741824)
  })

  test('petabytes to terabytes', () => {
    const result = convert(1, 'petabytes').to('terabytes')
    expect(result.to.value).toBe(1024)
  })
})
