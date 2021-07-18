const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')

const routes = require('./routes')
require('./config/mongoose')

const app = express()

// Handlebars
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(routes)

app.listen(3000, () => {
  console.log('App is running on http"//localhost:3000')
})