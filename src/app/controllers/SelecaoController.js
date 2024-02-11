import conexao from '../database/conexao.js'

class SelecaoController {
  index(req, res) {
    const sql = "select * from selecoes;"
    conexao.query(sql, (erro, resultado) => {
      if(erro) {
        res.status(404).json({ 'erro': erro })
      } else {
        res.status(200).json(resultado)
      }
    })
  }

  show(req, res) {
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
  }

  store(req, res) {
    const selecao = req.body
    const sql = "insert into selecoes set ?;"
    conexao.query(sql, selecao, (erro, resultado) => {
      if(erro) {
        res.status(404).json({ 'erro': erro })
      } else {
        res.status(201).json(resultado)
      }
    })
  }

  update(req, res) {
    const id = req.params.id
    const selecao = req.body
    const sql = "update selecoes set ? where id=?;"
    conexao.query(sql, [selecao, id], (erro, resultado) => {
      const linha = resultado[0]
      if(erro) {
        res.status(404).json({ 'erro': erro })
      } else {
        res.status(200).json(resultado)
      }
    })
  }

  delete(req, res) {
    const id = req.params.id
    const sql = "delete from selecoes where id=?;"
    conexao.query(sql, id, (erro, resultado) => {
      if(erro) {
        res.status(404).json({ 'erro': erro })
      } else {
        res.status(200).json(resultado)
      }
    })
  }
}

// padrão Singleton
export default new SelecaoController()
