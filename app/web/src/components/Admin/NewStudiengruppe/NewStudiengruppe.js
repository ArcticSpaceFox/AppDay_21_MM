import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import StudiengruppeForm from 'src/components/Admin/StudiengruppeForm'

import { QUERY } from 'src/components/Admin/StudiengruppesCell'

const CREATE_STUDIENGRUPPE_MUTATION = gql`
  mutation CreateStudiengruppeMutation($input: CreateStudiengruppeInput!) {
    createStudiengruppe(input: $input) {
      id
    }
  }
`

const NewStudiengruppe = () => {
  const [createStudiengruppe, { loading, error }] = useMutation(
    CREATE_STUDIENGRUPPE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Studiengruppe created')
        navigate(routes.adminStudiengruppes())
      },
    }
  )

  const onSave = (input) => {
    createStudiengruppe({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Studiengruppe</h2>
      </header>
      <div className="rw-segment-main">
        <StudiengruppeForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewStudiengruppe
