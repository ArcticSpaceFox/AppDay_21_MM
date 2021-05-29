import { Link, routes } from '@redwoodjs/router'

import Responses from 'src/components/Admin/Responses'

export const QUERY = gql`
  query RESPONSES {
    responses {
      id
      votes
      questionId
      authorId
      content
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No responses yet. '}
      <Link to={routes.adminNewResponse()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ responses }) => {
  return <Responses responses={responses} />
}
