import React, { useState, useContext } from 'react'
import { Button } from 'antd'
import { TodoContext } from '../contexts/TodoContext'

function AddTodo() {
  const { addTodo } = useContext(TodoContext)
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
