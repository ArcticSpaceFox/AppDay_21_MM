import { render } from '@redwoodjs/testing'

import GroupsPage from './GroupsPage'

describe('GroupsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GroupsPage />)
    }).not.toThrow()
  })
})
