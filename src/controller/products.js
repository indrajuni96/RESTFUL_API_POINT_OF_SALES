// import model
const productModel = require('../models/products')

module.exports = {
    getProducts: (req, res) => {
        let search
        let sorting

        req.query.searchByName ? search = `'${req.query.searchByName}'` : search = "''"
        req.query.byProduct && req.query.sort ? sorting = `a.${req.query.byProduct} ${req.query.sort}` : sorting = `a.idProduct`

        let page = (req.query.pages) ? pages = parseInt(req.query.pages, 10) : pages = 1
        let off = ((page - 1) * 5)
        let lim = (req.query.pages) ? 5 : 20

        const data = { search, sorting, off, lim }

        productModel.getProducts(data)
            .then(resultQuery => {
                res.json({
                    status: 200,
                    message: 'success getting data products from database',
                    total_data: resultQuery.length,
                    data: resultQuery
                })
            })
            .catch(err => {
                console.log(err)
                res.json({
                    status: 500,
                    message: 'erro getting data products from database'
                })
            })
    },
    getProductId: (req, res) => {
        const idProduct = req.params.idProduct
        const data = { idProduct }

        productModel.getProductId(data)
            .then(resultQuery => {
                res.json({
                    status: 200,
                    message: 'success getting data product from database',
                    total_data: resultQuery.length,
                    data: resultQuery
                })
            })
            .catch(err => {
                console.log(err)
                res.json({
                    status: 500,
                    message: 'erro getting data product from database'
                })
            })
    },
    addProducts: (req, res) => {
        const { name, description, idCategori, price, quantity } = req.body
        const productImage = req.files.image;

        if (productImage.mimetype === 'image/jpeg' || productImage.mimetype === 'image/png') {
            const image = Date.now() + '-' + productImage.name

            // Directori file upload
            productImage.mv('./src/uploads/' + image);
            const data = {
                name,
                description,
                image,
                idCategori,
                price,
                quantity,
                dateAdded: new Date()
            }

            productModel.addProduct(data)
                .then(resultQuery => {
                    res.json({
                        status: 200,
                        message: 'success adding new data product',
                        data
                    })
                })
                .catch(err => {
                    console.log(err)
                    res.status(500).json({
                        status: 500,
                        message: 'erro adding new data product'
                    })
                })
        } else {
            res.json({
                message: 'Please Upload File jpeg Or Png'
            })
        }
    },
    editProduct: (req, res) => {
        const idProduct = req.params.idProduct
        const { name, description, idCategori, price, quantity } = req.body
        const productImage = req.files.image;

        if (productImage.mimetype === 'image/jpeg' || productImage.mimetype === 'image/png') {
            const image = Date.now() + '-' + productImage.name

            // Directori file upload
            productImage.mv('./src/uploads/' + image);
            const data = {
                name,
                description,
                image,
                idCategori,
                price,
                quantity,
                dateUpdated: new Date()
            }

            productModel.editProduct(data, idProduct)
                .then(resultQuery => {
                    res.json({
                        status: 200,
                        message: 'success edit data product',
                        data
                    })
                })
                .catch(err => {
                    console.log(err)
                    res.status(500).json({
                        status: 500,
                        message: 'erro edit data product'
                    })
                })
        } else {
            res.json({
                message: 'Please Upload File jpeg Or Png'
            })
        }
    },
    addProductQuantity: (req, res) => {
        const { idProduct } = req.params
        const { quantity } = req.body
        const data = {
            quantity,
            dateUpdated: new Date()
        }

        productModel.addProductQuantity(data, idProduct)
            .then(resultQuery => {
                res.json({
                    status: 200,
                    message: 'success add quantity data product',
                    data
                })
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({
                    status: 500,
                    message: 'erro add quantity data product'
                })
            })
    },
    // reduceProductQuantity: (req, res) => {
    //     const idProduct = req.params.idProduct
    //     const { quantity } = req.body
    //     const data = { idProduct, quantity }

    //     productModel.reduceProductQuantity(idProduct, quantity)
    //         .then(resultQuery => {
    //             res.json({
    //                 status: 200,
    //                 message: 'success reduce quantity data product',
    //                 data
    //             })
    //         })
    //         .catch(err => {
    //             console.log(err)
    //             res.status(500).json({
    //                 status: 500,
    //                 message: 'erro reduce quantity data product',
    //             })
    //         })
    // },
    reduceProductQuantity: (req, res) => {
        const idProduct = req.params.idProduct
        const quantity = req.body.quantity
        const data = { idProduct, quantity }

        productModel.getQuantity(idProduct)
            .then(resultQuery => {
                const quantityProduct = resultQuery[0].quantity
                const totalQuantity = quantityProduct - quantity

                if (totalQuantity >= 0) {
                    productModel.reduceProductQuantity(idProduct, totalQuantity)
                        .then(resultQuery => {
                            res.json({
                                status: 200,
                                message: 'Success Reduce Product....'
                            })
                        })
                        .catch(err => {
                            console.log(err)
                            res.status(500).json({
                                status: 500,
                                message: 'erro reduce product'
                            })
                        })
                } else {
                    res.status(400).json({
                        status: 400,
                        message: 'Can not quantity below 0 ',
                        data
                    })
                }
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({
                    status: 500,
                    message: 'erro get quantity reduce product'

                })
            })
    },
    deleteProduct: (req, res) => {
        const { idProduct } = req.params

        productModel.deleteProduct(idProduct)
            .then(resultQuery => {
                res.json({
                    status: 200,
                    message: 'success delete data product',
                    data
                })
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({
                    status: 500,
                    message: 'erro delete data product'
                })
            })
    }
}