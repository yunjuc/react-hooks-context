import React, { useState } from 'react'
import { Button } from 'antd'

function AddTodo({ addTodo }) {
  const[title, setTitle] = useState('')

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    addTodo(title)
    setTitle('')
  }

  return (
    <div className="inputbar">
      <input type="text" onChange={handleChange} value={title} placeholder="Add todo item" required></input>
      <Button type="primary" onClick={handleClick}>Add</Button>
    </div>
  )
}

export default AddTodo
