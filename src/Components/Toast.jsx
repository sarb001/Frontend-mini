import React, { useEffect, useState } from 'react'
import Toastmsg from './Toastmsg';

const Toast = () => {

    const [showtoast,setshowtoast] = useState(false);

    const  showtoastmsg = () => {
          setshowtoast(true);
    };

    const  closetoast = () => {
          setshowtoast(false);
    }



  return (
    <>
        <div className="toast-container">
                <button onClick = {showtoastmsg}> Show Toast </button>
        </div>
        {
            showtoast && (
                <Toastmsg   message = " Your Notification is Showing Here "
                 onClose = {closetoast}
                />
             )
        }
        </>
  )
}

export default Toast