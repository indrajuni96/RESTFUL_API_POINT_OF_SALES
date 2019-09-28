// import model
const productModel = require('../models/products')

module.exports = {
    getProducts: (req, res) => {
        let search
        let sorting

        req.query.searchByName ? search = `'${req.query.searchByName}'` : search = "''"
        req.query.byProduct && req.query.sort ? sorting = `a.${req.query.byProduct} ${req.query.sort}` : sorting = `a.idProduct`

        console.log(sorting)

        let page = (req.query.pages) ? pages = parseInt(req.query.pages, 10) : pages = 1
        let off = ((page - 1) * 5)
        let lim = (req.query.pages) ? 5 : 20

        const data = { search, sorting, off, lim }

        productModel.getProducts(data)
            .then(resultQuery => {
                res.json({
                    status: 200,
                    message: 'success getting data products from database',
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
        const dateAdded = new Date()

        if (productImage.mimetype === 'image/jpeg' || productImage.mimetype === 'image/png') {
            const image = Date.now() + '-' + productImage.name

            // Directori file upload
            productImage.mv('./src/uploads/' + image);
            const data = { name, description, image, idCategori, price, quantity, dateAdded }

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
            const data = { name, description, image, idCategori, price, quantity, dateUpdated: new Date() }

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
        const dateUpdated = new Date()

        const data = { idProduct, quantity, dateUpdated }
        const dataIdProduct = { idProduct }

        productModel.addProductQuantity(quantity, dataIdProduct)
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
    reduceProductQuantity: (req, res) => {
        const { idProduct } = req.params
        const { quantity } = req.body
        const dateUpdated = new Date()

        const dataMessage = { idProduct, quantity, dateUpdated }
        const dataIdProduct = { idProduct }

        productModel.reduceProductQuantity(quantity, dataIdProduct)
            .then(resultQuery => {
                res.json({
                    status: 200,
                    message: 'success reduce quantity data product',
                    dataMessage: resultQuery
                })
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({
                    status: 500,
                    message: 'erro reduce quantity data product'
                })
            })
    },
    deleteProduct: (req, res) => {
        const { idProduct } = req.params
        const data = idProduct //ini yang buat prepared statement

        productModel.deleteProduct(data)
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