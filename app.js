const express = require('express')
const mongoose = require('mongoose')

const app = express()

const User = require('../user')

// Mongoose
mongoose.connect('mongodb://localhost/authentication', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

// Express
app.get('/', (req, res) => {
  res.send('login page')
})

app.listen(3000, () => {
  console.log('App is running on http"//localhost:3000')
})

