import gql from "graphql-tag";

export const fetchIssuesQuery = gql`
  query fetchIssues {
    dashboard {
      id

      language {
        name
      }

      issues(states: OPEN) {
        title
        body
        htmlUrl

        user {
          avatarURL
        }
      }
    }
  }
`;
