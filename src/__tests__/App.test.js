import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import TodoList from '../components/TodoList'

describe("App component", () => {
  it('App title exists', () => {
    const wrapper = shallow(<App />);
    const title = wrapper.find('h1').text();
    expect(title).toBe('ToDo App');
  });

  it('TodoList component is rendered', () => {
    const wrapper = shallow(<App />);
    const todoList = wrapper.find(TodoList).exists();
    expect(todoList).toBe(true);
  })
})
