import React from 'react'
import "./HRregistration.css"
import { useNavigate } from "react-router-dom";
import hrinternleft from "../assets/registration/hrinternleft.png"
import eye from "../assets/registration/eye.png"
import hr from "../assets/registration/hr.png"
import company from "../assets/registration/company.png"
import intern from "../assets/registration/intern.png"
import mentor from "../assets/registration/mentor.png"
import inputcompany from "../assets/registration/inputcompany.png"

export const HRregistration = ()=> {
  const navigate = useNavigate();
    
  return (
    <div className='hr-main-container'>
        <div className='hr-left-container'>
            <p>InternMS</p>

            <div className='hr-left-content'>
             <h1> Empower your team <br />with top-tier talent.  </h1>
            <p> Streamline your recruitment process, manage <br /> internships with ease, and connect with the next <br /> generation of industry leaders.</p>

            <img src={hrinternleft} alt="hrinternleft" />
            </div>
<div>
     </div>
     <div className='sts-bar'>
             <div className="sts-box">
    <h2>500+</h2>
    <p>COMPANIES</p>
     </div>

    <div className="sts-box">
    <h2>10k+</h2>
    <p>STUDENTS</p>
    
 </div>
 </div>
        </div>





       <div className="hr-right-container">

  <div className="hr-register-card">

    <h1>Create your HR account</h1>

    <p className="hr-subtitle">
      Join our ecosystem of professional employers.
    </p>

    <label className="register-label">Registering as</label>

    <div className="register-type">

      <div className="register-box active" onClick={() => navigate("/HRregistration")}>       
        <img src={hr} alt="HR" />
        <p>HR</p>
      </div>

      <div className="register-box"
         onClick={() => navigate("/MentorRegistration")}>
        <img src={mentor} alt="Mentor" />
        <p>Mentor</p>
      </div>

      <div className="register-box">
        <img src={intern} alt="Intern" />
        <p>Intern</p>
      </div>

      <div className="register-box">
        <img src={company} alt="Company" />
        <p>Company</p>
      </div>

    </div>

    <div className="hr-form-row">

      <div className="hr-input-group">
        <label>Full Name <span>*</span></label>

        <input
          type="text"
          placeholder="John Doe"
        />
      </div>

      <div className="hr-input-group">
        <label>Work Email Address <span>*</span></label>

        <input
          type="email"
          placeholder="john.doe@company.com"
        />
      </div>

    </div>

    <div className="hr-form-row">

      <div className="hr-input-group">

        <label>Phone Number <span>*</span></label>

        <div className="phone-box">

          <select>
            <option>+91</option>
          </select>

          <input
            type="text"
            placeholder="Enter your number"
          />

        </div>

      </div>

      <div className="hr-input-group">

        <label>Department <span>*</span></label>

        <select>
          <option>Select department</option>
        </select>

      </div>

    </div>

    <div className="hr-input-group">

      <label>Company Name <span>*</span></label>

      <div className="company-box">

        <img src={inputcompany} alt="" />

        <input
          type="text"
          placeholder="InternHub Inc."
        />

      </div>

    </div>

    <div className="hr-form-row">

      <div className="hr-input-group">

        <label>Password <span>*</span></label>

        <div className="password-box">

          <input
            type="password"
            placeholder="Create a strong password"
          />

          <img src={eye} alt="" />

        </div>

      </div>

      <div className="hr-input-group">

        <label>Confirm Password <span>*</span></label>

        <div className="password-box">

          <input
            type="password"
            placeholder="Confirm your password"
          />

          <img src={eye} alt="" />

        </div>

      </div>

    </div>

    <div className="terms-box">

      <input type="checkbox" />

      <p>
        I agree to the
        <span> Terms of Service </span>
        and
        <span> Privacy Policy</span>
      </p>

    </div>

    <button className="create-account-btn">
      Create Account
    </button>

    <div className="divider">

      <span></span>

      <p>OR</p>

      <span></span>

    </div>

    <p className="signin-text">
      Already have an account?
      <span> Sign in</span>
    </p>

  </div>

</div>
     
    </div>
  )
}
