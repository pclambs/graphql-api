const { gql } = require('apollo-server')

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
    favoriteMovies: [Movie]
  }

  type Movie {
    id: ID!
    title: String!
    releaseDate: Int!
    isInTheaters: Boolean!
  }

  type Query {
    users: [User!]!   
    user(id: ID!): User
    movies: [Movie!]!
    movie(title: String!): Movie!
  }

  enum Nationality {
    AMERICAN
    AUSTRALIAN
    BRITISH
    CANADIAN
  }
`

module.exports = { typeDefs }