const express = require('express')
const app = express()

app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.listen(8080)
console.log('Server has started!')
