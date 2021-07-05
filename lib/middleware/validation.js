const yup = require('yup')

const validators = {
  createUser: async (req, res, next) => {
    const schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().required(),
      admin: yup.bool()
    })
    if (!await schema.isValid(req.body)) return res.sendStatus(401)
    next()
  }
}

module.exports = { validators }