const { Course, Hole, Round, User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { Kind, GraphQLScalarType } = require('graphql');


const resolvers = {
    Query: {
      users: async () => {
        return User.find().populate('rounds');
      },
      user: async (parent, { username }) => {
        return User.findOne({ username }).populate('rounds');
      },
      round: async () => {
        return Round.find({});
      },
      courses: async () => {
        return Course.find({});
      },
      course: async (parent, { courseId }) => {
        return Course.findOne({ _id: courseId });
      },
      holes: async (parent, { _id }) => {
        const params = _id ? { _id } : {};
        return Hole.find(params);
      },
    },

    Date: new GraphQLScalarType({
      name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value)
    },
    serialize(value) {
      return value.getTime()
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(+ast.value)
      }
      return null
    }
    }),

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
      addRound: async (parent, { playerName, date, course }, context) => {
        if (context.user) {
        const round = await Round.create({
          playerName,
          date,
          course,
        });

        

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { rounds: round._id } }
        );

        return round;
      }
      },
      addScore: async (parent, { score }) => {
          const hole = await Hole.updateOne({
            score
          });

          await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { scores: hole.score } }
          );

          return hole;
        }
    },
      
};

module.exports = resolvers;
