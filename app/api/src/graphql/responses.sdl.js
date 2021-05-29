export const schema = gql`
  type Response {
    id: Int!
    votes: Int!
    question: Question
    questionId: Int
    author: User!
    authorId: Int!
    content: String!
  }

  type Query {
    responses: [Response!]!
    response(id: Int!): Response
  }

  input CreateResponseInput {
    votes: Int!
    questionId: Int
    authorId: Int!
    content: String!
  }

  input UpdateResponseInput {
    votes: Int
    questionId: Int
    authorId: Int
    content: String
  }

  type Mutation {
    createResponse(input: CreateResponseInput!): Response!
    updateResponse(id: Int!, input: UpdateResponseInput!): Response!
    deleteResponse(id: Int!): Response!
  }
`
