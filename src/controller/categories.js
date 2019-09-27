// import model
const categoriModel = require('../models/categories')

module.exports = {
    getCategories: (req, res) => {
        categoriModel.getCategories()
            .then(resultQuery => {
                res.json({
                    status: 200,
                    message: 'success getting all data Categories from database',
                    data: resultQuery
                })
            })
            .catch(err => {
                console.log(err)
                res.json({
                    status: 500,
                    message: 'erro getting all data products from database'
                })
            })
    },
    getCategori: (req, res) => {
        const { idCategori } = req.params
        const data = idCategori

        categoriModel.getCategoriId(data)
            .then(resultQuery => {
                res.json({
                    status: 200,
                    message: 'success getting data categori from database',
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
        // res.json({
        //     status: 200,
        //     message: 'Success get all data'
        // })
    },
    addCategori: (req, res) => {
        const { name } = req.body
        const dateAdded = new Date()
        const data = { name, dateAdded }

        categoriModel.addCategori(data)
            .then(resultQuery => {
                res.json({
                    status: 200,
                    message: 'success adding new data categori',
                    data
                })
            })
            .catch(err => {
                console.log(err)
                res.status(400).json({
                    status: 400,
                    message: 'erro adding new data product'
                })
            })
    },
    editCategori: (req, res) => {
        const { idCategori } = req.params
        const { name } = req.body
        const dateUpdated = new Date()

        const data = { name, dateUpdated }
        const dataId = { idCategori }

        categoriModel.editCategori(data, dataId)
            .then(resultQuery => {
                res.json({
                    status: 200,
                    message: 'success edit data categori',
                    data
                })
            })
            .catch(err => {
                console.log(err)
                res.status(400).json({
                    status: 400,
                    message: 'erro edit data categori'
                })
            })
    },
    deleteCategori: (req, res) => {
        const { idCategori } = req.params
        const data = idCategori

        categoriModel.deleteCategori(data)
            .then(resultQuery => {
                res.json({
                    status: 200,
                    message: 'success delete data categori',
                    data
                })
            })
            .catch(err => {
                console.log(err)
                res.status(400).json({
                    status: 400,
                    message: 'erro delete data categori'
                })
            })
    }
}