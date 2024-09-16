import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser( $email: String!, $password: String!) {
    addUser( email: $email, password: $password) {
      token
      user {
        _id
        email
        preferences {
            name
        }
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        preferences {
            name
        }
      }
    }
  }
`;

// New mutation to add preferences for the user
export const ADD_PREFERENCE = gql`
  mutation addPreference($userId: ID!, $name: String!) {
    addPreference(userId: $userId, name: $name) {
      _id
      email
      preferences {
        name
      }
    }
  }
`;

export const REMOVE_PREFERENCE = gql`
  mutation removePreference($userId: ID!, $name: String!) {
    removePreference(userId: $userId, name: $name) {
      _id
      email
      preferences {
        name
      }
    }
  }
`;
