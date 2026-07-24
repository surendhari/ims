import React from "react";
import "./HrDashboardNav.css";
import menu from "../assets/hr-modules/menu.png";
import search from "../assets/hr-modules/search.png";
import notification from "../assets/hr-modules/notification.png";
import profile from "../assets/hr-modules/profile.png";
import downarrow from "../assets/hr-modules/downarrow.png";

export const HrDashboardNav = () => {
  return (
   <div className="topbar">

      <div className="top-left">
        <img src={menu} alt="Menu" />

        <div>
          <h3>Dashboard</h3>
          <p>Welcome back, Admin</p>
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
          className="icon"
        />

        <div className="profile">
          <img src={profile} alt="Profile" />

          <div>
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