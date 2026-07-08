import React from 'react';
import "./ResetPassword.css"
import resetprotect from "../assets/loginpage/resetprotect.png"


export default function ResetPassword() {
  return (
    <div className='resetmain-container'>

        <div className='resetleft-container'>

            <div>
                <h1>Secure your <br /> account.</h1>
                <p>Ensure your career progress is protected. Set a strong <br />
                password to continue your journey with InternHub.
                </p>

                <img src={resetprotect} alt="resetprotect" />
            </div>

             <p>&copy;2024 InternMS &nbsp;  {"\u2022"} &nbsp; privacy policy</p>


        </div>
     
         <div className='resetright-container'>
            
         </div>         
    </div>
  )
}
