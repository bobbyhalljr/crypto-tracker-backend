const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
    id: String,
    username: String,
    password: String,
    email: String,
    token: String,
    createdAt: String,

})


module.exports = model('User', userSchema, 'users')