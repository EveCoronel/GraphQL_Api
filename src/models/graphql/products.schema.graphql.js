const {buildSchema} = require("graphql")
const schema = buildSchema(`
type Product {
  _id: ID!
  title: String!
  thumbnail: String
  stock: Int
  price: Int!
  description: String
  category: String
  cant: Int
  updatedAt: String
}

type MultipleProductResponse {
  success: Boolean,
  statusCode: Int,
  data: [Product]!
}

type SingleProductResponse {
  success: Boolean,
  statusCode: Int,
  data: Product
}

type ObjectResponse {
  success: Boolean,
  statusCode: Int,
  data: mongoResponse
}

type mongoResponse {
  acknowledged: Boolean,
  matchedCount: Int,
  modifiedCount: Int,
  upsertedId: String
}

input ProductInput {
  title: String!
  thumbnail: String
  stock: Int
  price: Int!
  description: String
  category: String
}

type Query {
  getProducts: MultipleProductResponse
  getProductById(_id: ID!): SingleProductResponse
  getProductsByCategory(category: String): MultipleProductResponse
}

type Mutation {
  saveProduct(data: ProductInput): SingleProductResponse
  updateProduct(_id: ID!, data: ProductInput): ObjectResponse
  deleteProduct(_id: ID!): ObjectResponse
}

`)

module.exports = schema