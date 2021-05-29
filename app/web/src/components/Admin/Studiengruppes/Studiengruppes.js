import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Admin/StudiengruppesCell'

const DELETE_STUDIENGRUPPE_MUTATION = gql`
  mutation DeleteStudiengruppeMutation($id: Int!) {
    deleteStudiengruppe(id: $id) {
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

const StudiengruppesList = ({ studiengruppes }) => {
  const [deleteStudiengruppe] = useMutation(DELETE_STUDIENGRUPPE_MUTATION, {
    onCompleted: () => {
      toast.success('Studiengruppe deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete studiengruppe ' + id + '?')) {
      deleteStudiengruppe({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {studiengruppes.map((studiengruppe) => (
            <tr key={studiengruppe.id}>
              <td>{truncate(studiengruppe.id)}</td>
              <td>{truncate(studiengruppe.name)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminStudiengruppe({ id: studiengruppe.id })}
                    title={'Show studiengruppe ' + studiengruppe.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditStudiengruppe({ id: studiengruppe.id })}
                    title={'Edit studiengruppe ' + studiengruppe.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete studiengruppe ' + studiengruppe.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(studiengruppe.id)}
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

export default StudiengruppesList
