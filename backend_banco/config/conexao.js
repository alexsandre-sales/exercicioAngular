const mysql = require('mysql');

const conexao = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  port: 3306,
  database: 'db_banco'
});

conexao.connect(err => {
  try {
    console.log('Conectado no banco');
  } catch (err) {
    console.log('Erro ao conectar no banco ' + err);
  }
});

module.exports = conexao;
