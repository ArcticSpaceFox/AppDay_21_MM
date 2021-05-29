import { Link, routes } from '@redwoodjs/router'

import Questions from 'src/components/Admin/Questions'

export const QUERY = gql`
  query QUESTIONS {
    questions {
      id
      title
      description
      votes
      authorId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No questions yet. '}
      <Link to={routes.adminNewQuestion()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ questions }) => {
  return <Questions questions={questions} />
}
