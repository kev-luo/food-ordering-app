import { gql } from "@apollo/client";

export const FETCH_RESTAURANTS_QUERY = gql`
  {
    restaurants {
      id
      name
      description
      image {
        url
      }
    }
  }
`