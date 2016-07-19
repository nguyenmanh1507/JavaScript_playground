const express = require('express')
const app = express()

app.use(express.static(__dirname))

// set template engine
app.use('view engine', 'pug')

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.listen(8080)
console.log('Server has started!')
