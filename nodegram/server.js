const express = require('express')
const app = express()
const ig = require('instagram-node').instagram()

/*
 * CONFIGURE THE APP
 */
// Tell node where to look for site resources
app.use(express.static(__dirname + '/public'))

// set template engine
app.set('view engine', 'pug')

// configure instagram app with client_id, client_secret, and access_token
ig.use({
  access_token: '1717996661.1677ed0.feb24548844b4da48f2d3c9ccf1f67c2'
})

/*
 * SET THE ROUTES
 */
// homepage route - our profile's images
app.get('/', (req, res) => {
  // use the instagram package to get our profile's media
  ig.user_self_media_recent((err, medias, pagination, remaining, linit) => {
    // render the home page and pass in the our profile's images
    res.render('pages/index', {grams: medias})
  })
})

app.listen(8080)
console.log('Server has started!')
