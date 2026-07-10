import React from 'react'
import {NavBar} from "./NavBar";
import nextgen from "../assets/nextgen.png";
import imsdashboard from "../assets/imsdashboard.png"
import automated from"../assets/automated.png";
import realtime from "../assets/realtime.png";
import secure from "../assets/secure.png";
import success from "../assets/success.png";
import office from "../assets/office.png";
import "./LandingPage.css";
import tick from "../assets/tick.png";
import arrow from "../assets/arrow.png"
import bluearrow from "../assets/bluearrow.png"
import {Footer} from './Footer';


export const LandingPage = () => {
  return (
    <div>
     <NavBar /> 

    <section className='dashboard'>
    <div className='leftbox'>
     <div className="hero-badge">
  <img src={nextgen} alt="NextGen" className="badge-icon" />
  <span>Next-Generation Placement OS</span>
</div>
    <h1>
      <span style={{color:"Black"}}>Seamless</span> <br />
    <span style={{color:"Black"}}>Internships.</span> <br />
     <span>Smarter</span><br />
    <span>Management.</span> <br />
     <hr className="hero-line" />
   </h1>

    <p>
Bridging the gap between ambitious talent and global opportunities.
The definitive operating system for universities, students,
and world-class employers.
</p>

     <div className="buttons">
   <button className="start-btn">
  Get Started <img className='arrow' src={arrow} alt="arrow" />
</button>

<button className="book-btn">
  Book a Demo
</button>
    </div>    
   </div> 
<div className="rightbox">
  <img src={imsdashboard} alt="Dashboard" />

  <div className="success-card">
    <img src={success} alt="Success" className="success-image" />

    <div className="success-text">
      <p>Success Rate</p>
      <h3>+24%Increase</h3>
    </div>
  </div>
</div>     
    </section>   




    <section className='status'>
    <div className="sts-box">
    <h2>500+</h2>
    <p>UNIVERSITIES</p>
     </div>

    <div className="sts-box">
    <h2>10k+</h2>
    <p> GLOBAL COMPANIES</p>
     </div>

 
 <div className="sts-box">
    <h2>1M+</h2>
    <p>PLACEMENTS</p>
     </div>
    </section>
      



<section className="features">
  <h2 className="feature-heading">
    Engineered for Efficiency
  </h2>
<div className='features-link'>
  <p className='features-p'>Complex placement workflows simplified into an intuitive, high -speed ecosystem <br />designed for scale.</p>

  <a href="#">Explore all features <img  className='arrow' src={bluearrow} alt="arrow" /></a>
</div>
  <div className="feature-container">

    <div className="feature-card">
      <img src={automated} alt="automated" className="icon" />

      <h3>Automated Matching</h3>
      <p>Oru AI-diven algorithm pairs <br />
      candidates with their ideal roles based <br />
      in skills, culture fit, and academic <br />
      requirements
      </p>
    </div>

    <div className="feature-card">
      <img src={realtime} alt="realtime" className="icon" />

      <h3>Real-time Tracking</h3>

    <p>
      Moniter progress from application to <br />
      final eveluation with granular <br />
      dashboards for all stakeholders.
    </p>
    </div>

    <div className="feature-card">
      <img src={secure} alt="secure" className="icon" />

      <h3>Secure Documents</h3>
<p>Enterprise-grade encryption for <br />
contracts, NDAs, and compliance <br />
certifications with automated <br />
reminders.
</p>
    </div>

  </div>

</section>


<section className="student">

  <div className="steps-container">

    <div className="step-card">

      <h2 className="student-heading">
        For Students:
        <br />
        <span>Your Career Launchpad.</span>
      </h2>

      <div className="student-item">
        <div className="step-number"><img src={tick} alt="tick" /></div>

        <div>
          <h3>One-click Applications</h3>
          <p>
            Apply to top-tier firms instantly with your verified profile.
          </p>
        </div>
      </div>

      <div className="student-item">
        <div className="step-number"><img src={tick} alt="tick" /></div>

        <div>
          <h3>AI Career Coaching</h3>
          <p>
            Personalized insights to help you stand out and land the role.
          </p>
        </div>
      </div>

      <div className="student-item">
        <div className="step-image"><img src={tick} alt="tick" /></div>

        <div>
          <h3>Verified Credentials</h3>
          <p>
            A portable digital record of your internship success.
          </p>
        </div>
      </div>

      <div className="category-buttons">
        <button className="active">Students</button>
        <button>Employers</button>
        <button>Universities</button>
      </div>

    </div>

    <div className="student-image-box">
      <img src={office} alt="Office" />
    </div>

  </div>

</section>

  <Footer />
    </div>
  )
}
