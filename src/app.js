import express from 'express'

const app = express()

//Indicar para o express ler body com json
app.use(express.json())

//mock
const selecoes = [
  {id: 1, selecao: 'Brasil', grupo: 'G'},
  {id: 2, selecao: 'Suíça', grupo: 'G'},
  {id: 3, selecao: 'Camarões', grupo: 'G'},
  {id: 4, selecao: 'Sérvia', grupo: 'G'}
]

//Retornar o objeto por id
function buscarSelecaoPorId(id) {
  return selecoes.filter(selecao => selecao.id == id)
}

//Pegar posição ou index do elemento no array por id
function buscaIndexSelecao(id) {
  return selecoes.findIndex(selecao => selecao.id == id)
}

//Criar rota padrão ou raiz
app.get('/', (req, res) => {
  res.send('Curso de NODE.js')
})

app.get('/selecoes', (req, res) => {
  res.status(200).send(selecoes)
})

app.get('/selecoes/:id', (req, res) => {
  res.json(buscarSelecaoPorId(req.params.id))
})

app.post('/selecoes', (req, res) => {
  selecoes.push(req.body)
  res.status(201).send("Seleção cadastrada com sucesso!")
})

app.delete('/selecoes/:id', (req, res) => {
  let index = buscaIndexSelecao(req.params.id)
  selecoes.splice(index, 1)
  res.send(`Seleção com id ${req.params.id} excluída com sucesso!`)
})

app.put('/selecoes/:id', (req, res) => {
  let index = buscaIndexSelecao(req.params.id)
  selecoes[index].selecao = req.body.selecao
  selecoes[index].grupo = req.body.grupo
  res.json(selecoes)
})

export default app
