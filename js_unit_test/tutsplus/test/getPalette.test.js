const getPalette = require('../lib/getPalette')
const assert = require('assert')
const fs = require('fs')

const configFile = process.cwd() + 'config.json'

function writeConfig(config, callback) {
  fs.writeFile(configFile, JSON.stringify(config), callback)
}

describe('getPalette', () => {
  var config = {}

  before((done) => {
    fs.readFile(configFile, (err, contents) => {
      config = JSON.parse(contents.toString())
      done()
    })
  })

  afterEach((done) => {
    writeConfig(config, done)
  })

  it ('should throw an error if the result is not an array', (done) => {
    writeConfig({palette: 'string'}, (err) => {
      assert.throws(getPalette, /is not an array/)
      done()
    })
  })

  it ('should return an array with 3 items by default', () => {
    const palette = getPalette()
    assert(Array.isArray(palette), 'did not return array')
    assert.equal(palette.length, 3, 'did not return 3 items')
  })
})
