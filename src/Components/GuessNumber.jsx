import React, { useEffect, useState } from 'react'

const GuessNumber = () => {

   const [randomnum,setrandomnum] = useState(); 
   const [insertednumber,setinsertednumber] = useState(1);

    const [low,setLow] = useState(false);
    const [high,sethigh] = useState(false);
    const [correct,setCorrect] = useState(false);

   useEffect(() => {
      setrandomnum(Math.round( 100 * Math.random()));
   },[])

   const checkdata = (e) => {
        e.preventDefault();
         console.log('randome numer -',randomnum);
         if(insertednumber  < randomnum){      
            console.log(' inserted number should be Greater ');
             setLow(true);
             sethigh(false);
          }else if(insertednumber > randomnum){  
            sethigh(true);
            setLow(false);
            console.log( ' Inserted Number should be  Lower ');
          }else {
            setCorrect(true);
            setLow(false);
            sethigh(false);
            console.log( ' Right Number ');
          }
   };

   const resetdata = () => {  
      setrandomnum(Math.round( 100 * Math.random()));
      setCorrect(false);
      setLow(false);
      sethigh(false);
      setinsertednumber(1);
   }

  return (
    <>
        <div className = "maincontainer">
            <h2>  Guess Number here  </h2>
              <span> Guess the Number between 0 and 100 </span>
              <form onSubmit={checkdata}>
                <div className="guessnumber-container">
                  <input 
                    type = "number"  
                    placeholder='Enter Number'  
                    value =    {insertednumber}
                    onChange = {(e) => setinsertednumber(Number(e.target.value))}
                    />
                    <div className = "btns-section" style  = {{padding:'2%'}}>
                      <span> <button type = 'reset'   onClick = {() => resetdata()}  > Reset </button> </span> 
                      <span> <button type = 'submit'  onClick = {(e) => checkdata(e)} > Check </button> </span> 
                    </div>
                </div>
            </form>

            <div>
              {low && 
                  <h3> Your Guess Number <b> low </b> is Lower  </h3>
                }
              {high && 
                  <h3> Your Guess Number <b> high </b> is Higher  </h3>
                }
              {correct && 
                  <h3> Your Guess Number is Right </h3>
                }
            </div>

        </div>
    </>
  )
}

export default GuessNumber