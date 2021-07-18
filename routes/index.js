// 引用 Express 與 Express router
const express = require('express')
const router = express.Router()

// 引入路由模組
const login = require('./modules/login')
router.use('/', login)
router.use('/login', login)

// 匯出路由器
module.exports = router