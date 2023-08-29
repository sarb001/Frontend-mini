import React, { useEffect, useState } from 'react'
import '../styles/App.css';


const Toastmsg = ({message , onclose}) => {

     const [isvisible,setisvisible] = useState(true);
     const duration = 3000;

     useEffect(() => {
        const  timer = setTimeout(() => {
                setisvisible(false);
                if(onclose){
                    onclose();
                }
        }, duration);
        return () => clearTimeout(timer);
     },[duration , onclose])

    return (
        <>
             {isvisible ? 
             <div className = "toast"> 
             {message} 
             </div> : null}
        </>
    )
}

export default Toastmsg