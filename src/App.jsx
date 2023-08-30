import { useState } from 'react';
import '../src/styles/App.css';
import PasswordStrongth from './Components/PasswordStrongth';


function App() {
  return (
    <>
        <div className = "mainapp-container" 
        style = {{textAlign:'center',fontSize:'23px'}} >
            <h3>  Password Strength  </h3> 
            <PasswordStrongth />
        </div>
    </>
  )
}

export default App
