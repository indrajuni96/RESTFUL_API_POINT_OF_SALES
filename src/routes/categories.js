const express = require('express')
const Route = express.Router()

// import controller
const categoriesController = require('../controller/categories')
const usersController = require('../controller/users')

Route
    .get('/categories', categoriesController.getCategories)
    .get('/categories/:idCategori', categoriesController.getCategori)
    .post('/categories/', usersController.validateUser, categoriesController.addCategori)
    .put('/categories/:idCategori', usersController.validateUser, categoriesController.editCategori)
    .delete('/categories/:idCategori', usersController.validateUser, categoriesController.deleteCategori)

module.exports = Route