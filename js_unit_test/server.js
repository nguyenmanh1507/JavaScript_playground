const express = require('express')
const app = express()

app.set('view engine', 'jade')

app.get('/', (req, res) => {
  res.render('index', {palette: ['#cc7790', '#ff5512', '#75d709']})
})

app.listen(3333)

console.log('Listening at http://127.0.0.1:3333')
