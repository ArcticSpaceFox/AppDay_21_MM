import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import TagForm from 'src/components/Admin/TagForm'

export const QUERY = gql`
  query FIND_TAG_BY_ID($id: Int!) {
    tag: tag(id: $id) {
      id
      name
    }
  }
`
const UPDATE_TAG_MUTATION = gql`
  mutation UpdateTagMutation($id: Int!, $input: UpdateTagInput!) {
    updateTag(id: $id, input: $input) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ tag }) => {
  const [updateTag, { loading, error }] = useMutation(UPDATE_TAG_MUTATION, {
    onCompleted: () => {
      toast.success('Tag updated')
      navigate(routes.adminTags())
    },
  })

  const onSave = (input, id) => {
    updateTag({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Tag {tag.id}</h2>
      </header>
      <div className="rw-segment-main">
        <TagForm tag={tag} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
