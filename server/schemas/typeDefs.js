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
    course: Course
  }

  type Course {
    _id: ID
    courseName: String
    imagePath: String
    alt: String
    description: String
    holes: [Hole]
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
    course: [Course]
    holes: [Hole]
    rounds(username: String): [Round]
    round: [Round]
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addRound(playerName: String!, date: Date, course: String): Auth
    addScore(score: Int!) : Hole
  }
`;

module.exports = typeDefs;