const mongoose = require('mongoose')
const schema = require('./schema')
const db = mongoose.connection
const url =
  'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0'

const model = (() => {
  db.on('error', console.error)
  db.on('open', () => {
    console.log('Connecting mongodb!')
  })
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

  const model = {}
  for (let key in schema) {
    model[key] = mongoose.model(key, schema[key])
  }
  return model
})()

module.exports = model
