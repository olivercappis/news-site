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
