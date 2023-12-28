const UserController = require("../controller/User.controller")

const User = (app) => {
    app.get("/api/user", UserController.getUsers)
    app.get("/api/user/:id", UserController.getOne)
    app.post("/api/user", UserController.create)
    app.delete("/api/user/:id", UserController.remove)
    app.put("/api/user", UserController.update)
}

module.exports = User