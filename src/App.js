import React from 'react'
import 'antd/dist/antd.css'
import TodoList from './components/TodoList'
import { TodoContextProvider } from './contexts/TodoContext'

function App() {
  return (
    <div className="App">
      <h1>ToDo App</h1>
      <TodoContextProvider>
        <TodoList />
      </TodoContextProvider>
    </div>
  )
}

export default App;
