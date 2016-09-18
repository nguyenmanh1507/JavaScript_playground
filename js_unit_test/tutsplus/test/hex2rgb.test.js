const hex2rgb = require('../lib/hex2rgb')
const assert = require('assert')

describe('hex2rgb', () => {
  it('Should throw an error if the value is not a hex code', (done) => {
      hex2rgb('blue', (err, result) => {
        assert(err)
        done()
      })
  })

  it('Should return a correctly converted rgb value', (done) => {
    hex2rgb('#fff', (err, result) => {
      assert.strictEqual(err, null)
      assert.deepEqual(result, [255, 255, 255])
      done()
    })
  })
})
