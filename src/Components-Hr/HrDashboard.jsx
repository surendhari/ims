import React,{useState} from "react";
import "./HrDashboard.css";
import { HrDashboardSidebar } from "./HrDashboardSidebar";
import { HrDashboardNav } from "./HrDashboardNav";
import activeinternships from "../assets/hr-modules/activeinternships.png";
import totalinterns from "../assets/hr-modules/totalinterns.png";
import newapplications from "../assets/hr-modules/newapplication.png";
import ongoingproject from "../assets/hr-modules/ongoingproject.png";

export const HrDashboard = () => {
  const [isOpen, setIsOpen] = useState(true);   
  const toggleSidebar = () => {setIsOpen(!isOpen);
  
}
  return (
    <div className="dashboard-main">

      <HrDashboardSidebar isOpen={isOpen}/>

      <div className={'dashboard-right $ {isOpen ? "open" :"close"}'}>

        <HrDashboardNav toggleSidebar={toggleSidebar} />

       
        <div className="welcome">

          <h1>Welcome back, Sudhakar!</h1>

          <p>
            Here's What's happening with your internship program today.
          </p>

        </div>

<div className="cards">

<div className="card-box">

  <img src={totalinterns} alt="" />
  <div>
    <h6>Total Interns</h6>
    <h5>128</h5>
    <p>
      <span>12.5%</span> From last Month
    </p>
  </div>

</div>

<div className="card-box">
  <img src={activeinternships} alt="" />
  <div>
    <h6>Active Internships</h6>
    <h5>84</h5>
    <p>
      <span>8.95%</span> From last Month
    </p>
  </div>
</div>

<div className="card-box">
  <img src={newapplications} alt="" />
  <div>
    <h6>New Applications</h6>
    <h5>32</h5>
    <p>
      <span>13.5%</span> From last Month
    </p>
  </div>
</div>

<div className="card-box">
  <img src={ongoingproject} alt="" />
  <div>
    <h6>Ongoing Project</h6>
    <h5>23</h5>
    <p>
      <span>8.5%</span> From last Month
    </p>
  </div>
</div>

</div>
</div>
     

      </div>

    
  );
};