import { gql } from "@apollo/client";

export const GET_ALL_COMPONENTS = gql`
  query GetAllComponents {
    components {
    id
    code_uri
    price
  }
}`