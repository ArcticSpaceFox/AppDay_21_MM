import { render } from '@redwoodjs/testing'

import ImpressumPage from './ImpressumPage'

describe('ImpressumPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ImpressumPage />)
    }).not.toThrow()
  })
})
