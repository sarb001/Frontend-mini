import React, { useState } from 'react'

const DarkMode = () => {
     const [color,setcolor] = useState('green');
     const [bgcolor,setbgcolor] = useState('red');
     const handleTheme = () => {
        setcolor(color === 'green' ? 'red' : 'green');
        setbgcolor(bgcolor === 'red' ? 'green' : 'red');
     }

  return (
    <>
     <div className="darkmode-container" style = {{backgroundColor:bgcolor }}>   
            <button id = "btn-data"
                style = {{backgroundColor:color }}
                onClick={handleTheme}> Toggle Theme  
            </button>
     </div>
    </>
  )
}

export default DarkMode