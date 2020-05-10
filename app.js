const porta = 8081

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const database = require('./database.js')
//bodyParser Config
app.use(bodyParser.urlencoded({ extended: true}))

app.get('/', (req, res) =>{
    res.send({ CRUD: 'CRUD System' });
});

app.get('/products/:id', (req, res) =>{
    res.send(database.getProduct(req.params.id))
})

app.get('/products', (req, res) =>{
    res.send(database.getAllProducts())
});

app.post('/products', (req,res) =>{
    const product = database.saveProduct({
        name: req.body.name,
        price: req.body.price
    })
    res.send(product)
})

app.put('/products/:id', (req,res) =>{
    const product = database.saveProduct({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    })
    res.send(product)
})

app.delete('/products/:id', (req, res)=>{
    const product = database.deleteProduct(req.params.id)
    res.send(product)
})



app.listen(porta, () =>{
    console.log(`Servidor rodando na porta ${porta}`);
})