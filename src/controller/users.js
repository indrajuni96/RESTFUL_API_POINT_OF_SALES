// import require 
const usersModel = require('../models/users')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../configs/configs')
const saltRounds = 10
const jwtPrivateKey = 'jwtsecret'

module.exports = {
    getUsers: (req, res) => {
        usersModel.getUsers()
            .then(resultQuery => {
                res.json({
                    status: 200,
                    message: 'success getting data users from database',
                    data: resultQuery
                })
            })
            .catch(err => {
                console.log(err)
                res.json({
                    status: 500,
                    message: 'erro getting data users from database'
                })
            })
    },
    register: (req, res) => {
        let email = req.body.email
        let password = req.body.password

        usersModel.cekEmail(email)
            .then(resultQuery => {
                if (resultQuery.length === 0) {
                    bcryptjs.genSalt(saltRounds, (err, salt) => {
                        bcryptjs.hash(password, salt, (err, hash) => {
                            const data = { email, password: hash }

                            usersModel.register(data)
                                .then(resultQuery => {
                                    res.json({
                                        status: 200,
                                        message: 'success adding new user',
                                        data
                                    })
                                })
                                .catch(err => {
                                    console.log(err)
                                    res.status(400).json({
                                        status: 400,
                                        message: 'register failed..'
                                    })
                                })
                        })
                    })
                } else {
                    res.status(400).json({
                        status: 400,
                        message: 'email already exist'
                    })
                }
            })
            .catch(err => {
                res.status(400).json({
                    status: 400,
                    message: 'error get email from database'
                })
            })
    },
    login: (req, res) => {
        const email = req.body.email

        usersModel.login(email)
            .then(resultQuery => {
                const idUser = resultQuery[0].idUser
                const passwordHash = resultQuery[0].password
                const password = req.body.password

                if (bcryptjs.compareSync(password, passwordHash)) {
                    const token = jwt.sign({ idUser: idUser }, jwtPrivateKey, { expiresIn: '1h' })

                    res.json({
                        status: 200,
                        message: 'login success',
                        data: {
                            email,
                            token
                        }
                    })
                } else {
                    res.json({
                        status: 400,
                        message: 'Password is incorrect'
                    })
                }
            })
            .catch(err => {
                console.log(err)
                res.status(400).json({
                    status: 400,
                    message: 'User or Password is incorrect!'
                })
            })

    }
}