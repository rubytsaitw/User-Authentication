const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars');

const app = express()

const User = require('./models/user')

// Mongoose
mongoose.connect('mongodb://localhost/authentication', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

// Handlebars
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// Express
app.get('/', (req, res) => {
  res.render('login')
})

app.listen(3000, () => {
  console.log('App is running on http"//localhost:3000')
})

