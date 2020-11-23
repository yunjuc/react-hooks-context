import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>React App</title>
      </Head>
      {children}
    </div>
  )
}
