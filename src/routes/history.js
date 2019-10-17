const express = require('express')
const Route = express.Router()
const historyController = require('../controller/history')

Route
    .get('/history', historyController.getHistory)
    .get('/history/recentOrder', historyController.getRecentOrder)
    .get('/history/revenueOrder', historyController.getRevenueOrder)
    .get('/history/countOrder', historyController.getAllOrder)
    .post('/history/addHistory', historyController.addHistory)
    .get('/history/weekly', historyController.getWeeklyIncome)
    .get('/history/monthly', historyController.getMonthlyIncome)

module.exports = Route