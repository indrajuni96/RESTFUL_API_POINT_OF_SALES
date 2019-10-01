const conn = require('../configs/db')

module.exports = {
    // get product using promise
    getProducts: (data) => {
        const sortName = data.search.replace(/'/g, "%")

        return new Promise((resolve, reject) => {
            conn.query(`SELECT a.idProduct, a.name, a.description, a.image, b.name AS categoritu, a.price, a.quantity, a.dateAdded, a.dateUpdated  FROM products a INNER JOIN categories b ON a.idCategori = b.idCategori AND a.name LIKE '${sortName}' ORDER BY ${data.sorting} LIMIT ${data.off},${data.lim}`,
                (err, result) => {
                    if (!err) {
                        resolve(result)
                    } else {
                        reject(err)
                    }
                })
        })
    },
    getProductId: (dataId) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT a.idProduct, a.name, a.description, a.image, b.name AS categori, a.price, a.quantity, a.dateAdded, a.dateUpdated  FROM products a INNER JOIN categories b ON a.idCategori = b.idCategori where a.idProduct = ?', dataId.idProduct, (err, result) => {

                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    addProduct: (data) => {
        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO products SET ?', data, (err, result) => { //preparete statement
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    editProduct: (data, idProduct) => {
        return new Promise((resolve, reject) => {
            conn.query('UPDATE products SET ? WHERE idProduct = ?', [data, idProduct], (err, result) => { //preparete statement
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    getQuantity: (idProduct) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT quantity FROM products where idProduct = ?', idProduct, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    addProductQuantity: (data, IdProduct) => {
        return new Promise((resolve, reject) => {
            conn.query('UPDATE products SET quantity = quantity+?, dateUpdated = ? WHERE idProduct = ?', [data.quantity, data.dateUpdated, IdProduct], (err, result) => { //preparete statement
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    // reduceProductQuantity: (idProduct, quantity) => {
    //     return new Promise((resolve, reject) => {

    //         conn.query('SELECT quantity FROM products WHERE idProduct = ? ', idProduct, (err, result) => {

    //             const numQuantity = result[0].quantity - quantity

    //             if (numQuantity >= 0) {
    //                 conn.query(`UPDATE products SET quantity = ?, dateUpdated=? WHERE idProduct = ?`, [numQuantity, new Date, idProduct], (err, result) => {
    //                     if (!err) {
    //                         resolve(result)
    //                     } else {
    //                         reject(err)
    //                     }
    //                 })
    //             } else {
    //                 reject('cannot Quantity below 0')
    //             }

    //         })
    //     })
    // },
    reduceProductQuantity: (idProduct, quantity) => {
        return new Promise((resolve, reject) => {
            conn.query('UPDATE products SET quantity = ? WHERE idProduct = ?', [quantity, idProduct], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    deleteProduct: (idProduct) => {
        return new Promise((resolve, reject) => {
            conn.query('DELETE FROM products WHERE idProduct = ?', idProduct, (err, result) => { //preparete statement
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    }
}