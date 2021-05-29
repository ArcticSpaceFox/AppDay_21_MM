import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/Admin/QuestionsCell'

const DELETE_QUESTION_MUTATION = gql`
  mutation DeleteQuestionMutation($id: Int!) {
    deleteQuestion(id: $id) {
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

const Question = ({ question }) => {
  const [deleteQuestion] = useMutation(DELETE_QUESTION_MUTATION, {
    onCompleted: () => {
      toast.success('Question deleted')
      navigate(routes.adminQuestions())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete question ' + id + '?')) {
      deleteQuestion({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Question {question.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{question.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{question.title}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{question.description}</td>
            </tr>
            <tr>
              <th>Votes</th>
              <td>{question.votes}</td>
            </tr>
            <tr>
              <th>Author id</th>
              <td>{question.authorId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditQuestion({ id: question.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(question.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Question
