const typeDefs = `
  type Preference {
    name: String!
  }

  type User {
    email: String!
    password: String!
    preferences: [Preference]
  }

  type Article {
    title: String
    description: String
    url: String
    image_url: String
    categories: [String]
  }

  type Query {
    users: [User]
    user(email: String!): User
    getNewsByPreferences(userId: ID!): [Article]
    getGeneralNews: [Article]
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPreference(userId: ID!, name: String!): User
    getNewsByPreferences: [Article]
    getGeneralNews: [Article]
  }

  type Auth {
    token: String
    user: User
  }
`;

module.exports = typeDefs;
