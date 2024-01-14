const express = require('express')
const app = express()
const port = 3000

//Criar rota padrão ou raiz
app.get('/', (req, res) => {
  res.send('Hello world!')
})

//Escutar a porta 3000
app.listen(port, () => {
  console.log(`Servidor rodando no endereço http://localhost:${port}`)
})
