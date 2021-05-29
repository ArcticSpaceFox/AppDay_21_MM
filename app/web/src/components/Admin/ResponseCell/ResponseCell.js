import Response from 'src/components/Admin/Response'

export const QUERY = gql`
  query FIND_RESPONSE_BY_ID($id: Int!) {
    response: response(id: $id) {
      id
      votes
      questionId
      authorId
      content
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Response not found</div>

export const Success = ({ response }) => {
  return <Response response={response} />
}
