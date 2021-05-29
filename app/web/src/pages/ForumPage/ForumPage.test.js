import { render } from '@redwoodjs/testing'

import ForumPage from './ForumPage'

describe('ForumPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ForumPage />)
    }).not.toThrow()
  })
})
