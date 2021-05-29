import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const TagsLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.adminTags()} className="rw-link">
            Tags
          </Link>
        </h1>
        <Link to={routes.adminNewTag()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Tag
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default TagsLayout
