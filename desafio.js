const Contenedor = require('./Contenedor.js')
const {test, product} = require('./Contenedor.js')
const express = require('express');
const app = express(); 
const PUERTO = 8080;
const fs = require('fs');
const { match } = require('assert');

app.get('/productos', async(req, res) => {
    const data = await product.getAll()
    res.send(data) 
})

app.get('/productoRandom', (req, res) => {
    let idRandom = Match.ceil(Math.random() * (3 - 1) + 1)
    console.log('IdRamdom', idRandom)
    const products = await product.getById(idRandom)
    console.log ("products", products)
    res.send(products.title)
})

app.listen(PUERTO, () => {
    console.log("servidor escuchando puerto")
})
