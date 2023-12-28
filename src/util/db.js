const mysql = require("mysql")
const conn = mysql.createConnection({
    host: "bhhxcanmyjj5hak805p8-mysql.services.clever-cloud.com",
    user: "ue6ccmzxf7mdz13n",
    password: "dPqOg5YPQ0L4tFTWcQIT",
    database: "bhhxcanmyjj5hak805p8",
    port: "3306"
})

module.exports = conn