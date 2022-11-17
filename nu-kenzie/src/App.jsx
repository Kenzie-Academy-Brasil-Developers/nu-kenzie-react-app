import { useState } from 'react'
import './App.css'
import { Section } from './components/Opening Page/Section/section'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Section/>
    </div>
  )
}

export default App
