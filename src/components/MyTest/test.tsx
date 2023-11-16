import { render, screen } from '@testing-library/react'

import MyTest from '.'

describe('<MyTest />', () => {
  it('should render the heading', () => {
    const { container } = render(<MyTest />)

    expect(screen.getByRole('heading', { name: /MyTest/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})