const conn = require("../util/db")
const crypto = require("crypto")

const getUsers = (req, res) => {
    var sql = "SELECT * FROM tbl_users";
    conn.query(sql, (error, rows)=>{
        if(!error){
            res.json({
                data: rows
            })
        }else{
            res.json({
                error: true,
                message: error
            })
        }
    })
}

const getOne = (req, res) => {
    var {id} = req.params;
    var sql = "SELECT * FROM tbl_users WHERE id=?";
    var param = [id];
    conn.query(sql, param, (error, rows)=>{
        if(!error){
            res.json({
                data: rows
            })
        }else{
            res.json({
                error: true,
                message: error
            })
        }
    })
}

const create = (req, res) => {
    const {
        Full_Name, Username, Password, role, img
    } = req.body;
    var sql = "INSERT INTO tbl_users(Full_Name, Username, Password, role, img) VALUE(?, ?, ?, ?, ?)";
    var param = [Full_Name, Username, Password, role, img];
    conn.query(sql, param, (error, rows)=>{
        if(!error){
            res.json({
                data: rows
            })
        }else{
            res.json({
                error: true,
                message: error
            })
        }
    })
}

const remove = (req, res) => {
    const {id} = req.params;
    var sql = "DELETE FROM tbl_users WHERE id=?";
    var param = [id];
    conn.query(sql, param, (error, rows)=>{
        if(!error){
            res.json({
                message: rows.affectedRows != 0 ? "Delete success" : "Delete Failed",
                data: [id]
            })
        }else{
            res.json({
                error: true,
                message: error
            })
        }
    })
}

const update = (req, res) => {
    const {
        Full_Name, Username, Password, role, img, id
    } = req.body;
    var sql = "UPDATE tbl_users SET Full_Name=?, Username=?, Password=?, role=?, img=? WHERE id=?";
    var param = [Full_Name, Username, Password, role, img, id];
    conn.query(sql, param, (error, rows)=>{
        if(!error){
            res.json({
                message: rows.affectedRows != 0 ? "Update Success" : "Update Failed",
                data: rows
            })
        }else{
            res.json({
                error: true,
                message: error
            })
        }
    })
}

module.exports = {
    getUsers,
    getOne,
    create,
    remove,
    update
}