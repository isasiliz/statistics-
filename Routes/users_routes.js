const Routes = require('express')
const routes = Routes()
const {userGet, userPost, userPut, userDelete} = require ('../Controllers/users_controller')

routes.get('/users', userGet)

routes.post('/users', userPost) 

routes.put('/users', userPut)

routes.delete('/users',userDelete)
   
  module.exports = routes