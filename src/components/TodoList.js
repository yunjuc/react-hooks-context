import React, { useState, useEffect } from 'react'
import data from '../data'
import AddTodo from './AddTodo'
import Todo from './Todo'

localStorage.setItem('todos', JSON.stringify(data))

function TodoList() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos'))
  )

  const removeTodo = (id) => {
    const obj = todos.filter(el => el.id !== id)
    setTodos(obj)
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const addTodo = (text) => {
    const id = todos.length === 0 ? 1 : todos[todos.length-1].id + 1
    const obj = {'id': id, 'text':text, 'complete': false}
    setTodos([...todos, obj])
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos))
  // }, [todos])

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
