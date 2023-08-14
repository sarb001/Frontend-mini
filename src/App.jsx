import { useState } from 'react'
import DarkMode from './Components/DarkMode'

function App() {
  return (
    <>
        <div className = "mainapp-container" style = {{textAlign:'center'}} >
            <DarkMode />
        </div>
    </>
  )
}

export default App
