const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    rounds: [Round]!
  }

  type Round {
    _id: ID
    course: [Course]!
  }

  type Course {
    _id: ID
    courseName: String
    holes: Int

  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    rounds(username: String): [Round]
    round(roundId: ID!): Round
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;