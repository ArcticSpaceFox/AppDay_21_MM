import { Link, routes } from '@redwoodjs/router'

import Users from 'src/components/Admin/Users'

export const QUERY = gql`
  query USERS {
    users {
      id
      email
      name
      lastname
      imageUrl
      born
      minage
      maxage
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No users yet. '}
      <Link to={routes.adminNewUser()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ users }) => {
  return <Users users={users} />
}
