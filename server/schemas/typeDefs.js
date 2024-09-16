const typeDefs = `
  type Preference {
    name: String!
  }

  type User {
    _id: ID
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
    searchNews(searchTerm: String!): [Article]  # New search query
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
