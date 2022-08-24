const mongoose = require('mongoose')
const { json } = require('express')
const morgan = require('morgan')
const express = require('express')
const router = require('./routes/routes')
const app = express()

app.use(json())
app.use(morgan('dev'))

app.use(express.static('./client/vue-project/public'))
app.use(router)

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
