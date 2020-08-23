import React, { useState } from 'react'
//import data from '../data'
import AddTodo from './AddTodo'
import Todo from './Todo'
import axios from 'axios'

function TodoList() {
  const [todos, setTodos] = useState([])

  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => setTodos(res.data))
    .catch(err => console.log(err))

  const removeTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(setTodos(todos.filter(el => el.id !== id)))
      .catch(err => console.log(err))
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
