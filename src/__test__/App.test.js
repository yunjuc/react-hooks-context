import React from 'react'
import App from '../App'
import { render, fireEvent, screen } from '@testing-library/react'

describe("App component", () => {
  it('App component is rendered', () => {
    const { container } = render(<App />)

    expect(container).toMatchSnapshot()
  });

  it('title is presented', () => {
    const { container } = render(<App />)
    const title = container.querySelector('h1')

    expect(title).toHaveTextContent('ToDo App')
  });
})
