const express = require('express')
const Route = express.Router()

// import controller
const categoriesController = require('../controller/categories')
const usersController = require('../controller/users')

Route
    .get('/categories', categoriesController.getCategories)
    .get('/categories/:idCategori', categoriesController.getCategori)
    .post('/categories/', categoriesController.addCategori)
    .put('/categories/:idCategori', categoriesController.editCategori)
    .delete('/categories/:idCategori', categoriesController.deleteCategori)

module.exports = Route