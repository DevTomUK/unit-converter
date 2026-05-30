const { convert } = require('../../dist/index.js')

describe('Viscosity Conversions', () => {
  test('centipoise to pascal-seconds', () => {
    const result = convert(1, 'centipoise').to('pascal second')
    expect(Math.round(result.to.value * 1000) / 1000).toBe(0.001)
  })

  test('centistokes to stokes', () => {
    const result = convert(100, 'centistokes').to('stokes')
    expect(result.to.value).toBe(1)
  })

  test('poise to pascal-seconds', () => {
    const result = convert(1, 'poise').to('pascal second')
    expect(result.to.value).toBe(0.1)
  })

  test('centipoise to poise', () => {
    const result = convert(100, 'centipoise').to('poise')
    expect(result.to.value).toBe(1)
  })

  test('centistokes to centipoise', () => {
    const result = convert(1, 'centistokes').to('centipoise')
    expect(Math.round(result.to.value * 1000000) / 1000000).toBe(0.001)
  })

  test('stokes to centistokes', () => {
    const result = convert(1, 'stokes').to('centistokes')
    expect(result.to.value).toBe(100)
  })
})
