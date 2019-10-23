const mysql = require('mysql')

const conexao = mysql.createConnection({
  host: process.env.DB_MYSQL_HOST,
  database: process.env.DB_MYSQL_NAME,
  user: process.env.DB_MYSQL_USERNAME,
  password: process.env.DB_MYSQL_PASSWORD
})

module.exports = conexao
