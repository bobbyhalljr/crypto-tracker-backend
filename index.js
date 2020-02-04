const { ApolloServer, Pubsub } = require('apollo-server');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const mongoURI = require('./config/keys');
const typeDefs = require('./graphql/typdefs');
const resolvers = require('./graphql/resolvers')

dotenv.config()

// const pubsub = new Pubsub();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req, pubsub })
})

mongoose.connect(mongoURI, { useNewUrlParser: true }).then(() => {
    return server.listen({ port: process.env.PORT || 4000 }).then(res => {
      console.log(`Server running at ${res.url}`);
    });
});
