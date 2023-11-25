import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'

import Home from '@/app/page'

describe('Home page', () => {
  it('should render Home page', () => {
    const { container, getByText } = render(<Home />)

    const element = getByText(/Hello World/i)

    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('text-3xl font-bold text-gray-900')
    expect(container.firstChild).toHaveClass('flex min-h-screen bg-gray-100')
  })
})
