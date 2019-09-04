const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password:{}
})

module.exports = mongoose.model('register', postSchema);