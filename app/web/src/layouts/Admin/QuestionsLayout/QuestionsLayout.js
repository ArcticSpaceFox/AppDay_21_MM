import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const QuestionsLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.adminQuestions()} className="rw-link">
            Questions
          </Link>
        </h1>
        <Link
          to={routes.adminNewQuestion()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Question
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default QuestionsLayout