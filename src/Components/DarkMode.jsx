import React, { useState } from 'react'
import './DarkMode.css' ;

const DarkMode = () => {
     const [color,setcolor] = useState('green');
     const handleTheme = () => {
        setcolor(color === 'green' ? 'red' : 'green');
     }

  return (
    <>
     <div className="darkmode-container">   
         <button id = "btn-data"
         style = {{backgroundColor:color }}
          onClick={handleTheme}> Toggle Theme  </button>
     </div>
    </>
  )
}

export default DarkMode