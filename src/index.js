const express = require('express')
const Route = express.Router()
//import all routes
const products = require('./routes/products')
const categories = require('./routes/categories')
const users = require('./routes/users')
const history = require('./routes/history')

Route
    .use('/api/v1', products)
    .use('/api/v1', categories)
    .use('/api/v1', history)
    .use('/users', users)

module.exports = Route