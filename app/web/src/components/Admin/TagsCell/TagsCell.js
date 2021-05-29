import { Link, routes } from '@redwoodjs/router'

import Tags from 'src/components/Admin/Tags'

export const QUERY = gql`
  query TAGS {
    tags {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No tags yet. '}
      <Link to={routes.adminNewTag()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ tags }) => {
  return <Tags tags={tags} />
}
