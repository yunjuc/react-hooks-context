import React, { useState } from 'react'
import { Button } from 'antd'

function AddTodo({ addTodo }) {
  const[text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleClick = () => {
    addTodo(text)
    setText('')
  }

  return (
    <div className="inputbar">
      <input type="text" onChange={handleChange} value={text} placeholder="Add todo item"></input>
      <Button type="primary" onClick={handleClick}>Add</Button>
    </div>
  )
}

export default AddTodo
