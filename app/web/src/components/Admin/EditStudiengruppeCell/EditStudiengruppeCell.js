import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import StudiengruppeForm from 'src/components/Admin/StudiengruppeForm'

export const QUERY = gql`
  query FIND_STUDIENGRUPPE_BY_ID($id: Int!) {
    studiengruppe: studiengruppe(id: $id) {
      id
      name
    }
  }
`
const UPDATE_STUDIENGRUPPE_MUTATION = gql`
  mutation UpdateStudiengruppeMutation(
    $id: Int!
    $input: UpdateStudiengruppeInput!
  ) {
    updateStudiengruppe(id: $id, input: $input) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ studiengruppe }) => {
  const [updateStudiengruppe, { loading, error }] = useMutation(
    UPDATE_STUDIENGRUPPE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Studiengruppe updated')
        navigate(routes.adminStudiengruppes())
      },
    }
  )

  const onSave = (input, id) => {
    updateStudiengruppe({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Studiengruppe {studiengruppe.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <StudiengruppeForm
          studiengruppe={studiengruppe}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
