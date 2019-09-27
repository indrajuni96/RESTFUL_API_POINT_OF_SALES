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
    addProductQuantity: (data, dataIdProduct) => {
        return new Promise((resolve, reject) => {
            conn.query('UPDATE products SET quantity = quantity+?, dateUpdated=? WHERE ?', [data, new Date, dataIdProduct], (err, result) => { //preparete statement
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    reduceProductQuantity: (data, dataIdProduct) => {
        return new Promise((resolve, reject) => {

            conn.query('SELECT quantity FROM products WHERE ? ', dataIdProduct, (err, result) => {

                const numQuantity = result[0].quantity - data

                if (numQuantity >= 0) {
                    conn.query(`UPDATE products SET quantity = quantity-?, dateUpdated=? WHERE ?`, [data, new Date, dataIdProduct], (err, result) => {
                        if (!err) {
                            resolve('Success reduce quantity product')
                        } else {
                            reject(err)
                        }
                    })
                } else {
                    resolve('Quantity below -1')
                }

            })
        })
    },
    deleteProduct: (data) => {
        return new Promise((resolve, reject) => {
            conn.query('DELETE FROM products WHERE idProduct = ?', data, (err, result) => { //preparete statement
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    }
}