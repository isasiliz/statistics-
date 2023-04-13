const Routes = require('express')
const routes = Routes()
const { getUser, createUser, updateUser, deleteUser } = require ('../Controllers/users_controller')
const { check } = require ('express-validator')
const checkValidationResult = require('../Middleware/check_validation_result')


routes.get('/user', getUser)

routes.post('/user',[
    check('username','Nombre de usuario no válido').isLength({min:6,max:8}),
    check('email','Email no válido').isEmail(),
    check ('password','La contraseña debe cumplir con al menos una mayúscula, minuscula un caracter especial y un número').isStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  }),
  checkValidationResult

], createUser)

routes.put('/user',[
    check('username','Nombre de usuario no válido').isLength({min:6,max:8}),
    check('email','Email no válido').isEmail(),
    check ('password','La contraseña debe cumplir con al menos una mayúscula, minuscula un caracter especial y un número').isStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  }),
  checkValidationResult

], updateUser)

routes.delete('/user', deleteUser)
   
  module.exports = routes