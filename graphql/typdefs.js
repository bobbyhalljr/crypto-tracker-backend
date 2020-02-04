const { gql } = require('apollo-server');

module.exports = gql`
type User {
    id: ID!
    username: String!
    photo: String
    password: String!
    createdAt: String!
    token: String!
    email: String!
}

input RegisterInput {
    username: String!
    email: String!
    password: String!
}

type Coin {
    id: ID!
    name: String!
    symbol: String!
    price: Float!
    likes: Int!
    favorites: [Favorite] 
    chats: [Chat]
}

type Favorite {
    id: ID!
    name: String!
    symbol: String!
    price: Float!
}

type Chat {
    id: ID!
    message: String
    sender: User!
    reciever: User!
    createdAt: String!
}

type subscription {
    newMessage: Chat
}

type Query {
    users: [User]!
    coins: Coin!
}

type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!

}
`;