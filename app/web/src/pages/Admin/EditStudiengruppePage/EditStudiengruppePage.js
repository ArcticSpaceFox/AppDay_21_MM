import StudiengruppesLayout from 'src/layouts/Admin/StudiengruppesLayout'
import EditStudiengruppeCell from 'src/components/Admin/EditStudiengruppeCell'

const EditStudiengruppePage = ({ id }) => {
  return (
    <StudiengruppesLayout>
      <EditStudiengruppeCell id={id} />
    </StudiengruppesLayout>
  )
}

export default EditStudiengruppePage
