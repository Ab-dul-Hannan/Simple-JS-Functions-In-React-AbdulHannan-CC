import React from 'react'
import Navbar from './components/navbar/navbar.jsx'
import Counter from './components/counter/counter.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="practice-section">
        <Counter/>
      </div>
    </>
  )
}

export default App