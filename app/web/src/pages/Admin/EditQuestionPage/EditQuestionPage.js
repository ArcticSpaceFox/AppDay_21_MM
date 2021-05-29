import QuestionsLayout from 'src/layouts/Admin/QuestionsLayout'
import EditQuestionCell from 'src/components/Admin/EditQuestionCell'

const EditQuestionPage = ({ id }) => {
  return (
    <QuestionsLayout>
      <EditQuestionCell id={id} />
    </QuestionsLayout>
  )
}

export default EditQuestionPage
