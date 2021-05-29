import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import ResponseForm from 'src/components/Admin/ResponseForm'

import { QUERY } from 'src/components/Admin/ResponsesCell'

const CREATE_RESPONSE_MUTATION = gql`
  mutation CreateResponseMutation($input: CreateResponseInput!) {
    createResponse(input: $input) {
      id
    }
  }
`

const NewResponse = () => {
  const [createResponse, { loading, error }] = useMutation(
    CREATE_RESPONSE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Response created')
        navigate(routes.adminResponses())
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      questionId: parseInt(input.questionId),
      authorId: parseInt(input.authorId),
    })
    createResponse({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Response</h2>
      </header>
      <div className="rw-segment-main">
        <ResponseForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewResponse
