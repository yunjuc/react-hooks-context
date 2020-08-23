import React, { createContext, useState } from 'react'

const TodoContext = createContext();

function TodoContextProvider(props) {
  const [todos, setTodos] = useState([
      {'id': 1, 'text': 'task 1', 'complete': false},
      {'id': 2, 'text': 'task 2', 'complete': true},
      {'id': 3, 'text': 'task 3', 'complete': false}
    ])

  const removeTodo = (id) => {
    const obj = todos.filter(el => el.id !== id)
    setTodos(obj)
  }

  const addTodo = (text) => {
    const id = todos.length === 0 ? 1 : todos[todos.length-1].id + 1
    const obj = {'id': id, 'text':text, 'complete': false}
    setTodos([...todos, obj])
  }

  return (
    <TodoContext.Provider value={{todos, removeTodo, addTodo}}>
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoContextProvider }
