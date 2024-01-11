const productManager = require("./productManager");

const express = require("express");
const app = express();

app.get("/ping", (req, res) => {
    res.send("pong");
})

app.get("/products", (req, res) => {
    // Req

    // Llamado
    let productos = productManager.getProducts()

    // Res
    res.send(productos);
})

app.listen(3000, () => {
    console.log("Aplicación funcionando en el puerto 3000")
})