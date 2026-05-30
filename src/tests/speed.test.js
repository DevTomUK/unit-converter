const { convert } = require('../../dist/index.js')

describe('Speed Conversions', () => {
  test('kilometers per hour to meters per second', () => {
    const result = convert(100, 'kilometersperhour').to('meterspersecond')
    expect(Math.round(result * 100) / 100).toBe(27.78)
  })

  test('miles per hour to kilometers per hour', () => {
    const result = convert(60, 'milesperhour').to('kilometersperhour')
    expect(Math.round(result * 100) / 100).toBe(96.56)
  })

  test('knots to kilometers per hour', () => {
    const result = convert(10, 'knots').to('kilometersperhour')
    expect(Math.round(result * 100) / 100).toBe(18.52)
  })

  test('meters per second to feet per second', () => {
    const result = convert(10, 'meterspersecond').to('feetpersecond')
    expect(Math.round(result * 100) / 100).toBe(32.81)
  })

  test('miles per hour to meters per second', () => {
    const result = convert(60, 'milesperhour').to('meterspersecond')
    expect(Math.round(result * 100) / 100).toBe(26.82)
  })

  test('feet per second to meters per second', () => {
    const result = convert(30, 'feetpersecond').to('meterspersecond')
    expect(Math.round(result * 100) / 100).toBe(9.14)
  })
})
