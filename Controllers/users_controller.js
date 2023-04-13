const User = require('../Model/user_model')
const bcrypt = require('bcrypt')

const getUser = async function (req, res) {
    try {

        // esto es para ejecutar tareas en diferentes hilos, concurrency.
        const [users, count] = await Promise.all([
            await User.find(),
            await User.countDocuments()     
        ])

        res.json({
            count: count,
            data: users
        })
        
    } catch (error) {
        res.status(500).json(error)
    }
}

const createUser = async function (req, res) {
  
    try {
        const body = req.body
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(body.password, salt)
        body.password = hashedPassword
        const newUser = User(body)

        const userSaved = await newUser.save()
        res.json(userSaved)
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateUser = async function (req, res) {

    const body = req.body
    const id = req.query.id
    
    // es una forma de evitar que se modifiquen ciertos campos como password, etc.
    const { password, isEnabled, isVerified, role, ...bodyFilter} = body

    //esto es para que el resultado de la modificacion sea el actualizado.
    const options = {
        new: true
    }

    //el trycatch es para el manejo correcto de errores
    try {
        // aca modificamos el user con id, y valor bodyfilter.
        // el await es para que espere una respuesta, necesito hacer que la funcion sea async.
        const updateUser = await User.findByIdAndUpdate(id, bodyFilter, options)

        //devolvermos el valor moficiado si todo salio bien al cliente(postman).
        res.json(body)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteUser = async function (req, res) {
   const id = req.query.id
   
   try {
        const deletedUser = await User.findByIdAndDelete(id)
        res.json(deletedUser)
   } catch (error) {
        res.status(500).json(error.message)
   }
}

module.exports = {getUser, createUser, updateUser, deleteUser}