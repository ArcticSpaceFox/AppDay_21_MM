import Studiengruppe from 'src/components/Admin/Studiengruppe'

export const QUERY = gql`
  query FIND_STUDIENGRUPPE_BY_ID($id: Int!) {
    studiengruppe: studiengruppe(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Studiengruppe not found</div>

export const Success = ({ studiengruppe }) => {
  return <Studiengruppe studiengruppe={studiengruppe} />
}
