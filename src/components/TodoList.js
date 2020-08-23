import React, { useState, useEffect } from 'react'
import AddTodo from './AddTodo'
import Todo from './Todo'
import axios from 'axios'

function TodoList() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => setTodos(res.data))
  }, [])

  // const removeTodo = (id) => {
  //   axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  //     .then(setTodos(todos.filter(el => el.id !== id)))
  // }

  const removeTodo = (id) => {
    setTodos(todos.filter(el => el.id !== id))
  }

  const addTodo = (title) => {
    const id = todos.length === 0 ? 1 : todos[todos.length-1].id + 1
    const obj = {'id': id, 'title':title, 'complete': false}
    setTodos([...todos, obj])
  }

  return (
    <div>
      <AddTodo addTodo={addTodo}/>
      <div className="listContainer">
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo}/>
          ))
        }
      </div>
    </div>
  )
}

export default TodoList
