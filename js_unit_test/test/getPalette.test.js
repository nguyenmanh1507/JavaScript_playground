const getPalette = require('../lib/getPalette')
const assert = require('assert')

describe('getPalette', () => {
  it ('should throw an error if the result is not an array', () => {
      assert.throws(getPalette, /is not an array/)
  })

  it ('should return an array with 3 items', () => {
    const palette = getPalette()
    assert(Array.isArray(palette))
    assert.equal(palette.length, 3)
  })
})
