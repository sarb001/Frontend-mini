import React, { useState } from 'react'

const Accordian = ({title,content}) => {

   const [isExpanded,setisExpanded] = useState(false);

   const showdata = () => {
     setisExpanded(prev => !prev);
   }

  return (
    <>
          <div className="accordion-item">
            <button className="accordion-header" onClick={showdata}>
              {title}
            </button>
            {isExpanded && <div className="accordion-content"> {content} </div>}
          </div> 

    </>
  )
}

export default Accordian