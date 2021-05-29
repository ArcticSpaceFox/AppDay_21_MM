import ResponsesLayout from 'src/layouts/Admin/ResponsesLayout'
import EditResponseCell from 'src/components/Admin/EditResponseCell'

const EditResponsePage = ({ id }) => {
  return (
    <ResponsesLayout>
      <EditResponseCell id={id} />
    </ResponsesLayout>
  )
}

export default EditResponsePage
