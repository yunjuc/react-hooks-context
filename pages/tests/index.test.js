import Index from '../Index'
import { TodoContext } from '../../src/contexts/TodoContext'
import { render, fireEvent, screen } from '@testing-library/react'

describe("App component", () => {
  const todos = [{id: 1, title:'hello', complete: false},
                {id: 2, title:'world', complete: false}]

  it('App is rendered and title is presented', () => {
    const { container } = render(
      <TodoContext.Provider value={{todos}}>
        <Index />
      </TodoContext.Provider>)
    const title = container.querySelector('h1')

    expect(title).toHaveTextContent('ToDo App')
  });
})
