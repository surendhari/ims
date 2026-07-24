import React from "react";
import "./HrDashboard.css";


import { HrDashboardSidebar } from "./HrDashboardSidebar";
import { HrDashboardNav } from "./HrDashboardNav";

export const HrDashboard = () => {
  return (
    <div className="dashboard-main">

      <HrDashboardSidebar />

      <div className="dashboard-right">

        <HrDashboardNav />

       
        <div className="welcome">

          <h1>Welcome back, Sudhakar!</h1>

          <p>
            Here's What's happening with your internship program today.
          </p>

        </div>

     

      </div>

    </div>
  );
};