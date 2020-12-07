import { gql } from "@apollo/client";

export const SEARCH_GIT = gql`
  query searchGit($searchQuery: String!) {
    search(query: $searchQuery, type: REPOSITORY, first: 10) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            name
            url
          }
        }
      }
    }
  }
`;
