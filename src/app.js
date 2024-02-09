import express from 'express'

import conexao from '../infra/conexao.js'

const app = express()

//Indicar para o express ler body com json
app.use(express.json())

//Retornar o objeto por id
function buscarSelecaoPorId(id) {
  return selecoes.filter(selecao => selecao.id == id)
}

//Pegar posição ou index do elemento no array por id
function buscaIndexSelecao(id) {
  return selecoes.findIndex(selecao => selecao.id == id)
}

//Rotas
app.get('/selecoes', (req, res) => {
  //res.status(200).send(selecoes)
  const sql = "select * from selecoes;"
  conexao.query(sql, (erro, resultado) => {
    if(erro) {
      res.status(404).json({ 'erro': erro })
    } else {
      res.status(200).json(resultado)
    }
  })
})

app.get('/selecoes/:id', (req, res) => {
  //res.json(buscarSelecaoPorId(req.params.id))
  const id = req.params.id
  const sql = "select * from selecoes where id=?;"
  conexao.query(sql, id, (erro, resultado) => {
    const linha = resultado[0]
    if(erro) {
      res.status(404).json({ 'erro': erro })
    } else {
      res.status(200).json(linha)
    }
  })
})

app.post('/selecoes', (req, res) => {
  //selecoes.push(req.body)
  //res.status(201).send("Seleção cadastrada com sucesso!")
  const selecao = req.body
  const sql = "insert into selecoes set ?;"
  conexao.query(sql, selecao, (erro, resultado) => {
    const linha = resultado[0]
    if(erro) {
      res.status(400).json({ 'erro': erro })
    } else {
      res.status(201).json(resultado)
    }
  })
})

app.delete('/selecoes/:id', (req, res) => {
  //let index = buscaIndexSelecao(req.params.id)
  //selecoes.splice(index, 1)
  //res.send(`Seleção com id ${req.params.id} excluída com sucesso!`)
  const id = req.params.id
  const sql = "delete from selecoes where id=?;"
  conexao.query(sql, id, (erro, resultado) => {
    if(erro) {
      res.status(404).json({ 'erro': erro })
    } else {
      res.status(200).json(resultado)
    }
  })
})

app.put('/selecoes/:id', (req, res) => {
  //let index = buscaIndexSelecao(req.params.id)
  //selecoes[index].selecao = req.body.selecao
  //selecoes[index].grupo = req.body.grupo
  //res.json(selecoes)
  const id = req.params.id
  const selecao = req.body
  const sql = "update selecoes set ? where id=?;"
  conexao.query(sql, [selecao, id], (erro, resultado) => {
    const linha = resultado[0]
    if(erro) {
      res.status(400).json({ 'erro': erro })
    } else {
      res.status(200).json(resultado)
    }
  })
})

export default app
