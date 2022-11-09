const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    password: String
    
  }

  type UserData {
    _id: ID!
    name: String!
    display_role: Boolean
    role: Stringr
    role_interest: String
    url: url
    about_me: String
    matches: [users]
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    userData: UserData
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    
  }
`;

module.exports = typeDefs;
