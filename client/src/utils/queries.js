import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      
    }
  }
`;

export const QUERY_COURSES = gql`
  query course {
    course {
      _id
      courseName
    }
  }
`;