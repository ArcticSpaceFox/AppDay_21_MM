import TagsLayout from 'src/layouts/Admin/TagsLayout'
import TagCell from 'src/components/Admin/TagCell'

const TagPage = ({ id }) => {
  return (
    <TagsLayout>
      <TagCell id={id} />
    </TagsLayout>
  )
}

export default TagPage
