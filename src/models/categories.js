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
    getCategoriId: (dataId) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM categories where idCategori = ?', dataId, (err, result) => {

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
    editCategori: (data, dataIdCategori) => {
        return new Promise((resolve, reject) => {
            conn.query('UPDATE categories SET ? WHERE ?', [data, dataIdCategori], (err, result) => { //preparete statement
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    deleteCategori: (data) => {
        return new Promise((resolve, reject) => {
            conn.query('DELETE FROM categories WHERE idCategori = ?', data, (err, result) => { //preparete statement
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    }
}