export const schema = gql`
  type Studiengruppe {
    id: Int!
    name: String!
    members: [User]!
    tags: [Tag]!
  }

  type Query {
    studiengruppes: [Studiengruppe!]!
    studiengruppe(id: Int!): Studiengruppe
  }

  input CreateStudiengruppeInput {
    name: String!
  }

  input UpdateStudiengruppeInput {
    name: String
  }

  type Mutation {
    createStudiengruppe(input: CreateStudiengruppeInput!): Studiengruppe!
    updateStudiengruppe(
      id: Int!
      input: UpdateStudiengruppeInput!
    ): Studiengruppe!
    deleteStudiengruppe(id: Int!): Studiengruppe!
  }
`
