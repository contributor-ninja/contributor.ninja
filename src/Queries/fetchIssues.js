import gql from 'graphql-tag';

export const fetchIssuesQuery = gql`
query fetchIssues {
  columns {
    id
    language {
      name
    }
    issues {
      title
      body
      _repo
      _org
      _avatarUrl
      html_url
    }
  }
}
`;
