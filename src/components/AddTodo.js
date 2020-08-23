import React, { useState } from 'react'

function AddTodo({ addTodo }) {
  const[title, setTitle] = useState('')

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(title)
    setTitle('')
  }

  return (
    <form className="inputbar" onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={title} placeholder="Add todo item" required></input>
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTodo
