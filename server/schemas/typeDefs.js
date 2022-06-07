const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    rounds: [Round]!
  }

  scalar Date

  type Round {
    _id: ID
    playerName(username: String!): User
    date: Date
    course: Course
  }

  type Course {
    _id: ID
    courseName: String
    holes: [Hole]!
  }

  type Hole {
    _id: ID
    number: Int
    par: Int
    yardage: Int
    score: Int    
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