const conn = require('../configs/db')

module.exports = {
    getHistory: () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM history', (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    getRecentOrder: (data) => {
        let day
        if (data == "week") {
            day = "1 WEEK"
        } else if (data == "month") {
            day = "1 MONTH"
        } else {
            day = "1 YEAR"
        }
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM history WHERE date > (DATE_SUB(CURDATE(), INTERVAL ' + day + ')) ORDER BY date DESC', (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    getAllOrder: () => {
        return new Promise((resolve, reject) => {
            conn.query("SELECT (SELECT sum(amount) FROM history WHERE DATE(date) = DATE(NOW() - INTERVAL 1 DAY)) AS yesterday, (SELECT sum(amount) FROM history WHERE DATE(date) = DATE(NOW() - INTERVAL 0 DAY)) AS daynow, (SELECT sum(amount) FROM history WHERE YEAR(date) = YEAR(CURDATE()) -1) AS yearlast , (SELECT sum(amount) FROM history WHERE YEAR(date) = YEAR(CURDATE())) AS yearnow, (SELECT COUNT(idHistori) FROM history WHERE WEEK(date) = WEEK(CURDATE())) AS weeknow, (SELECT COUNT(idHistori) FROM history WHERE DAY(date) = DAY(CURDATE())) AS dayordernnow, (SELECT COUNT(idHistori) FROM history WHERE WEEK(date) = WEEK(CURDATE()) -1 ) AS lastweek", (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    getRevenueOrder: (data) => {
        return new Promise((resolve, reject) => {
            conn.query("SELECT *,SUM(amount) AS income, EXTRACT(YEAR FROM date) AS year," + "DAYNAME(date)AS dayname,MONTHNAME(date) AS monthname," + "EXTRACT(DAY FROM date) AS day, EXTRACT(MONTH FROM date) AS month," + "EXTRACT(WEEK from date) AS week FROM history GROUP BY " + data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    addHistory: (data) => {
        let ordersDataNum = data
        let ordersData
        if (ordersDataNum.length >= 1) {
            ordersData = data.orders.join()
        } else {
            ordersData = data.orders
        }
        return new Promise((resolve, reject) => {
            conn.query("INSERT INTO history (invoices,user,orders,amount) VALUES ('" + data.invoice + "','" + data.user + "','" + ordersData + "','" + data.amount + "')", (err, result) => { //preparete statement
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    getWeeklyIncome: () => {
        return new Promise((resolve, reject) => {
            conn.query(
                "SELECT DAYNAME(date) as DAY, WEEK(date) as WEEK, MONTHNAME(date) MONTH, YEAR(date) as YEAR, SUM(amount) AS INCOME FROM history GROUP BY WEEK(date), DAY(date) ORDER BY date",
                (err, result) => {
                    if (!err) {
                        resolve(result);
                    } else {
                        reject(new Error(err));
                    }
                }
            );
        });
    },
    getMonthlyIncome: () => {
        return new Promise((resolve, reject) => {
            conn.query(
                "SELECT DAYNAME(date) as DAY, WEEK(date) as WEEK, MONTHNAME(date) MONTH, YEAR(date) as YEAR, SUM(amount) AS INCOME FROM history GROUP BY MONTH(date), WEEK(date) ORDER BY date",
                (err, result) => {
                    if (!err) {
                        resolve(result);
                    } else {
                        reject(new Error(err));
                    }
                }
            );
        });
    }
}