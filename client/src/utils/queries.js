import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query GetUser($email: String!) {
    user(email: $email) {
      email
      preferences {
        name
      }
    }
  }
`;

export const GET_GENERAL_NEWS = gql`
  query GetGeneralNews {
    getGeneralNews {
      title
      description
      url
      image_url
    }
  }
`;

export const GET_SEARCH_NEWS = gql`
  query SearchNews($query: String!) {
    searchNews(query: $query) {
      title
      description
      url
      image_url
    }
  }
`;