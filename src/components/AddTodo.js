import React, { useState } from 'react'
import { Button } from 'antd'

function AddTodo(props) {
  const[text, setText] = useState([])

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div className="inputbar">
      <input type="text" onChange={handleChange} value={text} placeholder="Add todo item"></input>
      <Button type="primary" onClick={() => props.addTodo(text)}>Add</Button>
    </div>
  )
}

export default AddTodo
