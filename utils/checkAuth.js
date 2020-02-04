const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apolloe-server');

module.exports = context => {
    const authHeader = context.req.headers.authorization;
    if (authHeader){
        if (token) {
            try {
                const user = jwt.verify(token, SECRET_KEY);
                return user;
            } catch (error) {
                throw new AuthenticationError('Authorization header must be provided')
            }
        }
    }
}