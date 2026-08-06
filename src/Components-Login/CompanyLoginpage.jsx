import React, { useState } from "react";
import "./CompanyLoginpage.css";
import mail from "../assets/loginpage/mail.png";
import lock from "../assets/loginpage/lock.png";
import eye from "../assets/loginpage/eye.png";
import eyeClose from "../assets/loginpage/eyeclose.png";
import google from "../assets/loginpage/google.png";
import arrow from "../assets/loginpage/arrow.png";
import { useNavigate } from "react-router-dom";


export const CompanyLoginpage=()=> {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Login Successful");

      console.log({
        email,
        password,
      });
    }
  };

  return (
    <div className="company-login-main">
      <div className="company-login-leftside-container">
        <div className="company-login-left-content">
          <h1 className="company-login-logo">HR and Company Portal</h1>

          <h2>
           Empowering<br/>Growth<br/>through<br/>Innovation.
          </h2>

           <p>Connect with leaders, manage talent, and<br/>
           drive your organization forward with our<br/>
           unified platform.</p>

          <div className="company-login-stats">
            <div>
              <h3>500+</h3>
              <span>PARTNER COMPANIES</span>
            </div>

            <div>
              <h3>10k+</h3>
              <span>SUCCESS STORIES</span>
            </div>
          </div>
        </div>

        <p className="company-login-copyright">&copy;2024 HR and Company Portal. All rights reserved.</p>
      </div>

      <div className="company-login-rightside-container">
        <form className="company-login-box" onSubmit={handleSubmit}>
          <h1>Welcome Back</h1>

          <p className="company-login-subtitle">
            Manage your career journey.
          </p>

          <label>Email Address</label>

          <div className="company-login-input-box">
            <img src={mail} alt="mail" className="company-login-input-icon" />

            <input
              type="email"
              placeholder="Enter Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {errors.email && (
            <p className="company-login-error">{errors.email}</p>
          )}

          <div className="company-login-password-row">
            <label>Password</label>

           <p
  className="company-login-forgot-link"
  onClick={() => navigate("/twostepverification")}
>
  Forgot Password?
</p>
          </div>

          <div className="company-login-input-box">
            <img src={lock} alt="lock" className="company-login-lock-input-icon" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <img
  src={showPassword ? eyeClose : eye}
  alt="eye"
  className="company-login-eye-icon"
  onClick={() => setShowPassword(!showPassword)}
/>
          </div>

          {errors.password && (
            <p className="error">{errors.password}</p>
          )}

          <div className="company-login-remember">
            <input type="checkbox" />

            <span>Keep me signed in</span>
          </div>

          <button className="company-login-signin-btn" type="submit">
            Sign In

            <img src={arrow} alt="arrow" />
          </button>

            <div className="company-login-divider">

      <span></span>

      <p>OR CONTINUE WITH</p>

      <span></span>

    </div>

          <div className="company-login-google-align">
            <button type="button" className="company-login-google-btn">
              <img src={google} alt="google" />
              Google
            </button>

            <p className="company-login-create">
              Don't have an account?

              <span
  className="company-login-create-link"
  onClick={() => navigate("/HRregistration")}
>
  Create Account
</span>
            </p>
          </div>

          <div className="company-login-footer-links">
            <a href="/">Help</a>

            <a href="/">Privacy</a>

            <a href="/">Terms</a>
          </div>
        </form>
      </div>
    </div>
  );
}