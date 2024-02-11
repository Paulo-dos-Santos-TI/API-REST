import express from 'express'
import SelecaoController from './app/controllers/SelecaoController.js'

const app = express()

//Indicar para o express ler body com json
app.use(express.json())

//Rotas
app.get('/selecoes', SelecaoController.index)
app.get('/selecoes/:id', SelecaoController.show)
app.post('/selecoes', SelecaoController.store)
app.put('/selecoes/:id', SelecaoController.update)
app.delete('/selecoes/:id', SelecaoController.delete)

export default app
