const {Schema, model} = require('mongoose')

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        
    },
    dob: {
        type: Date,
    },
    role: {
        type: String,
        enum: ['ADMIN_ROLE', 'USER_ROLE'],
        required: true,
    },
    isEnabled: {
        type: Boolean,
        default: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },

})

module.exports = model('user', UserSchema)