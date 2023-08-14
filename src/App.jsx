import { useState } from 'react'
import Counter from './Components/Counter'

function App() {

  return (
    <>
        <div className = "mainapp-container" style = {{textAlign:'center'}} >
           <h2> Counter App  </h2>
           <Counter />
        </div>
    </>
  )
}

export default App
