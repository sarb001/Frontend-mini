import React, { useState } from 'react'
import '../styles/App.css';

const Accordian = () => {

   const [show,setshow] = useState(false);

   const showdata = () => {
       setshow((prev) => !prev);
   }

  return (
    <>
        <h3> Accordian React </h3>
       <div className="accordian-container">

            <div className="accordianitem">
               <div className="accordianheader">
                 <span> Do i have to Allow First Part  1 </span>
                 <span className='symbol'  onClick={showdata} > {show ? '-' : '+' }  </span>
               </div>
               <div className= {`accordian-detail ${show ? 'showdata' : 'hidedata' }`}>
                 <p> 111 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                   Ex fuga quisquam deleniti commodi praesentium saepe ipsa repellat 
                   incidunt nemo quos harum iste mollitia fugit eum esse eveniet necessitatibus nam,
                    quis iure. Quae quaerat fuga provident. 
                  </p>
               </div>
            </div>

            <div className="accordianitem">
               <div className="accordianheader">
                 <span> Do i have to Allow First Part  2 </span>
                 <span className='symbol'  onClick={showdata} > {show ? '-' : '+' }  </span>
               </div>
               <div className= {`accordian-detail ${show ? 'showdata' : 'hidedata' }`}>
                 <p> 22222 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                   Ex fuga quisquam deleniti commodi praesentium saepe ipsa repellat 
                   incidunt nemo quos harum iste mollitia fugit eum esse eveniet necessitatibus nam,
                    quis iure. Quae quaerat fuga provident. 
                  </p>
               </div>
            </div>

            <div className="accordianitem">
               <div className="accordianheader">
                 <span> Do i have to Allow First Part  3 </span>
                 <span className='symbol'  onClick={showdata} > {show ? '-' : '+' }  </span>
               </div>
               <div className= {`accordian-detail ${show ? 'showdata' : 'hidedata' }`}>
                 <p> 3333 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                   Ex fuga quisquam deleniti commodi praesentium saepe ipsa repellat 
                   incidunt nemo quos harum iste mollitia fugit eum esse eveniet necessitatibus nam,
                    quis iure. Quae quaerat fuga provident. 
                  </p>
               </div>
            </div>

       </div>
    </>
  )
}

export default Accordian