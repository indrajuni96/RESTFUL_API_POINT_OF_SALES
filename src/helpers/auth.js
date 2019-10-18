const jwt = require('jsonwebtoken')

module.exports = {
    checkToken: (req, res, next) => {
        let token
        // const token = req.headers['x-access-token'] || req.headers.authorization.split(" ")
        if (req.headers['x-access-token']) {
            token = req.headers['x-access-token']
        } else {
            console.log(req.headers.authorization)
            token = req.headers.authorization.split(" ")[1]
        }

        if (token) {
            jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
                if (err) {
                    return res.status(400).json({
                        status: 400,
                        message: 'Token not found!!!'
                    })
                } else {
                    next()
                }
            })
        } else {
            return res.json({
                status: 400,
                message: 'empty Token!!!'
            })
        }

    }
}