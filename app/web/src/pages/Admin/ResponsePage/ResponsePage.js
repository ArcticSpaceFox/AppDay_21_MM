import ResponsesLayout from 'src/layouts/Admin/ResponsesLayout'
import ResponseCell from 'src/components/Admin/ResponseCell'

const ResponsePage = ({ id }) => {
  return (
    <ResponsesLayout>
      <ResponseCell id={id} />
    </ResponsesLayout>
  )
}

export default ResponsePage
