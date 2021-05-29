import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/Admin/ResponsesCell'

const DELETE_RESPONSE_MUTATION = gql`
  mutation DeleteResponseMutation($id: Int!) {
    deleteResponse(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Response = ({ response }) => {
  const [deleteResponse] = useMutation(DELETE_RESPONSE_MUTATION, {
    onCompleted: () => {
      toast.success('Response deleted')
      navigate(routes.adminResponses())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete response ' + id + '?')) {
      deleteResponse({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Response {response.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{response.id}</td>
            </tr>
            <tr>
              <th>Votes</th>
              <td>{response.votes}</td>
            </tr>
            <tr>
              <th>Question id</th>
              <td>{response.questionId}</td>
            </tr>
            <tr>
              <th>Author id</th>
              <td>{response.authorId}</td>
            </tr>
            <tr>
              <th>Content</th>
              <td>{response.content}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditResponse({ id: response.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(response.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Response
