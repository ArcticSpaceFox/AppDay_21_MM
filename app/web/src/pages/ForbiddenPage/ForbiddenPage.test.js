import { render } from '@redwoodjs/testing'

import ForbiddenPage from './ForbiddenPage'

describe('ForbiddenPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ForbiddenPage />)
    }).not.toThrow()
  })
})
