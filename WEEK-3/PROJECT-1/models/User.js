const mongoose = require('mongoose')
const Schema = mongoose.Schema

// User Schema
const userSchema = new Schema({
    user: {
        type: String,
        required: true,
        unique: true
    },
 
})

module.exports = mongoose.model('User', userSchema)