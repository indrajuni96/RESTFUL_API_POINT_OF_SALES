const conn = require('../configs/db')

module.exports = {
    // get product using promise
    getCategories: () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM categories',
                (err, result) => {
                    if (!err) {
                        resolve(result)
                    } else {
                        reject(err)
                    }
                })
        })
    },
    getCategoriId: (idCategori) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM categories where idCategori = ?', idCategori, (err, result) => {

                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    addCategori: (data) => {
        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO categories SET ?', data, (err, result) => { //preparete statement
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    editCategori: (data, idCategori) => {
        return new Promise((resolve, reject) => {
            conn.query('UPDATE categories SET ? WHERE idCategori = ?', [data, idCategori], (err, result) => { //preparete statement
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    deleteCategori: (idCategori) => {
        return new Promise((resolve, reject) => {
            conn.query('DELETE FROM categories WHERE idCategori = ?', idCategori, (err, result) => { //preparete statement
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    }
}