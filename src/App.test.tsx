import { render, screen } from '@testing-library/react'
import { App } from './App'

test('loads and displays greeting', async () => {
  render(<App />)
  const linkElement = screen.getByRole('heading')
  expect(linkElement).toBeInTheDocument()
})
