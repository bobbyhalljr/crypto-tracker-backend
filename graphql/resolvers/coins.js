const { coin } = require('../../models/');

module.exports = {
    Query: {
        async coins(_, { id, name, symbol, price, likes, comments, chats }){
            await coin.find()
        }
    },
    Mutations: {
        async createComment(_, { id, body }, context){
            
        }
    }
}