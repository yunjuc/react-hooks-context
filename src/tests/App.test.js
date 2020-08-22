import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import TodoList from '../components/TodoList'


describe("App component", () => {

  it('TodoList component is rendered', () => {
    const wrapper = shallow(<App />);
    const counter = wrapper.find(TodoList).exists();
    expect(counter).toBe(true);
  })

})
