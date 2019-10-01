const express = require('express')
const Route = express.Router()
const cors = require('cors')

// import controller
const productsController = require('../controller/products')
const middleware = require('../helpers/auth')

Route
    .get('/products', cors(), middleware.checkToken, productsController.getProducts)
    .get('/products/:idProduct', productsController.getProductId)
    .post('/products', productsController.addProducts)
    .put('/products/:idProduct', productsController.editProduct)
    .patch('/products/quantity/add/:idProduct', productsController.addProductQuantity)
    .patch('/products/quantity/reduce/:idProduct', productsController.reduceProductQuantity)
    .delete('/products/:idProduct', productsController.deleteProduct)

module.exports = Route