const conn = require('../configs/db')

module.exports = {
    // get product using promise
    cekEmail: (data) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT email FROM users WHERE email = ? ', [data], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    register: (data) => {
        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO users SET ?', [data], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    login: (data) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM users WHERE email = ? ', [data], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
}