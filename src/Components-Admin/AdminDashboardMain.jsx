import React from 'react'
import { useState } from 'react';
import "./AdminDashboardMain.css";
import { AdminDashboardSidebar } from './AdminDashboardSidebar';
import { AdminDashboardHeader } from './AdminDashboardHeader';
import {AdminDashboard} from './AdminDashboard';

export const AdminDashboardMain=()=> {

   const [isOpen, setIsOpen] = useState(true);
  
    const [activeMenu, setActiveMenu] = useState("Dashboard");
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
  return (
    <div  className="admin-dashboard-main">
      <AdminDashboardSidebar
              isOpen={isOpen}
              toggleSidebar={toggleSidebar}
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
            />
     <div
             className={
               isOpen
                 ? "admin-dashboard-right"
                 : "admin-dashboard-right mini"
             }
           >
     
             <AdminDashboardHeader
               isOpen={isOpen}
               toggleSidebar={toggleSidebar}
             />
     
             <div className="admin-dashboard-content-main">
     
               {activeMenu === "Dashboard" && (
                 <AdminDashboard />
               )}
     
               {activeMenu === "My Profile" && (
                 <AdminMyProfile />
               )}
     


             </div> 

           </div>        
    </div>
  )
}
