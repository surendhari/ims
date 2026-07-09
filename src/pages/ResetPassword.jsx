import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ResetPassword.css"
import resetprotect from "../assets/loginpage/resetprotect.png"
import forgot from "../assets/loginpage/forgot.png";
import lock from "../assets/loginpage/lock2.png";
import protectcode from "../assets/loginpage/protectcode.png";
import arrow from "../assets/loginpage/arrow.png";


export default function ResetPassword() {
  const navigate = useNavigate();
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
     
        <div className="resetright-container">

  <div className="reset-password-card">

    <div className="reset-password-icon">
      <img src={forgot} alt="forgot" />
    </div>

    <h1 className="reset-password-title">
      Set New Password
    </h1>

    <p className="reset-password-text">
      Your new password must be different from previous
      passwords.
    </p>

    <div className="reset-password-field">
      <label>New Password</label>

      <div className="reset-password-input-box">
        <img src={lock} alt="" />
        <input
          type="password"
          placeholder="Min. 8 characters"
        />
      </div>
    </div>

    <div className="reset-password-field">
      <label>Confirm New Password</label>

      <div className="reset-password-input-box">
        <img src={protectcode} alt="" />
        <input
          type="password"
          placeholder="Repeat your password"
        />
      </div>
    </div>

    <div className="reset-password-rules">

      <div className="reset-rule-item">
        <span className="reset-rule-circle"></span>
        <p>At least 8 characters</p>
      </div>

      <div className="reset-rule-item">
        <span className="reset-rule-circle"></span>
        <p>Passwords match</p>
      </div>

    </div>

    <button className="reset-password-btn" onClick={() => navigate("/ResetPasswordSuccess")}>
      Update Password
      <img src={arrow} alt="" />
    </button>

    <div className="reset-login-link" >
      Back to Login
    </div>

  </div>

</div>      
    </div>
  )
}
