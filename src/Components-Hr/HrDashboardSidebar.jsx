import React ,{useState}from "react";
import "./HrDashboardSidebar.css";
import dashboard from "../assets/hr-modules/dashboard.png";
import interns from "../assets/hr-modules/interns.png";
import applications from "../assets/hr-modules/applications.png";
import departments from "../assets/hr-modules/departments.png";
import project from "../assets/hr-modules/project.png";
import mentors from "../assets/hr-modules/mentors.png";
import evaluations from "../assets/hr-modules/evaluations.png";
import attendance from "../assets/hr-modules/attendance.png";
import reports from "../assets/hr-modules/reports.png";
import notifications from "../assets/hr-modules/notifications.png";
import settings from "../assets/hr-modules/settings.png";
import sidebarprofile from "../assets/hr-modules/sidebarprofile.png";
import whitearrow from "../assets/hr-modules/whitearrow.png";





export const HrDashboardSidebar = () => {
const [isOpen, setIsOpen] = useState(true);
const menuItems = [
  { icon: dashboard, text: "Dashboard" },
  { icon: interns, text: "Interns" },
  { icon: applications, text: "Applications" },
  { icon: departments, text: "Departments" },
  { icon: project, text: "Projects" },
  { icon: mentors, text: "Mentors" },
  { icon: evaluations, text: "Evaluations" },
  { icon: attendance, text: "Attendance" },
  { icon: reports, text: "Reports" },
  { icon: notifications, text: "Notifications" },
  { icon: settings, text: "Settings" },
];




  return (
   <div className={`sidebar ${isOpen ? "show" : "hide"}`}>

      <div className="logo-section">
        <h2>Intern MS</h2>
        <p>HR Dashboard</p>
      </div>

      <div className="menu-list">

        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`menu-item ${index === 0 ? "active" : ""}`}
          >
            <img src={item.icon} alt={item.text} />
            <span>{item.text}</span>
          </div>
        ))}

      </div>

<div  className="sidebar-profile">
  <div>
    <img src={sidebarprofile} alt="" />
  </div>

  <div>
    <h3>Sudhakar HR</h3>
    <p>HR Manager</p>
  </div>

  <div className="sidebararrow">
    <img src={whitearrow} alt="" />
  </div>
</div>
    </div>
  );
};