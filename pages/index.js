import Layout from '../src/Layout'
import TodoList from '../src/components/TodoList'

export default function Index() {
  return (
    <Layout>
      <div className="App">
        <h1>ToDo App</h1>
        <TodoList />
      </div>
    </Layout>
  )
}
