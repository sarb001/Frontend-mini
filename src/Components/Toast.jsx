import React, { useState } from 'react'

const Toast = () => {

     const [selectvalue,setselectvalue] = useState('');

     const handlechange = (e) => {
         setselectvalue(e.target.value);
         console.log('selected value -',selectvalue);
         console.log('selected value11 -',e.target);
     }

  return (
    <div className="toast-container">
        <form>
            <select value = {selectvalue} onChange = {handlechange}> 
                <option value = "left" > Left  </option>
                <option value = "right"> Right </option>
            </select>
         <br />
            <select name = "toast"> 
                <option value = "top" > Top </option>
                <option value = "bottom"> Bottom </option>
            </select>
         <br />
            <select name = "toast"> 
                <option value = "success"> Success </option>
                <option value = "info">    Info </option>
                <option value = "warning"> Warning </option>
                <option value = "error">   Error </option>
         </select>
         </form>
         <br />

                <div>
                     <input id = "message" type = "text"  placeholder='Enter your Message..' />
                </div>

            <div>
                <label> Duration </label>
                <input type = "range"   />
            </div>

            <button> Show Toast </button>

    </div>
  )
}

export default Toast