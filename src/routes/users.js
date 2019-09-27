const express = require('express')
const Route = express.Router()

// import controller
const usersController = require('../controller/users')

Route
    .post('/register', usersController.register)
    .post('/login', usersController.login)

module.exports = Route