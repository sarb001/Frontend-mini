import React, { useState } from 'react'
import '../styles/App.css';

const PasswordStrongth = () => {

     const [password,setpassword] = useState('');
     const [strength,setStrength] = useState(0);
     
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

                if(Strengthvalue <= 4){
                    progress.style.backgroundColor = 'green';
                }else if(Strengthvalue <= 3){
                    progress.style.backgroundColor = 'orange';
                }else {
                    progress.style.backgroundColor = 'red';
                }

                return (Strengthvalue / 4) * 100;
            }


     const handlechange = (e) => {
        const newPassword = e.target.value;
        setpassword(newPassword);

        const newStrength = calculateStrength(newPassword);
        setStrength(newStrength);

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
                style = {{ backgroundColor:'orange', width: `${strength}%` }} > 
                {strength}%
                 </div>
         </div>
           <div>  Password Strength : {strength.toFixed(2)}% </div>
     </div>
  )
}

export default PasswordStrongth