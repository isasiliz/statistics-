const express = require('express')

const app = express()

let users = [
    {
      id: 0,
      displayName: "lizchu",
      Email: "liz.12@hotmail.com",
      age: 27,
    },
  {
    id: 1,
    displayName: "Dieguito",
    email: "diegol.23@icloud.com",
    age: 45,
  }
  ]

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
            this.app.get('/api/v1/users', function (req, res) {
            res.json( {
              count: users.length,
              users: users,
            })
            
          })
          
            this.app.post('/api/v1/users', function (req, res) {
            const body = req.body
            users.push (body)
            res.json("new user is create")  
          })
          
            this.app.put('/api/v1/users', function (req, res) {
            const query = req.query
            const body = req.body
            for (var count = 0;count < users.length; count++) {
              if  (users[count].id == query.id){
                users [count] = body
                }
            } 
            res.json('modificado')
          })
          
            this.app.delete('/api/v1/users', function (req, res) {
            const query = req.query
            delete users[query.id];
            users= users.filter(n=>n)
          
            res.json('Metodo DELETE')
            })
          
    }

    start() {
        this.app.listen(3000,() => {
          console.log ("Server is open")
    } ) }
} 
module.exports = Server