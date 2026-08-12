import React from 'react'
import "./HrDashboardHeader.css";
import menu from "../assets/hr-modules/menu.png";
import search from "../assets/hr-modules/search.png";
import notification from "../assets/hr-modules/activenotifications.png";
import profile from "../assets/hr-modules/profile.png";
import downarrow from "../assets/hr-modules/downarrow.png";

export const HrDashboardHeader=({
  isOpen,
  toggleSidebar,
})=> {

  return (
     <div className="hr-dashboard-topbar">

      <div className="hr-dashboard-top-left">

        <img
          src={menu}
          alt="Menu"
          onClick={toggleSidebar}
          style={{ cursor: "pointer" }}
        />

        <div>
          <h3>Welcome back, HR</h3>
          <p>Welcome back, HR!</p>
        </div>

      </div>

      <div className="hr-dashboard-top-search">

        <img
          src={search}
          alt="Search"
        />

        <input
          type="text"
          placeholder="Search anything..."
        />

      </div>

      <div className="hr-dashboard-top-right">

        <img
          src={notification}
          alt="Notification"
          className="hr-dashboard-nav-icon"
        />

        <div className="hr-dashboard-nav-profile">

          <img
            src={profile}
            alt="Profile"
          />

          <div className="hr-dashboard-nav-profile-info">

            <h4>HR</h4>

            <p>HR Dashboard</p>

          </div>

          <img
            src={downarrow}
            alt="Down Arrow"
            className="hr-dashboard-down"
          />

        </div>

      </div>

    </div>
  )
}
