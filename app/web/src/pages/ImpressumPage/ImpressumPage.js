import { Link, routes } from '@redwoodjs/router'

const ImpressumPage = () => {
  return (
    <>
      <h1>ImpressumPage</h1>
      <p>
        Find me in <code>./web/src/pages/ImpressumPage/ImpressumPage.js</code>
      </p>
      <p>
        My default route is named <code>impressum</code>, link to me with `
        <Link to={routes.impressum()}>Impressum</Link>`
      </p>
    </>
  )
}

export default ImpressumPage
