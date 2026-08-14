import React from 'react';
import "./HrMyProfile.css";
import editIcon from "../assets/hr-modules/editIcon.png";
import profileimage from"../assets/hr-modules/profileimage.png";
import mail from "../assets/hr-modules/mail.png"
import phone from "../assets/hr-modules/phone.png";
import location from "../assets/hr-modules/location.png";
import date from "../assets/hr-modules/date.png";
import department from "../assets/hr-modules/department.png";

export const HrMyProfile=()=> {
  return (
 <div className="hr-myprofile-main">
 
 <div className="hr-myprofile-title">

  <div>
<h1>My Profile</h1>
<p>View and update your personal information</p>
</div>

<div className="hr-myprofile-editbtn">
<button>
  <img src={editIcon} alt="edit"/>Edit Profile
</button>
</div>
</div>

<div className="hr-myprofile-card">
<div className="hr-myprofileimage">
  <img src={profileimage} alt="profile"/>

</div>

<div className="hr-myprofile-details">
  <h3>Aiswariya</h3>
  <h5>HR Manager</h5>
  <h6>Employee ID: 12345</h6>
  <p>Dedicated HR professional with experience in<br/>
talent acquisition,employee relations,and<br/>
performance management.</p>

</div>

<div className="hr-myprofile-bio">

  <div className='hr-myprofile-bio-card'>  
    <img src={mail} alt="mail" />
  <div className='hr-myprofile-bio-text'>
    <h6>Email</h6>
    <p>priya.sharma@company.com</p>
  </div>
  </div>


    <div className='hr-myprofile-bio-card'>  
    <img src={phone} alt="phone" />
  <div className='hr-myprofile-bio-text'>
    <h6>Phone</h6>
    <p>+91 9876543210</p>
  </div>
  </div>


    <div className='hr-myprofile-bio-card'>  
    <img src={location} alt="location" />
  <div className='hr-myprofile-bio-text'>
    <h6> Location</h6>
    <p> Bangalore,India</p>
  </div>
  </div>


    <div className='hr-myprofile-bio-card'>  
    <img src={department} alt="department" />
  <div className='hr-myprofile-bio-text'>
    <h6>Department</h6>
    <p>Human Resources</p>
  </div>
  </div>


    <div className='hr-myprofile-bio-card'>  
    <img src={date} alt="date" />
  <div className='hr-myprofile-bio-text'>
    <h6>Joined On</h6>
    <p>15 Jan 2023</p>
  </div>
  </div>


</div>

</div>

 






 </div>
  );
}