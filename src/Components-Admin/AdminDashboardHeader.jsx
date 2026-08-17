import React from 'react';
import './AdminDashboardHeader.css';
import { useState } from 'react';
import sidebartoggle from "../assets/admin-modules/sidebartoggle.png";
import headersearch from "../assets/admin-modules/headersearch.png";
import headerprofile from "../assets/admin-modules/headerprofile.png";
import notifications from "../assets/admin-modules/notifications.png";
import headerprofiledownarrow from "../assets/admin-modules/headerprofiledownarrow.png";

export const AdminDashboardHeader=(
  {
  isOpen,
  toggleSidebar,
}
)=> {
  return (
    <div className="admin-dashboard-topbar">
    
          <div className="admin-dashboard-top-left">
    
            <img
              src={sidebartoggle}
              alt="Menu"
              onClick={toggleSidebar}
              style={{ cursor: "pointer" }}
            />
    
            <div>
              <h3>Dashboard</h3>
              <p>welcome back, Admin Here’s an overview of the internship ecosystem.</p>
            </div>
    
          </div>
    
          <div className="admin-dashboard-top-search">
    
            <img
              src={headersearch}
              alt="Search"
            />
    
            <input
              type="text"
              placeholder="Search anything..."
            />
    
          </div>
    
          <div className="admin-dashboard-top-right">
    
            <img
              src={notifications}
              alt="Notification"
              className="admin-dashboard-nav-icon"
            />
    
            <div className="admin-dashboard-nav-profile">
    
              <img
                src={headerprofile}
                alt="Profile"
              />
    
              <div className="admin-dashboard-nav-profile-info">
    
                <h4>Admin</h4>
    
                <p>System Adminstrator</p>
    
              </div>
    
              <img
                src={headerprofiledownarrow}
                alt="Down Arrow"
                className="admin-dashboard-down"
              />
    
            </div>
    
          </div>
    
        </div>
  )
}
