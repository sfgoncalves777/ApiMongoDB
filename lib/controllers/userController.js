const { UserService } = require("../services/userService")

class UserController {
  async handleCreateUser(req, res) {
    const { name, email, password, admin } = req.body
    const userService = new UserService()
    const user = await userService.create(name, email, password, admin)
    return res.status(200).json(user)
  }
}

module.exports = { UserController }