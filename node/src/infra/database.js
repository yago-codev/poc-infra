const { Client, Pool } = require('pg');

const connectionString = 'postgresql://docker:api_aws_postgres_password@localhost:5432/nodeapi';

const client = new Client({
  user: "docker",
  host: "db",
  database: "nodeapi",
  password: "api_aws_postgres_password",
  port: 5432,
})

// const client = new Client(db)

const db = client.connect()
  .then(() => {
    console.log('Deu bom 🚀')
  })
  .catch((err) => {
    console.error(`Deu ruim ${err} 💣`)
  })
// client.connect()

module.exports = db