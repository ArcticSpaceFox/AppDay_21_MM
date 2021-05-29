import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import QuestionForm from 'src/components/Admin/QuestionForm'

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
const UPDATE_QUESTION_MUTATION = gql`
  mutation UpdateQuestionMutation($id: Int!, $input: UpdateQuestionInput!) {
    updateQuestion(id: $id, input: $input) {
      id
      title
      description
      votes
      authorId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ question }) => {
  const [updateQuestion, { loading, error }] = useMutation(
    UPDATE_QUESTION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Question updated')
        navigate(routes.adminQuestions())
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      authorId: parseInt(input.authorId),
    })
    updateQuestion({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Question {question.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <QuestionForm
          question={question}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
