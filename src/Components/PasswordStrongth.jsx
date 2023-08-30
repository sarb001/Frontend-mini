import React, { useState } from 'react'
import '../styles/App.css';

const PasswordStrongth = () => {

     const [password,setpassword] = useState('');
     const [strength,setStrength] = useState(0);
     const [color,setcolor] = useState('wheat');


     const calculateStrength = (value) => {
         
        const lowercase = /[a-z]/;
        const uppercase = /[A-Z]/;
        const number    = /[0-9]/;
        const symbols   = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-="']/;

                const haslowercase = lowercase.test(value);
                const hasuppercase = uppercase.test(value);
                const hasNumber    = number.test(value);
                const hasSymbols   = symbols.test(value);

                const Strengthvalue = (haslowercase ? 1 : 0) + 
                (hasuppercase ? 1 : 0) + 
                (hasNumber ? 1 : 0) + (hasSymbols ? 1 : 0);

                return (Strengthvalue / 4) * 100;
    } 

     const changecolor = (strength) => {
          if(strength < 25){
              return 'red';
          }else if(strength < 50){
             return 'orange';
          }else if(strength < 75){
             return 'yellow' ;
          }else {
            return 'green';
          }     
        }

     const handlechange = (e) => {
        const newPassword = e.target.value;
        setpassword(newPassword);

        // find Strength 
        const newStrength = calculateStrength(newPassword);
        setStrength(newStrength);

        // change  color 
        const newcolor = changecolor(newStrength);
        setcolor(newcolor);
     }

  return (
     <div className = "passwordstrength">
         <label>  </label>
         <input type = "text" 
          value = {password}
          placeholder='Enter password....'  
          onChange = {(e) => handlechange(e)} 
          min = "5"
          max = "15"
          />

         <div className='progressbar-container'>
                <div className='progress' 
                style = {{ backgroundColor: color , width: `${strength}%` }} > 
                {strength}%
                 </div>
         </div>
           <div>  Password Strength : {strength.toFixed(2)}% </div>
     </div>
  )
}

export default PasswordStrongth