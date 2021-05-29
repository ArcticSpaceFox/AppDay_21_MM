import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/Admin/TagsCell'

const DELETE_TAG_MUTATION = gql`
  mutation DeleteTagMutation($id: Int!) {
    deleteTag(id: $id) {
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

const Tag = ({ tag }) => {
  const [deleteTag] = useMutation(DELETE_TAG_MUTATION, {
    onCompleted: () => {
      toast.success('Tag deleted')
      navigate(routes.adminTags())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete tag ' + id + '?')) {
      deleteTag({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Tag {tag.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{tag.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{tag.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditTag({ id: tag.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(tag.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Tag
