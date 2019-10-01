// import model
const categoriModel = require('../models/categories')

module.exports = {
    getCategories: (req, res) => {
        categoriModel.getCategories()
            .then(resultQuery => {
                res.json({
                    status: 200,
                    message: 'success getting all data Categories from database',
                    total_data: resultQuery.length,
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
                    total_data: resultQuery.length,
                    data: resultQuery
                })
            })
            .catch(err => {
                console.log(err)
                res.json({
                    status: 500,
                    message: 'erro getting data categori from database'
                })
            })
    },
    addCategori: (req, res) => {
        const { name } = req.body
        const data = {
            name,
            dateAdded: new Date()
        }

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
        const idCategori = req.params.idCategori
        const { name } = req.body
        const data = {
            name,
            dateUpdated: new Date()
        }

        categoriModel.editCategori(data, idCategori)
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
        const idCategori = req.params.idCategori

        categoriModel.deleteCategori(idCategori)
            .then(resultQuery => {
                res.json({
                    status: 200,
                    message: 'success delete data categori',
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