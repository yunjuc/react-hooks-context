import React from 'react'
import TodoList from '../../components/TodoList'
import { render, fireEvent, screen } from '@testing-library/react'
import { TodoContext } from '../../contexts/TodoContext'

describe("TodoList component", () => {
  const todos = [{id: 1, title:'hello', complete: false},
                {id: 2, title:'world', complete: false}]

  it('TodoList component is rendered', () => {
    const { container } = render(
      <TodoContext.Provider value={{todos}}>
        <TodoList />
      </TodoContext.Provider>)

    expect(container).toMatchSnapshot()
    expect(container).toHaveTextContent('hello')
    expect(container).toHaveTextContent('world')
  })
})
