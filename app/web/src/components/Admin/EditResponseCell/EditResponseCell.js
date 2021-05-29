import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import ResponseForm from 'src/components/Admin/ResponseForm'

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
const UPDATE_RESPONSE_MUTATION = gql`
  mutation UpdateResponseMutation($id: Int!, $input: UpdateResponseInput!) {
    updateResponse(id: $id, input: $input) {
      id
      votes
      questionId
      authorId
      content
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ response }) => {
  const [updateResponse, { loading, error }] = useMutation(
    UPDATE_RESPONSE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Response updated')
        navigate(routes.adminResponses())
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      questionId: parseInt(input.questionId),
      authorId: parseInt(input.authorId),
    })
    updateResponse({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Response {response.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ResponseForm
          response={response}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
