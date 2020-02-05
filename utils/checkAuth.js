const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server');

module.exports = context => {
    const authHeader = context.req.headers.authorization;
    if (authHeader){
        if (token) {
            try {
                // add secret key in production
                const user = jwt.verify(token);
                return user;
            } catch (error) {
                throw new AuthenticationError('Authorization header must be provided')
            }
        }
    }
}