import express from 'express'

const app = express()

//mock
const selecoes = [
  {id: 1, selecao: 'Brasil', grupo: 'G'},
  {id: 1, selecao: 'Suíça', grupo: 'G'},
  {id: 1, selecao: 'Sérvia', grupo: 'G'},
  {id: 1, selecao: 'Camarões', grupo: 'G'},
]

//Criar rota padrão ou raiz
app.get('/', (req, res) => {
  res.send('Curso de NODE.js')
})

app.get('/selecoes', (req, res) => {
  res.status(200).send(selecoes)
})

export default app
