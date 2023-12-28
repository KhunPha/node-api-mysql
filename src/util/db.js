const mysql = require("mysql")
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "inventory",
    port: "3306"
})

module.exports = conn