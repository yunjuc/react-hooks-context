import React, { useState, useEffect } from 'react'
import data from '../data'
import AddTodo from './AddTodo'
import Todo from './Todo'

//use localstorage to save and load data
let todoData
if (localStorage.getItem('todos')) {
  todoData = JSON.parse(localStorage.getItem('todos'))
} else {
  todoData = data
}

function TodoList() {
  const [todos, setTodos] = useState(todoData)

  const removeTodo = (id) => {
    const obj = todos.filter(el => el.id !== id)
    setTodos(obj)
  }

  const addTodo = (text) => {
    const id = todos.length === 0 ? 1 : todos[todos.length-1].id + 1
    const obj = {'id': id, 'text':text, 'complete': false}
    setTodos([...todos, obj])
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

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
