import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      genres
    }
  }
`;

export const QUERY_USERDATA = gql`
  query userData {
    userData {
      _id
      name
      role
      url
      about_me
      matches
    }
  }

`

export const QUERY_USERS = gql`
  query User {
    users {
      username
      _id
      email
      name
      role
      url
      about_me
      matches
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      name
      role
      url
      about_me
      matches
    }
  }
`;
