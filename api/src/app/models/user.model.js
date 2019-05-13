const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        type: String,
        required: true,
        enum: ['admin', 'user'],
        default: 'user'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const UserModel = mongoose.model('Customer', UserSchema)

module.exports = UserModel