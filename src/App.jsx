import { useState } from 'react';
import GuessNumber from './Components/GuessNumber';

function App() {
  return (
    <>
        <div className = "mainapp-container" style = {{textAlign:'center',fontSize:'25px'}} >
          <GuessNumber />
        </div>
    </>
  )
}

export default App
