const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    password: String
    name: String
    role: String
    url: String
    about_me: String
    
    
  }

  # type UserData {
  #   _id: ID!
    
  # }

  input ProfileData {
   
    name: String
    role: String
    url: String
    about_me: String
    
    
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    userData: [User]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateProfile(userData: ProfileData): User
    
  }
`;

module.exports = typeDefs;
