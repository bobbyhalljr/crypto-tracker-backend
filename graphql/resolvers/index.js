const userResolvers = require('./users');
const coinResolvers = require('./coins');

module.exports = {
    Query: {
        ...userResolvers.Query,
        ...coinResolvers.Query,
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...coinResolvers.Mutation,
    }
}