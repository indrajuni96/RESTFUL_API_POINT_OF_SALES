const express = require('express')
const Route = express.Router()
const cors = require('cors')

// import controller
const productsController = require('../controller/products')
const usersController = require('../controller/users')

Route
    .get('/products', cors(), productsController.getProducts)
    .get('/products/:idProduct', usersController.validateUser, productsController.getProductId)
    .post('/products', usersController.validateUser, productsController.addProducts)
    .put('/products/:idProduct', usersController.validateUser, productsController.editProduct)
    .patch('/products/quantity/add/:idProduct', usersController.validateUser, productsController.addProductQuantity)
    .patch('/products/quantity/reduce/:idProduct', usersController.validateUser, productsController.reduceProductQuantity)
    .delete('/products/:idProduct', usersController.validateUser, productsController.deleteProduct)

module.exports = Route