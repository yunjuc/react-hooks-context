import { useContext } from 'react'
import AddTodo from './AddTodo'
import Todo from './Todo'
import { TodoContext } from '../contexts/TodoContext'
import { Grid } from '@material-ui/core';

function TodoList() {
  const { todos } = useContext(TodoContext)

  return (
    <div className="todo-container">
      <AddTodo/>
      <Grid>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
          ))
        }
      </Grid>
    </div>
  )
}

export default TodoList
