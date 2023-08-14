import { useState } from 'react'
import Counter from './Components/Counter'
import Accordian from './Components/Accordian'

function App() {
  return (
    <>
        <div className = "mainapp-container" style = {{textAlign:'center'}} >
           <h2> Counter App  </h2>
            <Accordian />
        </div>
    </>
  )
}

export default App
