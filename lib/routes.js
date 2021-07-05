const { Router } = require('express')
const { validators } = require('./middleware/validation')
const { UserController } = require('./controllers/userController')

const userController = new UserController

const routes = Router()
routes.post('/users', validators.createUser, userController.handleCreateUser)

module.exports = { routes }