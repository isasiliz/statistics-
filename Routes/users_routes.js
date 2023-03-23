const Routes = require('express')
const routes = Routes()

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

routes.get('/users', function (req, res) {
    res.json( {
      count: users.length,
      users: users,
    })
})

routes.post('/users', function (req, res) {
    const body = req.body
    users.push (body)
    res.json("new user is create")  
})

routes.put('/users', function (req, res) {
    const query = req.query
    const body = req.body
    for (var count = 0;count < users.length; count++) {
      if  (users[count].id == query.id){
        users [count] = body
        }
    } 
    res.json('modificado')
})

routes.delete('/users', function (req, res) {
    const query = req.query
    delete users[query.id];
    users= users.filter(n=>n)
  
    res.json('Metodo DELETE')
})
  
  
  module.exports = routes