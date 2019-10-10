import gql from 'graphql-tag';

export const fetchIssuesQuery = gql`
query fetchIssues {
  dashboard {
    id

    language {
      name
    }

    issues {
      title
      body
      htmlUrl
      state

      user {
        avatarURL
      }
    }
  }
}
`;
