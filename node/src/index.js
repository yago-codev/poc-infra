const express = require('express')

const db = require('./infra/database');

const app = express()

app.get('/', (req, res) => {
  // const connectPostgres = async () => {
  //   const db = await database.connect()
  //   console.log('conexão', db)
  // }
  // connectPostgres()
  res.send('API AWS')
})

app.listen(3000)