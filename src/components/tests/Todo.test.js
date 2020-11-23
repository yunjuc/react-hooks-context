import Todo from '../../components/Todo'
import { render, fireEvent, screen } from '@testing-library/react'
import { TodoContext } from '../../contexts/TodoContext'

describe("Todo component", () => {
  const data = {id:1, title: 'hello', complete: false}
  const removeTod = jest.fn()

  it('Todo component is rendered', () => {
    const { container } = render(
      <TodoContext.Provider value={{removeTod}}>
        <Todo todo={data}/>
      </TodoContext.Provider>)

    expect(container).toMatchSnapshot()
    expect(container).toHaveTextContent('hello')
  })

  it('toggle strike-through style based on complete status', () => {
    const { container } = render(
      <TodoContext.Provider value={{removeTod}}>
        <Todo todo={data}/>
      </TodoContext.Provider>)

    const check = container.querySelector('p')
    expect(check).toHaveStyle(`text-decoration: none`)

    fireEvent.click(container.querySelector('input'))
    expect(check).toHaveStyle(`text-decoration: line-through`)
  })
})
