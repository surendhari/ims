import React from 'react';
import { useNavigate } from "react-router-dom";
import "./AdminDashboardSidebar.css";
import dashboard from "../assets/admin-modules/dashboard.png";
import myprofile from "../assets/admin-modules/myprofile.png";
import interns from "../assets/admin-modules/interns.png";
import mentors from "../assets/admin-modules/mentors.png";
import departments from "../assets/admin-modules/departments.png";
import programs from "../assets/admin-modules/programs.png";
import task from "../assets/admin-modules/task.png";
import reports from "../assets/admin-modules/reports.png";
import escalations from "../assets/admin-modules/escalations.png";
import settings from "../assets/admin-modules/settings.png";
import audit from "../assets/admin-modules/audit.png";
import notifications from "../assets/admin-modules/sidebarnotification.png";
import logout from "../assets/hr-modules/logout.png";


export const AdminDashboardSidebar=( {
  isOpen,
  activeMenu,
  setActiveMenu,
})=> {

   const navigate = useNavigate();

  const menuItems = [
    { icon: dashboard, text: "Dashboard" },
    { icon: myprofile, text: "My Profile" },
    { icon: interns, text: "Interns" },
    { icon: mentors, text: "Mentors" },
    { icon: departments, text: "Departments" },
    { icon: programs, text: "Programs" },
    { icon: task, text: "Task & Approvals" },
    { icon: reports, text: "Reports & Analytics" },
    { icon: escalations, text: "Escalations" },
    { icon: settings, text: "Settings" },
    { icon: audit, text: "Audit Logs" },
    { icon:notifications, text: "Notifications"},
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
          ? "admin-dashboard-sidebar"
          : "admin-dashboard-sidebar-mini"
      }
    >

      <div className="admin-dashboard-menu-list">

        {menuItems.map((item, index) => (

          <div
            key={index}
            className={`admin-dashboard-menu-item ${
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
