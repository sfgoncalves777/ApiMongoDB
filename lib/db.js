const { MongoClient } = require('mongodb')

const database = process.env.NODE_ENV === 'test' ? 'test' : 'api'

const connection = MongoClient.connect(`mongodb://localhost:27017/${database}`)
module.exports = { connection }