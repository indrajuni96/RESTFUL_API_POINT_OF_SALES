const express = require('express')
const Route = express.Router()

//import routes
const products = require('./routes/products')
const categories = require('./routes/categories')
const users = require('./routes/users')


Route
    .use('/api/v1', products)
    .use('/api/v1', categories)
    .use('/users', users)

module.exports = Route