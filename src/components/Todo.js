import React, { useState, useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import { Paper } from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'

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
    <Paper className="todo-item">
      <input type="checkbox" onChange={handleChange} defaultChecked={complete}>
      </input><p style={style()}>{title}</p>
    <HighlightOffIcon onClick={() => removeTodo(id)}/>
    </Paper>
  )
}

export default Todo
