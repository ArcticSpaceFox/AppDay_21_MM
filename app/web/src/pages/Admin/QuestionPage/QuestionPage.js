import QuestionsLayout from 'src/layouts/Admin/QuestionsLayout'
import QuestionCell from 'src/components/Admin/QuestionCell'

const QuestionPage = ({ id }) => {
  return (
    <QuestionsLayout>
      <QuestionCell id={id} />
    </QuestionsLayout>
  )
}

export default QuestionPage
