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
query Courses {
  courses {
    _id
    courseName
    imagePath
    alt
    description
    holes {
      _id
      number
      par
      yardage
    }
  }
}
`;

export const QUERY_SINGLE_COURSE = gql`
query SingleCourse($courseId: ID!) {
  course(courseId: $courseId) {
    courseName
    description
    holes {
      number
      par
      yardage
    }
  }
}`

export const QUERY_ALL_ROUNDS = gql`
query Rounds {
  round {
    username
    date
    course {
      _id
    }
    scores
  }
}
`;

export const QUERY_PLAYER_ROUND = gql`
query Courses {
  course {
    _id
    courseName
    imagePath
    alt
    description
    holes {
      _id
      number
      par
      yardage
      score
    }
  }
}
`;