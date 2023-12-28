const express = require("express")
const cors = require("cors")

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors({
    origin: "*"
}))

app.use("/home", (req, res) => {
    res.json({
        message: "Home"
    })
})

app.get("/", (req, res)=>{
    res.json({
        message: "Home"
    })
})

const User = require("./src/routes/User.route")

User(app)

const port = 9002;
app.listen(port, (req, res)=>{
    console.log("http://localhost:" + port)
})