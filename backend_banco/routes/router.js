const route = require('express').Router();
const cx = require('../config/conexao');

route.post('/', (req, res) => {
  const { nomeClinte, valor, ccCliente } = req.body;
  let insert = `insert into tb_cc(nomeClinte,valor, ccCliente) values('${nomeClinte}','${valor}','${ccCliente}')`;

  cx.query(insert, (err, rows, fields) => {
    try {
      return res.status(200).json({ msg: 'Inserido com sucesso' });
    } catch (err) {
      return res.status(400).json({ msg: 'Erro ao incluir ' + err });
    }
  });
});

route.get('/', (req, res) => {
  let busca = 'select * from tb_cc';

  cx.query(busca, (err, rows, col) => {
    try {
      return res.status(200).json(rows);
    } catch (err) {
      return res.status(400).json({ msg: 'Erro na consulta ' + err });
    }
  });
});

route.get('/:id', (req, res) => {
  const { id } = req.params;

  let busca = `select * from tb_cc where id_transferencia = ${id}`;

  cx.query(busca, (err, rows, fields) => {
    try {
      return res.status(200).json(rows[0]);
    } catch (err) {
      return res.status(400).json({ msg: 'Erro na busca por ID ' + err });
    }
  });
});

route.delete('/:id', (req, res) => {
  const { id } = req.params;

  let del = `delete from tb_cc where id_transferencia = ${id}`;

  cx.query(del, (err, rows, fields) => {
    try {
      return res.status(200).json({ msg: 'Excluido' });
    } catch (err) {
      return res.status(400).json({ msg: 'Erro ao deletar ' + err });
    }
  });
});

route.put('/:id', (req, res) => {
  const { id } = req.params;
  const { nomeClinte, valor, ccCliente } = req.body;

  let update = `update tb_cc set 
  nomeClinte = "${nomeClinte}",
  valor = "${valor}",
  ccCliente = "${ccCliente}"
  where id_transferencia = "${id}"`;

  cx.query(update, (err, rows, fields) => {
    try {
      return res.status(200).json({ msg: 'Atualizado com sucesso' });
    } catch (err) {
      return res.status(400).json('Erro au atualizar ' + err);
    }
  });
});
module.exports = route;
