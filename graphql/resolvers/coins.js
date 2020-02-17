const { coin } = require('../../models/');

module.exports = {
    Query: {
        async coins(_, { id, name, symbol, price, likes, comments, chats }){
            await coin.find()
        },
        async users(_, { username, token }){
            await this.users.find()
        }
    },
    Mutations: {
        async createComment(_, { id, body }, context){

        }
    }
}