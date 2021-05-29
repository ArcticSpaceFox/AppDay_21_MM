import StudiengruppesLayout from 'src/layouts/Admin/StudiengruppesLayout'
import StudiengruppeCell from 'src/components/Admin/StudiengruppeCell'

const StudiengruppePage = ({ id }) => {
  return (
    <StudiengruppesLayout>
      <StudiengruppeCell id={id} />
    </StudiengruppesLayout>
  )
}

export default StudiengruppePage
