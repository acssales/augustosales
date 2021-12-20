const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 8080

express()
  .use(express.static('./dist/angular-heroku'))
  .get('/*', (req, res) => res.sendFile('dist/angular-heroku/index.html'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
