const { Course, Hole, Round } = require('../models');

const resolvers = {
    Query: {
      users: async () => {
        return User.find().populate('rounds');
      },
      user: async (parent, { username }) => {
        return User.findOne({ username }).populate('thoughts');
      },
    }
}