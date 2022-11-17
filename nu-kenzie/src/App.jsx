import { useState } from 'react'
import './App.css'
import { Figure } from './components/Opening Page/Figure/figure'
import { Section } from './components/Opening Page/Section/section'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Section/>
      <Figure/>
    </div>
  )
}

export default App
