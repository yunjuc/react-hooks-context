import React, { useState, useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import { Button, Input } from '@material-ui/core'

function AddTodo() {
  const { addTodo } = useContext(TodoContext)
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
    <form onSubmit={handleSubmit}>
      <Input type="text" onChange={handleChange} value={title} placeholder="Add todo item" required></Input>
      <Button id="add" variant="contained" color="primary" type="submit">Add</Button>
    </form>
  )
}

export default AddTodo
