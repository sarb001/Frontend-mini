import React from 'react'
import '../styles/App.css' ;

const ProgressBar = () => {
  return (
        <div className="progress-container">
             <progress id = "bar" value="5" min = "1" max = "100" >  </progress>
             <div className = "buttons" >
                <div>  <button id = "start-btn"> Start </button> </div>
                <div>  <button id = "pause-btn"> Pause  </button> </div>
                <div>  <button id = "reset-btn"> Reset </button></div>
               
             </div>
             <div className="rangebar">
                 <label> Speed : 1 </label>
                <input type  = "range" value= "1"  min = "1" max = "10" />
             </div>
        </div>
  )
}

export default ProgressBar