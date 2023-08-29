import { useState } from 'react';
import '../src/styles/App.css';
import Toast from './Components/Toast';

function App() {

  return (
    <>
        <div className = "mainapp-container" style = {{textAlign:'center',fontSize:'25px'}} >
            <h3>  Toast Popup </h3> 
            <Toast />
        </div>
    </>
  )
}

export default App
