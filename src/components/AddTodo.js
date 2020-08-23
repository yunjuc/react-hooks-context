import React, { useState } from 'react'

function AddTodo({ addTodo }) {
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
