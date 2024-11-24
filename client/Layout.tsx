import { Outlet } from 'react-router-dom'
import Navigation from './components/Navigation'
import { useState } from 'react'

function App() {
  const [basket, setBasket] = useState<string>('state')

  return (
    <>
      <Navigation />
      <main className="container mx-auto">
        <Outlet context={{ basket, setBasket }} />
      </main>
    </>
  )
}

export default App
