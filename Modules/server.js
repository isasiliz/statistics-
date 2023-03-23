const express = require('express')

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
        }
    )}
} 

module.exports = Server