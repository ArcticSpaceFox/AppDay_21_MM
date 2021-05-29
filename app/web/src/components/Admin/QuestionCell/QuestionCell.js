import Question from 'src/components/Admin/Question'

export const QUERY = gql`
  query FIND_QUESTION_BY_ID($id: Int!) {
    question: question(id: $id) {
      id
      title
      description
      votes
      authorId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Question not found</div>

export const Success = ({ question }) => {
  return <Question question={question} />
}
