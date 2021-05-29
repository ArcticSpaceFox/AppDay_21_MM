import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import QuestionForm from 'src/components/Admin/QuestionForm'

import { QUERY } from 'src/components/Admin/QuestionsCell'

const CREATE_QUESTION_MUTATION = gql`
  mutation CreateQuestionMutation($input: CreateQuestionInput!) {
    createQuestion(input: $input) {
      id
    }
  }
`

const NewQuestion = () => {
  const [createQuestion, { loading, error }] = useMutation(
    CREATE_QUESTION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Question created')
        navigate(routes.adminQuestions())
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      authorId: parseInt(input.authorId),
    })
    createQuestion({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Question</h2>
      </header>
      <div className="rw-segment-main">
        <QuestionForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewQuestion
