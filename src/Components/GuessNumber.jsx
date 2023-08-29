import React, { useEffect, useState } from 'react'
import '../styles/App.css' ;

const GuessNumber = () => {

  const [Toggle,setToggle] = useState(false);

    const toggleTheme = () => {
     setToggle((prev) => !prev);
    }

  return (
    <>
        <div className =  {`App ${Toggle ? 'darkmode' : 'lightmode'}`}>
            <h2>  Light-Dark Mode </h2>
              <div className="lightdark-mode">
                 <h3> Try to toggle the Theme and see the change!! </h3>
              </div>
              <button onClick={toggleTheme}> Toggle </button>
        </div>
    </>
  )
}

export default GuessNumber