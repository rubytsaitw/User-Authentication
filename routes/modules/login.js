const express = require('express')
const router = express.Router()

const User = require('../../models/user')

// Check cookie
router.get('/', (req, res) => {
  const cookie = req.cookies
  User.find({ _id: cookie.userId })
    .lean()
    .then(user => {
      if (!user) {
        res.render('login')
      }
      else {
        res.render('welcome', { name: user[0].firstName })
      }
    })
    .catch(error => console.log(error))
})

// First login
router.post('/', (req, res) => {
  const { email, password } = req.body
  User.find({ email })
    .lean()
    .then(user => {
      if (user.length === 0) {
        const alert = 'This email is not registered yet'
        res.render('login', { alert })
      }
      else if (user[0].password !== password) {
        const alert = 'Wrong password'
        res.render('login', { alert })
      }
      else {
        res.cookie('userId', user[0]._id)
        res.render('welcome', { name: user[0].firstName })
      }
    })
    .catch(error => console.log(error))
})

module.exports = router