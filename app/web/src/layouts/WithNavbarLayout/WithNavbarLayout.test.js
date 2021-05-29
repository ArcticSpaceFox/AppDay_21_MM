import { render } from '@redwoodjs/testing'

import WithNavbarLayout from './WithNavbarLayout'

describe('WithNavbarLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WithNavbarLayout />)
    }).not.toThrow()
  })
})
