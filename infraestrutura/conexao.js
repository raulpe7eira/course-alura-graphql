const mysql = require('mysql')

const conexao = mysql.createConnection({
  host: '192.168.99.100',
  port: 3306,
  database: 'agenda-petshop',
  user: 'root',
  password: 'sa',
  multipleStatements: true
})

module.exports = conexao
