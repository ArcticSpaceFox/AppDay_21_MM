import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Admin/ResponsesCell'

const DELETE_RESPONSE_MUTATION = gql`
  mutation DeleteResponseMutation($id: Int!) {
    deleteResponse(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const ResponsesList = ({ responses }) => {
  const [deleteResponse] = useMutation(DELETE_RESPONSE_MUTATION, {
    onCompleted: () => {
      toast.success('Response deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete response ' + id + '?')) {
      deleteResponse({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Votes</th>
            <th>Question id</th>
            <th>Author id</th>
            <th>Content</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {responses.map((response) => (
            <tr key={response.id}>
              <td>{truncate(response.id)}</td>
              <td>{truncate(response.votes)}</td>
              <td>{truncate(response.questionId)}</td>
              <td>{truncate(response.authorId)}</td>
              <td>{truncate(response.content)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminResponse({ id: response.id })}
                    title={'Show response ' + response.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditResponse({ id: response.id })}
                    title={'Edit response ' + response.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete response ' + response.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(response.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ResponsesList
