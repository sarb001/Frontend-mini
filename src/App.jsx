import { useState } from 'react'
import DarkMode from './Components/DarkMode'

function App() {
  return (
    <>
        <div className = "mainapp-container" style = {{textAlign:'center',fontSize:'25px'}} >
            <DarkMode />
        </div>
    </>
  )
}

export default App
