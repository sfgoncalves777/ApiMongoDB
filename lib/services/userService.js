const { connection } = require('../db')

class UserService {
  async create(name, email, password, admin = false) {
    const user = await connection('users').insertOne({ name, email, password, admin })
    return user
  }
}

module.exports = { UserService }