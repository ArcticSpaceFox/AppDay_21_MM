import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/Admin/StudiengruppesCell'

const DELETE_STUDIENGRUPPE_MUTATION = gql`
  mutation DeleteStudiengruppeMutation($id: Int!) {
    deleteStudiengruppe(id: $id) {
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

const Studiengruppe = ({ studiengruppe }) => {
  const [deleteStudiengruppe] = useMutation(DELETE_STUDIENGRUPPE_MUTATION, {
    onCompleted: () => {
      toast.success('Studiengruppe deleted')
      navigate(routes.adminStudiengruppes())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete studiengruppe ' + id + '?')) {
      deleteStudiengruppe({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Studiengruppe {studiengruppe.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{studiengruppe.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{studiengruppe.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditStudiengruppe({ id: studiengruppe.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(studiengruppe.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Studiengruppe
