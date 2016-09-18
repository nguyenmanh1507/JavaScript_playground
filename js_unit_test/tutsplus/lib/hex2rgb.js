'use strict'

module.exports = function(hex, callback) {
  setTimeout(function() {
    if ((/^#/).test(hex)) {
      hex = hex.slice(1)
    }

    if (hex.length !== 3 && hex.length !== 6) {
      callback(new Error('Invalid hexadecimal string'))
    }

    let nums = hex.split('')

    if (nums.length === 3) {
      nums = [nums[0], nums[0], nums[1], nums[1], nums[2], nums[2]]
    }

    const r = parseInt([nums[0], nums[1]].join(''), 16)
    const g = parseInt([nums[4], nums[5]].join(''), 16)
    const b = parseInt([nums[2], nums[3]].join(''), 16)

    callback(null, [r, g, b])
  }, 500)
}
