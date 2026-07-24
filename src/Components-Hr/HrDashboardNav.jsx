import React from "react";
import "./HrDashboardNav.css";
import menu from "../assets/hr-modules/menu.png";
import search from "../assets/hr-modules/search.png";
import notification from "../assets/hr-modules/activenotifications.png";
import profile from "../assets/hr-modules/profile.png";
import downarrow from "../assets/hr-modules/downarrow.png";

export const HrDashboardNav = ({toggleSidebar}) => {

  return (
   <div className="topbar">

      <div className="top-left">
        <img src={menu} alt="Menu" onClick={toggleSidebar}  style={{cursor:"pointer"}}/>

        <div>
          <h3>Dashboard</h3>
          <p>welcome back, Admin Here’s an overview of the internship ecosystem.</p>
        </div>
      </div>

      <div className="top-search">
        <img src={search} alt="Search" />
        <input type="text" placeholder="Search anything..." />
      </div>

      <div className="top-right">

        <img
          src={notification}
          alt="Notification"
          className="nav-icon"
        />

        <div className="nav-profile">
          <img src={profile} alt="Profile" />

          <div className="nav-profile-info">
            <h4>HR</h4>
            <p>HR Dashboard</p>
          </div>

          <img
            src={downarrow}
            alt="Down Arrow"
            className="down"
          />
        </div>

      </div>

    </div>
  );
};