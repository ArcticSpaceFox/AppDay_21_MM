import { Link, routes } from '@redwoodjs/router'

import Studiengruppes from 'src/components/Admin/Studiengruppes'

export const QUERY = gql`
  query STUDIENGRUPPES {
    studiengruppes {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No studiengruppes yet. '}
      <Link to={routes.adminNewStudiengruppe()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ studiengruppes }) => {
  return <Studiengruppes studiengruppes={studiengruppes} />
}
