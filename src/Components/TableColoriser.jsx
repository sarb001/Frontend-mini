import React, { useRef, useState } from 'react'
import './TableColoriser.css';
const  length = 9;   
const numberList = Array.from(new Array(length) , (_,i) => i);

const TableColoriser = () => {

     const [colorArray,setcolorArray] = useState([]);
     const colRef = useRef();

     const oncolorme = (e) => {
        e.preventDefault();
        if(colorArray.indexOf(parseInt(colRef.current.value)) === -1)
        {
            setcolorArray((prev) => [...prev ,parseInt(colRef.current.value)]);
        }
     }

  return (
    <>
          <h2> Table Colorizer  </h2>
                <div> <input type = "number"  className='numberInput' ref = {colRef} /> </div>
                <div style = {{margin:'1%'}}>  
                   <input  type = "submit" value='Color Me' onClick={oncolorme} />
                        <button> Clear me  </button>
                </div>
               
         <div className='containers'>
                {numberList.map((e,p) => {
                    return (
                        <div  className={colorArray.indexOf(e + 1) !== -1 ? 'containerColor' : 'container'}>
                         {e+1}
                        </div>
                    )
                    })}
           </div>
    </>
  )
}

export default TableColoriser