const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns usuário incluido!!</h1>')
})

app.get('/usuarios/:id', (req, resp) => {
    console.log(req.body)
    console.log(req.query)
    console.log(req.params.id)
    resp.send('<h1>Parabéns usuário alterado!!</h1>')
})

app.listen(3003)