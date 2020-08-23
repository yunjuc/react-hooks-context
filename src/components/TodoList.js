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
        {todos.map(item => (
          <Todo key={item.id} id={item.id} text={item.text} complete={item.complete}/>
          ))
        }
      </div>
    </div>
  )
}

export default TodoList
