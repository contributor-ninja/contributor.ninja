import gql from 'graphql-tag';

export const fetchUserQuery = gql`
query fetchUser {
    user {
      login
      isConnected
    }
}
`;
