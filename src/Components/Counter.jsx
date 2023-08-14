import React, { useState } from 'react'

const Counter = () => {

    const [counter,setcounter] = useState(0);

    const handleinc = () => {
        setcounter(counter + 1);
    }

    const handledec = () => {
        setcounter(counter - 1);
    }

    const resetall = () => {
        setcounter(0);
    }
  return (
      <div className="main-counter">
         <button  onClick = {handleinc}> Add ++ </button>
           <span> {counter} </span>
         <button  onClick = {handledec}> Subtract --  </button>
            <div className="reset-btn" style = {{padding:'2%'}}>
                <button  onClick = {resetall}> Reset </button>
            </div>
      </div>
  )
}

export default Counter