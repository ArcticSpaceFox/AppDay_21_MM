export const schema = gql`
  type User {
    id: Int!
    email: String!
    name: String
    lastname: String
    imageUrl: String
    born: DateTime!
    minage: Int!
    maxage: Int!
    createdAt: DateTime!
    Studiengruppen: [Studiengruppe]!
    questions: [Question]!
    Response: [Response]!
  }

  type Query {
    users: [User!]!
    user(id: Int!): User
  }

  input CreateUserInput {
    email: String!
    name: String
    lastname: String
    imageUrl: String
    born: DateTime!
    minage: Int!
    maxage: Int!
  }

  input UpdateUserInput {
    email: String
    name: String
    lastname: String
    imageUrl: String
    born: DateTime
    minage: Int
    maxage: Int
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: Int!, input: UpdateUserInput!): User!
    deleteUser(id: Int!): User!
  }
`
