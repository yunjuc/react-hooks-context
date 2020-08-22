import React, { useState } from 'react'
import todos from '../data'
import AddTodo from './AddTodo'
import Todo from './Todo'

function TodoList() {
  const [item, setItem] = useState(todos)

  const removeTodo = (id) => {
    const obj = item.filter(el => el.id !== id)
    setItem(obj)
  }

  const addTodo = (text) => {
    const id = item.length === 0 ? 1 : item[item.length-1].id + 1
    const obj = {'id': id, 'text':text, 'complete': false}
    setItem([...item, obj])
  }

  return (
    <div>
      <AddTodo addTodo={addTodo}/>
      <div className="listContainer">
        {item.map(item => (
          <Todo key={item.id} id={item.id} text={item.text} complete={item.complete} removeTodo={removeTodo}/>
          ))
        }
      </div>
    </div>
  )
}

export default TodoList
