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
    favorites: [Favorite]!
    subChats: [Chat]!
}

input RegisterInput {
    username: String!
    email: String!
    password: String!
}

type Coin {
    id: String!
    name: String!
    symbol: String!
    price: Float!
    likes: Int!
    comments: [Comment]
    chats: [Chat]
}

type Comment {
    id: ID!
    username: User!
    createdAt: String!
    body: String!
}

type Favorite {
    id: ID!
    name: String!
    symbol: String!
    price: Float!
}

type Chat {
    id: ID!
    message: String!
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
    getFavorites: [Favorite]!
    getComments: [Comment]!
}

type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    likeCoin(coinId: ID!): Coin!
    favoriteCoin(coinId: ID!): Coin!
    createComment(coinId: ID!, body: String!): Coin!
    deleteComment(coinID: ID!): Coin!
}
`;