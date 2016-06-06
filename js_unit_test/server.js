const express = require('express')
const app = express()
const getPalette = require('./lib/getPalette')

app.set('view engine', 'jade')

app.get('/', (req, res) => {
  res.render('index', {palette: getPalette()})
})

app.listen(3333)

console.log('Listening at http://127.0.0.1:3333')
