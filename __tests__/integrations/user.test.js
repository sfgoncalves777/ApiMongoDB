const request = require('supertest')
const { app } = require('../../lib/app')

describe('Testes funcionais da rota /users', () => {
  describe('Cadastro de usuários', () => {
    describe('Casos de sucesso', () => {
      it('Deve retornar status 200', async () => {
        const body = {
          name: 'Silvani Fernandes Gonçalves',
          email: 'silvani@gmail.com',
          password: '123456',
          admin: true
        }
        const response = await request(app)
          .post('/users')
          .send(body)

        expect(response.statusCode).toBe(200)
        expect(response.body).toHaveProperty('id')
        expect(response.body).toHaveProperty('name')
        expect(response.body).toHaveProperty('email')
        expect(response.body).toHaveProperty('password')
        expect(response.body).toHaveProperty('admin')
      })
    })
    describe('Casos de falha', () => {
      it('Deve retornar 401 contrato inválido', async () => {
        const response = await request(app)
          .post('/users')
          .send({})

        expect(response.status).toBe(401)
      })
    })
  })
})