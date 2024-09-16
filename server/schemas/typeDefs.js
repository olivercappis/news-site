const { gql } = require('apollo-server-express');

// Define your schema
const typeDefs = gql`
  type News {
    title: String
    description: String
    url: String
    image_url: String
  }

  type User {
    _id: ID
    email: String!
    password: String!
    preferences: [Preference]
  }

  type Preference {
    name: String
  }

  type Query {
    users: [User]
    user(email: String!): User
    getGeneralNews: [News]
    searchNews(query: String!): [News] # Added searchNews here
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPreference(userId: ID!, name: String!): User
    removePreference(userId: ID!, name: String!): User
  }

  type Auth {
    token: String
    user: User
  }
`;

module.exports = typeDefs;