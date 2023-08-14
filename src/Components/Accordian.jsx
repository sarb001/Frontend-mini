import React, { useState } from 'react'
import './Acc.css';

const Accordian = () => {

    const [show,setshow] = useState(false);

     const handleclick = () => {
        setshow((prev) => !prev);
     }

  return (
    <>
        <div className = "accordian-container">
             <h2> Accordian  </h2>
        </div>

         <div className = "accordians">
             <div className="first-accordian">
               <div>
                    <div className="accordian-header" style = {{padding:'1%',backgroundColor:'grey',display:'grid',gridTemplateColumns:'8fr 0.2fr'}}>
                        <span>  Do i have to allow use of Cookies ?  </span>
                        <button onClick={handleclick}  style = {{backgroundColor:'red'}}>  { show ? 'hide' : 'show' }  </button>
                    </div>


                            { show &&  
                                <span id = "data"> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Assumenda nihil doloremque eos nisi  accusantium possimus labore molestiae.
                                    Nam tenetur neque modi explicabo 
                                    repellendus, quis eos aliquam fuga, doloribus reiciendis
                                    corporis distinctio? Unde voluptates vitae molestiae?
                                </span>
                            }
               </div>
               
             </div>

             {/* <div className="second-accordian">
             <span> How Do i change my Password? </span>
                    <span> Password PASSWORD Password PASSWORD Password PASSWORD Password PASSWORD
                    Password PASSWORD Password PASSWORD Password PASSWORD Password PASSWORD Password PASSWORD 
                    Password PASSWORD Password PASSWORD Password PASSWORD Password PASSWORD Password PASSWORD
                    </span>
             </div>

             <div className="third-accordian">
             <span> Tell me the name of City in which u live ? </span>
                    <span> 
                        Winnipeg Winnipeg Winnipeg  Winnipeg  Winnipeg 
                        Winnipeg  Winnipeg  Winnipeg  Winnipeg  Winnipeg 
                        Winnipeg  Winnipeg  Winnipeg  Winnipeg Winnipeg  
                    </span>
             </div>

             <div className="fourth-accordian">
             <span> Name the Best Car that User can have ? </span>
                    <span> Picka Ram da  Picka Ram da  Picka Ram da  Picka Ram da  Picka Ram da
                    Picka Ram da  Picka Ram da  Picka Ram da  Picka Ram da  Picka Ram da
                    Picka Ram da  Picka Ram da  Picka Ram da  Picka Ram da  </span>
             </div> */}

         </div>
    </>
  )
}

export default Accordian