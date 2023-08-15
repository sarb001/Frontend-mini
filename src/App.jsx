import { useState } from 'react';
import TableColoriser from './Components/TableColoriser';

function App() {
  return (
    <>
        <div className = "mainapp-container" style = {{textAlign:'center',fontSize:'25px'}} >
          <TableColoriser />
        </div>
    </>
  )
}

export default App
