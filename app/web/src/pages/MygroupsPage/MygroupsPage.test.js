import { render } from '@redwoodjs/testing'

import MygroupsPage from './MygroupsPage'

describe('MygroupsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MygroupsPage />)
    }).not.toThrow()
  })
})
