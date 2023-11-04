import { gql } from "../__generated__";

export const PRODUCT_BY_ID = gql(`
  query getProductById($id: ID!) {
    Product(id: $id) {
       brand
       colour
       description
       height
       id
       img_url
       length
       model_code
       name
       power
       price
       quantity
       weight
       width
    }
  }
`);
