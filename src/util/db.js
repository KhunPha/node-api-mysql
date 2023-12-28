const mysql = require("mysql")
const conn = mysql.createConnection({
    host: "sql12.freesqldatabase.com",
    user: "sql12673353",
    password: "zUXVXQqVCY",
    database: "sql12673353",
    port: "3306"
})

module.exports = conn