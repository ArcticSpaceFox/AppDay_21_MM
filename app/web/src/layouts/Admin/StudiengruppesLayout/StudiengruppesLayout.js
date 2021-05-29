import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const StudiengruppesLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.adminStudiengruppes()} className="rw-link">
            Studiengruppes
          </Link>
        </h1>
        <Link
          to={routes.adminNewStudiengruppe()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Studiengruppe
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default StudiengruppesLayout
