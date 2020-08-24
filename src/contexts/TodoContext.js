import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const TodoContext = createContext();

function TodoContextProvider(props) {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => setTodos(res.data))
      .catch(err => console.log(err))
  }, [])

  const removeTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(setTodos(todos.filter(el => el.id !== id)))
      .catch(err => console.log(err))
  }

  const addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {'title': title, 'complete': false})
      .then(res => setTodos([...todos, {'id': res.data.id, 'title': title, 'complete': false}]))
      .catch(err => console.log(err))
  }

  return (
    <TodoContext.Provider value={{todos, removeTodo, addTodo}}>
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoContextProvider }
