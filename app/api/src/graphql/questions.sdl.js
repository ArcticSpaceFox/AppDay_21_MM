export const schema = gql`
  type Question {
    id: Int!
    title: String!
    description: String!
    tags: [Tag]!
    votes: Int!
    author: User!
    authorId: Int!
    answers: [Response]!
  }

  type Query {
    questions: [Question!]!
    question(id: Int!): Question
  }

  input CreateQuestionInput {
    title: String!
    description: String!
    votes: Int!
    authorId: Int!
  }

  input UpdateQuestionInput {
    title: String
    description: String
    votes: Int
    authorId: Int
  }

  type Mutation {
    createQuestion(input: CreateQuestionInput!): Question!
    updateQuestion(id: Int!, input: UpdateQuestionInput!): Question!
    deleteQuestion(id: Int!): Question!
  }
`
