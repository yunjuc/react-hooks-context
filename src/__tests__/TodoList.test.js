import React from 'react'
import { shallow } from 'enzyme'
import TodoList from '../components/TodoList'
import AddTodo from '../components/AddTodo'
import Todo from '../components/Todo'

describe("TodoList component", () => {
  it('AddTodo component is rendered', () => {
    const wrapper = shallow(<TodoList />);
    const addTodo = wrapper.find(AddTodo).exists();
    expect(addTodo).toBe(true);
  })

  it('Todo component is rendered', () => {
    const wrapper = shallow(<TodoList />);
    const todo = wrapper.find(Todo).exists();
    expect(todo).toBe(true);
  })
})
