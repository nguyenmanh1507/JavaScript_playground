function getData() {
  return ['#dddddd', '#ff5512', '#75d709'];
}

module.exports = function () {
  const palette = getData()

  if (!Array.isArray(palette)) {
    throw new Error('Palette is not an array')
  }

  return palette
}
