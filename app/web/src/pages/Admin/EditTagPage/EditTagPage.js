import TagsLayout from 'src/layouts/Admin/TagsLayout'
import EditTagCell from 'src/components/Admin/EditTagCell'

const EditTagPage = ({ id }) => {
  return (
    <TagsLayout>
      <EditTagCell id={id} />
    </TagsLayout>
  )
}

export default EditTagPage
