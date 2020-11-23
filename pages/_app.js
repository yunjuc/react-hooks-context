import '../styles/global.css'
import { TodoContextProvider } from '../src/contexts/TodoContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TodoContextProvider>
        <Component {...pageProps} />
      </TodoContextProvider>
    </>
  )
}

export default MyApp
