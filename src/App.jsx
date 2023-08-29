import { useState } from 'react';
import '../src/styles/App.css';
import ProgressBar from './Components/ProgressBar';

function App() {

  return (
    <>
        <div className = "mainapp-container" style = {{textAlign:'center',fontSize:'25px'}} >
            <h3>  Progress Bar  </h3> 
            <ProgressBar />
        </div>
    </>
  )
}

export default App
