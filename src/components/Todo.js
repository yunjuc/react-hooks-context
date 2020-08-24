import React, { useState, useContext } from 'react'
import { Button } from 'antd'
import { TodoContext } from '../contexts/TodoContext'

function Todo(props) {
  const { id, complete, title } = props.todo
  const { removeTodo } = useContext(TodoContext)
  const [status, setStatus] = useState(complete)

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
      <input type="checkbox" onChange={handleChange} defaultChecked={complete}>
      </input><p style={style()}>{title}</p>
      <Button type="default" onClick={() => removeTodo(id)}>Delete</Button>
    </div>
  )
}

export default Todo
