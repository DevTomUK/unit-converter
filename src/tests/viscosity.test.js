const { convert } = require('../../dist/index.js')

describe('Viscosity Conversions', () => {
  test('centipoise to pascal-seconds', () => {
    const result = convert(1, 'cps').to('pas')
    expect(Math.round(result * 1000) / 1000).toBe(0.001)
  })

  test('centistokes to stokes', () => {
    const result = convert(100, 'cst').to('st')
    expect(result).toBe(1)
  })

  test('poise to pascal-seconds', () => {
    const result = convert(1, 'p').to('pas')
    expect(result).toBe(0.1)
  })

  test('centipoise to poise', () => {
    const result = convert(100, 'cps').to('p')
    expect(result).toBe(1)
  })

  test('centistokes to centipoise', () => {
    const result = convert(1, 'cst').to('cps')
    expect(Math.round(result * 1000000) / 1000000).toBe(0.001)
  })

  test('stokes to centistokes', () => {
    const result = convert(1, 'st').to('cst')
    expect(result).toBe(100)
  })
})
