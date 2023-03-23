const express = require('express')
const app = express()
app.use (express.json()) //xq tiraba undefined el body

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

app.get('/', function (req, res) {
  res.json( {
    count: users.length,
    users: users,
  })
  
})

app.post('/', function (req, res) {
  const body = req.body
  users.push (body)
  res.json("new user is create")  
})

app.put('/', function (req, res) {
  const query = req.query
  const body = req.body
  for (var count = 0;count < users.length; count++) {
    if  (users[count].id == query.id){
      users [count] = body
      
    }
  } 
  res.json('modificado')
  
})

app.delete('/', function (req, res) {
  const query = req.query
  delete users[query.id];
  users= users.filter(n=>n)

  res.json('Metodo DELETE')
  
})


app.listen(3000,() => {
  console.log ("Server is open")
})