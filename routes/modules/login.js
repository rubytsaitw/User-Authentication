const express = require('express')
const router = express.Router()

const User = require('../../models/user')

router.get('/', (req, res) => {
  res.render('login')
})

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
        res.render('welcome', { name: user[0].firstName })
      }
    })
    .catch(error => console.log(error))
})

module.exports = router