import { useState } from 'react'
import './App.css'
import { Balance } from './components/Home Page/Balance List/balance'
import { Form } from './components/Home Page/Form/form'
import { Header } from './components/Home Page/Header/header'
import { TotalValue } from './components/Home Page/Total Value/totalValue'
import { Figure } from './components/Opening Page/Figure/figure'
import { Section } from './components/Opening Page/Section/section'

function App() {
  const [balanceData, setBalanceData] = useState([])

  function addBalanceData (newBalanceData) {
    setBalanceData([...balanceData, newBalanceData])
  }
  
  const [page, setPage] = useState(true)

  function openingPage () {
    setPage(false)
  }

  function homePage () {
    setPage(true)
  }
  
  return (
    page ? 
    (<div className="container App">
      <Section openingPage={openingPage}/>
      <Figure/>
    </div>) : 
    
    (<div className='bg-white'>
      <Header homePage={homePage}/>
      <div className='container layout'>
        <section>
          <Form addBalanceData={addBalanceData}/>
          <TotalValue/>
        </section>
        <Balance balanceData={balanceData}/>
      </div>
    </div>)
    
  )
}

export default App
