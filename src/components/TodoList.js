import React, { useContext } from 'react'
import AddTodo from './AddTodo'
import Todo from './Todo'
import { TodoContext } from '../contexts/TodoContext'

function TodoList() {
  const { todos } = useContext(TodoContext)

  return (
    <div>
      <AddTodo/>
      <div className="listContainer">
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
          ))
        }
      </div>
    </div>
  )
}

export default TodoList
