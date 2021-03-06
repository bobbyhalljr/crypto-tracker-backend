const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');

const { User } = require('../../models');
const { validateRegisterInput, validateLoginInput } = require('../../utils/validators')

const generateToken = (user) => {
    return jwt.sign({
        id: user.id,
        email: user.email,
        username: user.username,
        password: user.password,
        createdAt: new Date().toISOString()

    }, process.env.SECRET_KEY, { expiresIn: '1d' })
}

module.exports = {
    Mutation: {
      async login(_, { username, password }) {
        // Validate Form data
        const { errors, valid } = validateLoginInput(username, password);
        if (!valid) {
          throw new UserInputError("Errors", errors);
        }
        const user = await User.findOne({ username });
        if (!user) {
          errors.general = "User not found";
          throw new UserInputError("User not found", errors);
        } else {
          const match = await bcrypt.compare(password, user.password);
          if (!match) {
            errors.general = "Wrong credntials";
            throw new UserInputError("Wrong credentials", errors);
          } else {
            const token = generateToken(user);
            return {
              ...user._doc,
              id: user._id,
              token
            };
          }
        }
      },
      async register(_, { registerInput: { username, email, password, }}) {
        // Validate User data
        const { errors, valid } = validateRegisterInput(
          username,
          email,
          password,
        );
        if (!valid) {
          throw new UserInputError("Errors", errors);
        }
        // Make sure user doesn't exist
        const user = await User.findOne({ username });
        if (user) {
          throw new UserInputError("Username is taken", {
            errors: {
              username: "This username is taken"
            }
          });
        }
        //Hash password and create auth token
        password = await bcrypt.hash(password, 12);
        const newUser = new User({
          email,
          username,
          password,
          createdAt: new Date().toISOString()
        });
        const res = await newUser.save();
        const token = generateToken(res);
        return {
          ...res._doc,
          id: res._id,
          token
        };
      }
    }
  };