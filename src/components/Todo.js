import React, { useState } from 'react'
import { Button } from 'antd'

function Todo(props) {
  const { todo, removeTodo } = props
  const [status, setStatus] = useState(todo.complete)

  const style = () => {
    return (
      { textDecoration: status ? "line-through" : "none" }
    )
  }

  const handleChange = () => {
    setStatus(!status)
  }

  return (
    <div className="item">
      <input type="checkbox" onChange={handleChange} defaultChecked={todo.complete}>
      </input><p style={style()}>{todo.title}</p>
    <Button type="default" onClick={() => removeTodo(todo.id)}>Delete</Button>
    </div>
  )
}

export default Todo
