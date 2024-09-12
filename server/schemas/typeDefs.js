const typeDefs = `
  type Preference {
    name: String!
  }

  type User {
    email: String!
    password: String!
    preferences: [Preference]
  }

  type Query {
    users: [User]
    user(email: String!): User
  }

  type Mutation {
    addUser(email: String!, password: String!): User
    login(email: String!, password: String!): Auth
  }

  type Auth {
    token: String
    user: User
  }
`;

module.exports = typeDefs;
