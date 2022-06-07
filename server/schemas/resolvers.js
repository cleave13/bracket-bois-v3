const { Course, Hole, Round } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      users: async () => {
        return User.find().populate('rounds');
      },
      user: async (parent, { username }) => {
        return User.findOne({ username }).populate('thoughts');
      },
      round: async () => {
        return Round.find({});
      },
      course: async (parent, { _id }) => {
        const params = _id ? { _id } : {};
        return Course.find(params);
      },
      hole: async (parent, { _id }) => {
        const params = _id ? { _id } : {};
        return Hole.find(params);
      },
    },

    Mutation: {
      addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('No user found with this email address');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(user);
  
        return { token, user };
      },
      addRound: async (parent, {  }, context) => {
        if (context.user) {
        const round = await Round.create({

        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { rounds: round._id } }
        );

        return thought;
      }
      }
    },

};

module.exports = resolvers;