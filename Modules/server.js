const express = require('express')
const mongoose = require('mongoose')
const app = express()

class Server {
    constructor () {
        this.app = app
        this.middleware()
        this.route()
    } 

    middleware (){
        this.app.use(express.json())
    }

    route(){
        this.app.use('/api/v1', require('../Routes/users_routes'))
    }

    start() {
        this.app.listen(3000,() => {
            console.log ("Server is open")
            this.conectarBasedatos()
        }
    )}

    async conectarBasedatos() {
        try {
            await mongoose.connect('mongodb+srv://lizcisasi:0VFWw9EPpoxoTb06@cluster0.di2p8m8.mongodb.net/test')
            console.log('conecto')
        } catch (error) {
            console.log(error)
        }
    }
} 

module.exports = Server