const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    rounds: [Round]!
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

  scalar Date

  type Round {
    _id: ID
    username: String!
    date: Date
    course: Course
    scores: [Int]
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