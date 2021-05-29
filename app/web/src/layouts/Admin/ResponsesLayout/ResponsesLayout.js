import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const ResponsesLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.adminResponses()} className="rw-link">
            Responses
          </Link>
        </h1>
        <Link
          to={routes.adminNewResponse()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Response
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default ResponsesLayout
