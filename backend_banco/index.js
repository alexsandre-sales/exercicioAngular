require('./config/conexao');
const express = require('express');
const router = require('./routes/router');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/banco', router);

app.listen(port, () => {
  try {
    console.log('Conexao OK');
  } catch (error) {
    console.log('Erro ao conectar ' + error);
  }
});
