import React, { useState, useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'

function AddTodo() {
  const { addTodo } = useContext(TodoContext)
  const[text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
    <form className="inputbar" onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={text} placeholder="Add todo item" required></input>
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTodo
