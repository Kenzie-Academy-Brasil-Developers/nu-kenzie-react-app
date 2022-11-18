import { useState } from 'react'
import './App.css'
import { Form } from './components/Home Page/Form/form'
import { Header } from './components/Home Page/Header/header'
import { Figure } from './components/Opening Page/Figure/figure'
import { Section } from './components/Opening Page/Section/section'

function App() {
  
  
  return (
    
    // <div className="container App">
    //   <Section/>
    //   <Figure/>
    // </div>
    
    <>
      <Header/>
      <Form/>
    </>
    
  )
}

export default App
