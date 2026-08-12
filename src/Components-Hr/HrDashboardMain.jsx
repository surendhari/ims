import React, { useState } from "react";
import "./HrDashboardMain.css";
import { HrDashboardSidebar } from "./HrDashboardSidebar";
import { HrDashboardHeader } from "./HrDashboardHeader";
import { HrDashboard } from "./HrDashboard";
import { HrMyProfile } from "./HrMyProfile";

export const HrDashboardMain = () => {

  const [isOpen, setIsOpen] = useState(true);

  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  return (

    <div className="hr-dashboard-main">

      <HrDashboardSidebar
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />

      <div
        className={
          isOpen
            ? "hr-dashboard-right"
            : "hr-dashboard-right mini"
        }
      >

        <HrDashboardHeader
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
        />

        <div className="hr-dashboard-content-main">

          {activeMenu === "Dashboard" && (
            <HrDashboard />
          )}

          {activeMenu === "My Profile" && (
            <HrMyProfile />
          )}

          {activeMenu === "Interns" && (
            <HrInterns />
          )}

          {activeMenu === "Applications" && (
            <HrApplications />
          )}

          {activeMenu === "Organization" && (
            <HrOrganization />
          )}

          {activeMenu === "Mentors" && (
            <HrMentors />
          )}

          {activeMenu === "Task & Approvals" && (
            <HrTaskApprovals />
          )}

          {activeMenu === "Attendance" && (
            <AttendanceContent />
          )}

          {activeMenu === "Onboarding" && (
            <OnboardingContent />
          )}

          {activeMenu === "Reports & Analytics" && (
            <ReportsContent />
          )}

          {activeMenu === "Communication" && (
            <CommunicationContent />
          )}

          {activeMenu === "Settings" && (
            <SettingsContent />
          )}

        </div>

      </div>

    </div>
  );
};