import { Link, routes } from '@redwoodjs/router'

const MygroupsPage = () => {
  return (
    <>
      <h1>MygroupsPage</h1>
      <p>
        Find me in <code>./web/src/pages/MygroupsPage/MygroupsPage.js</code>
      </p>
      <p>
        My default route is named <code>mygroups</code>, link to me with `
        <Link to={routes.mygroups()}>Mygroups</Link>`
      </p>
    </>
  )
}

export default MygroupsPage
