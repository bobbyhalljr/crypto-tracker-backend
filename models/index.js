const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
    id: String,
    username: String,
    photo: String,
    password: String,
    createdAt: String,
    token: String,
    email: String,
    favorites: [
        {
            id: String,
            name: String,
            symbol: String,
            price: Number,
        }
    ],
    subChats: [
        {
            id: String,
            message: String,
            createdAt: Date,
            user: Schema.Types.ObjectId,
            // ref: 'user'
        }
    ],
})


const coinSchema = new Schema({
    id: String,
    name: String,
    symbol: String,
    price: Number,
    likes: Number,
    chat: [
        {
            id: String,
            message: String,
            sender: Schema.Types.ObjectId,
            reciever: Schema.Types.ObjectId,
            createdAt: Date,
            // ref: './models'
        }
    ],
})

const favoriteSchema = new Schema({
    id: String,
    name: String,
    symbol: String,
    price: Number,
})

// might need, might not

// const chatSchema = new Schema({
//     id: String,
//     messages: [String],
//     sender: Schema.ObjectId,
//     reciever: Schema.ObjectId,
//     ref: 'users',
//     createdAt: Date
// })

User = model('User', userSchema, 'users'),
coin = model('coin', coinSchema, 'coins'),
favorite = model('favorite', favoriteSchema, 'favorites'),
// chat = model('chat', chatSchema, 'chats'),

module.exports = {
   User,
   coin,
   favorite
}