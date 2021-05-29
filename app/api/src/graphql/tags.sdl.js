export const schema = gql`
  type Tag {
    id: Int!
    name: String!
    gruppen: [Studiengruppe]!
    questions: [Question]!
  }

  type Query {
    tags: [Tag!]!
    tag(id: Int!): Tag
  }

  input CreateTagInput {
    name: String!
  }

  input UpdateTagInput {
    name: String
  }

  type Mutation {
    createTag(input: CreateTagInput!): Tag!
    updateTag(id: Int!, input: UpdateTagInput!): Tag!
    deleteTag(id: Int!): Tag!
  }
`
