const { ApolloServer } = require('apollo-server');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const typeDefs = require('./graphql/typdefs');
const resolvers = require('./graphql/resolvers')
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

dotenv.config()

// const pubsub = new Pubsub()
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req })
})

// Connection URL
const url = 'mongodb+srv://bobby:Milo0215@crypto-tracker-backend-ofdi0.mongodb.net/test?retryWrites=true&w=majority';

// Database Name
const dbName = 'crypto-tracker';

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Use connect method to connect to the Server
client.connect(function(err) {
  // assert.equal(null, err);
  console.log("Connected successfully to mongodb DB");

  const db = client.db(dbName);

  client.close();
});



// .then(() => {
    server.listen({ port: process.env.PORT || 4000 })
    .then(res => {
      console.log(`Server running at ${res.url}`)
      // console.log('mongodb database connected!')
    })
    .catch(error => console.log(error))
// })
// .catch(error => console.log(error))
