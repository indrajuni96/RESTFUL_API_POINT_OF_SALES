const historyModel = require('../models/history')

module.exports = {
    getHistory: (req, res) => {
        historyModel.getHistory()
            .then(resultQuery => {
                res.json({
                    status: 200,
                    message: 'success getting data history from database',
                    total_data: resultQuery.length,
                    data: resultQuery
                })
            })
            .catch(err => {
                console.log(err)
                res.json({
                    status: 500,
                    message: 'erro getting data history from database'
                })
            })
    },
    getRecentOrder: (req, res) => {
        let orderBy = req.query.order
        orderBy = typeof orderBy !== 'undefined' ? orderBy : "week"
        historyModel.getRecentOrder(orderBy)
            .then(result => {
                res.json({
                    status: 200,
                    message: 'success getting all data',
                    data: result
                })
            })
            .catch(err => {
                res.status(500).json({
                    status: 500,
                    message: 'error getting data',
                })
            })
    },
    getCountOrder: (req, res) => {
        historyModel.getCountOder()
            .then((result) => {
                res.json({
                    status: 200,
                    message: 'success getting count order',
                    data: result
                })
            })
            .catch(err => {
                res.status(500).json({
                    status: 500,
                    message: 'error getting data count order',
                })
            })
    },
    getRevenueOrder: (req, res) => {
        let orderBy = req.query.order
        historyModel.getRevenueOrder(orderBy)
            .then(result => {
                res.json({
                    status: 200,
                    message: 'success getting data revenue',
                    data: result
                })
            })
            .catch(err => {
                res.status(500).json({
                    status: 500,
                    message: 'error getting data revenue',
                })
            })
    },
    addHistory: (req, res) => {
        const invoice = Math.floor(Math.random() * 100000)
        const { user, orders, quantity, id, amount } = req.body
        const data = { invoice, user, orders, quantity, id, amount }
        historyModel.addHistory(data)
            .then(ressult => {
                res.json({
                    status: 200,
                    message: 'success add history'
                })
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({
                    status: 500,
                    message: 'error add history'
                })
            })
    },
    getAllOrder: (req, res) => {
        historyModel.getAllOrder()
            .then((result) => {
                res.json({
                    status: 200,
                    message: 'success getting count order',
                    data: result
                })
            })
            .catch(err => {
                res.status(500).json({
                    status: 500,
                    message: 'error getting data count order',
                })
            })
    },
    getWeeklyIncome: (req, res) => {
        historyModel.getWeeklyIncome()
            .then(result => {
                res.json({
                    status: 200,
                    message: "Get data successfully!",
                    data: result
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    status: 500,
                    message: "Failed to get data!"
                });
            });
    },
    getMonthlyIncome: (req, res) => {
        historyModel.getMonthlyIncome()
            .then(result => {
                res.json({
                    status: 200,
                    message: "Get data successfully!",
                    data: result
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    status: 500,
                    message: "Failed to get data!"
                });
            });
    }
}