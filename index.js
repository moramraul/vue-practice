const mongoose = require('mongoose')
const { json } = require('express')
const express = require('express')

const app = express()
app.use(json())

const url = 'mongodb://localhost:27017/Magic-Cards'

const start = async () => {
    mongoose.connect(url)
        .then(() => {
            console.log("Base de datos de Mongo conectada");
        })
        .catch((err) => {
            console.error(err);
        });
    app.listen(3000, () => {
        console.log("Listening on 3000")
    })
}

start()
