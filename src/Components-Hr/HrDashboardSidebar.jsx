import React from "react";
import "./HrDashboardSidebar.css";
import { useNavigate } from "react-router-dom";
import dashboard from "../assets/hr-modules/dashboard.png";
import myprofile from "../assets/hr-modules/myprofile.png";
import intern from "../assets/hr-modules/intern.png";
import applications from "../assets/hr-modules/applications.png";
import organization from "../assets/hr-modules/organization.png";
import mentors from "../assets/hr-modules/mentors.png";
import task from "../assets/hr-modules/task.png";
import attendance from "../assets/hr-modules/attendance.png";
import onboarding from "../assets/hr-modules/onboarding.png";
import report from "../assets/hr-modules/report.png";
import communication from "../assets/hr-modules/communication.png";
import settings from "../assets/hr-modules/settings.png";
import logout from "../assets/hr-modules/logout.png";

export const HrDashboardSidebar=({
  isOpen,
  activeMenu,
  setActiveMenu,
}) => {

   const navigate = useNavigate();

  const menuItems = [
    { icon: dashboard, text: "Dashboard" },
    { icon: myprofile, text: "My Profile" },
    { icon: intern, text: "Interns" },
    { icon: applications, text: "Applications" },
    { icon: organization, text: "Organization" },
    { icon: mentors, text: "Mentors" },
    { icon: task, text: "Task & Approvals" },
    { icon: attendance, text: "Attendance" },
    { icon: onboarding, text: "Onboarding" },
    { icon: report, text: "Reports & Analytics" },
    { icon: communication, text: "Communication" },
    { icon: settings, text: "Settings" },
    { icon: logout, text: "Logout" },
  ];

  const handleMenuClick = (item) => {

    if (item.text === "Logout") {

      const confirmLogout = window.confirm(
        "Are you sure you want to logout?"
      );

      if (confirmLogout) {
        localStorage.removeItem("isLoggedIn");
        sessionStorage.clear();
        navigate("/HrLoginpage");
      }

      return;
    }

    setActiveMenu(item.text);
  };


  return (
    <div
      className={
        isOpen
          ? "hr-dashboard-sidebar"
          : "hr-dashboard-sidebar-mini"
      }
    >

      <div className="hr-dashboard-menu-list">

        {menuItems.map((item, index) => (

          <div
            key={index}
            className={`hr-dashboard-menu-item ${
              activeMenu === item.text ? "active" : ""
            }`}
            onClick={() => handleMenuClick(item)}
            style={{ cursor: "pointer" }}
          >

            <img
              src={item.icon}
              alt={item.text}
            />

            {isOpen && (
              <span>{item.text}</span>
            )}

          </div>

        ))}

      </div>

    </div>
  )
}
