import AddTodo from '../../components/AddTodo'
import { render, fireEvent, screen } from '@testing-library/react'
import { TodoContext } from '../../contexts/TodoContext'

describe("AddTodo component", () => {
  const addTodo = jest.fn()

  it('AddTodo component is rendered', () => {
    const { container } = render(
      <TodoContext.Provider value={{addTodo}}>
        <AddTodo />
      </TodoContext.Provider>)

    expect(container).toMatchSnapshot()
  })

  it('addtodo is called', () => {
    const { container, getByRole } = render(
      <TodoContext.Provider value={{addTodo}}>
        <AddTodo />
      </TodoContext.Provider>)

    fireEvent.click(getByRole('button'))
    expect(addTodo).toHaveBeenCalled()
  })
})
