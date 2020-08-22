import React, { useState } from 'react'
import { Button } from 'antd'

function Todo(props) {
  const { id, complete, text, removeTodo } = props
  const [status, setStatus] = useState(complete)

  const getStyle = () => {
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
      </input><p style={getStyle()}>{text}</p>
      <Button type="default" onClick={() => removeTodo(id)}>Delete</Button>
    </div>
  )
}

export default Todo
