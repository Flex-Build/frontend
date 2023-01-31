/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllComponents
// ====================================================

export interface GetAllComponents_components {
  __typename: "Component";
  id: string;
  code_hash: string;
  price: any;
}

export interface GetAllComponents {
  components: GetAllComponents_components[];
}
