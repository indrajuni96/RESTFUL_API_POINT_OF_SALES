// import all dependencies required
const express = require('express')
const bodyParser = require('body-parser') // for parsing req.body
const logger = require('morgan')
const fileUpload = require('express-fileupload');
// const jwt = require('jsonwebtoken')
const cors = require('cors')

require('dotenv').config()

// import route index
const routerNav = require('./src/index')
// use express
const app = express()
//use body parser json
app.use(bodyParser.json())
// use body parser from urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// use logger
app.use(logger('dev'))
// use fileUpload
app.use(fileUpload());

app.use(express.static('./src/uploads/'));

// define PORT
const port = process.env.SERVER_PORT || 5000

// start server
app.listen(port, function () { console.log(`Server has running on port : ${port}`) })

const configCorsAllow = {
    methods: 'GET,POST,PUT,PATCH,DELETE',
    allowedHeaders: 'Content-Type, Authorization'
}
app.use(cors(configCorsAllow))
app.use('/', routerNav)

// add Route Not Found 
app.get('*', (req, res) => {
    res.send('Oops, 404 Not Found!')
})