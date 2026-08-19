import React from 'react'
import "./AdminDashboard.css";
import activeinternships from "../assets/admin-modules/activeinternships.png";
import activestudents from "../assets/admin-modules/activestudents.png";
import application from "../assets/admin-modules/application.png";
import certificates from "../assets/admin-modules/certificates.png";
import carduparrow from "../assets/admin-modules/carduparrow.png";
import post from "../assets/admin-modules/post.png";
import verifycertificates from "../assets/admin-modules/verifycertificates.png";
import generatereports from "../assets/admin-modules/generatereports.png";
import approve from "../assets/admin-modules/approve.png";
import footerrightarrow from "../assets/admin-modules/footerrightarrow.png";

import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PieChart,
  Pie,
  Cell,
} from "recharts";




export const AdminDashboard=()=> {

  const statusData = [
    { name: "Active", value: 64, color: "#2F6FD0" },
    { name: "Completed", value: 40, color: "#45B88A" },
    { name: "Pending", value: 16, color: "#F5A623" },
    { name: "Draft", value: 8, color: "#C9CED6" },
  ];

  const total = statusData.reduce(
    (sum, item) => sum + item.value,
    0
  );


  return (
    <div className='admin-dashboard-content'>

      <div className="admin-dashboard-cards">
      
      <div className="admin-dashboard-card-box">
      
        <img src={activeinternships} alt="active internships" />
        <div className="admin-dashboard-card-content">
          <h6>Active Internships</h6>
          <h5>128</h5>
          <p>
            <span><img src={carduparrow} alt="carduparrow" />12%</span> From last Month
          </p>
        </div>
      
      </div>
      
      <div className="admin-dashboard-card-box">
        <img src={activestudents} alt="Active students" />
        <div className="admin-dashboard-card-content">
          <h6>Active students</h6>
          <h5>1245</h5>
          <p>
            <span><img src={carduparrow} alt="carduparrow" />8%</span> From last Month
          </p>
        </div>
      </div>
      
      <div className="admin-dashboard-card-box">
        <img src={application} alt="Applications" />
        <div className="admin-dashboard-card-content">
          <h6>Applications</h6>
          <h5>320</h5>
          <p>
            <span><img src={carduparrow} alt="carduparrow" />15%</span> From last Month
          </p>
        </div>
      </div>
      
      <div className="admin-dashboard-card-box">
        <img src={certificates} alt="certificates" />
        <div className="admin-dashboard-card-content">
          <h6>Certificates issued</h6>
          <h5>870</h5>
          <p>
            <span><img src={carduparrow} alt="carduparrow" />10%</span> From last Month
          </p>
        </div>
      </div>
      
      </div>

<div className='admin-piechart-main-container'>
 
      <div className="admin-dashboard-status-card">

        <div className="admin-dashboard-status-header">
          <h3>Internship Status</h3>

          <select>
            <option>This Month</option>
            <option>Last Month</option>
            <option>This Year</option>
          </select>
        </div>


        <div className="admin-dashboard-status-body">

          
          <div className="admin-dashboard-status-chart">

            <ResponsiveContainer width="100%" height={150}>
              <PieChart>

                <Pie
                  data={statusData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={60}
                  cornerRadius={4}
                  paddingAngle={3}
                  startAngle={90}
                  endAngle={-270}
                >
                  {statusData.map((item, index) => (
                    <Cell
                      key={index}
                      fill={item.color}
                    />
                  ))}
                </Pie>

                <text
                  x="50%"
                  y="47%"
                  textAnchor="middle"
                  fontSize="15"
                  fontWeight="700"
                  fill="#1F2937"
                >
                  {total}
                </text>

                <text
                  x="50%"
                  y="62%"
                  textAnchor="middle"
                  fontSize="10"
                  fill="#6B7280"
                >
                  Total
                </text>

              </PieChart>
            </ResponsiveContainer>

          </div>

          <div className="admin-dashboard-status-legend">

            {statusData.map((item) => {

              const percentage = (
                (item.value / total) * 100
              ).toFixed(1);

              return (
                <div
                  className="admin-dashboard-status-legend-item"
                  key={item.name}
                >

                  <div className="admin-dashboard-status-name">

                    <span
                      className="admin-dashboard-status-dot"
                      style={{
                        backgroundColor: item.color
                      }}
                    ></span>

                    <span>{item.name}</span>

                  </div>

                  <span className="admin-dashboard-status-value">
                    {item.value} ({percentage}%)
                  </span>

                </div>
              );
            })}

          </div>

        </div>
        <div className="admin-dashboard-status-footer">
          <span>View all Internships</span>
          <img className='footer-right-arrow' src={footerrightarrow} alt="footer" />
        </div>

      </div>

<div className="admin-dashboard-recent-application">

  <h3>Recent Application</h3>

  <div className="admin-dashboard-application-table">

    <div className="admin-dashboard-application-header">
      <h5>Student Name</h5>
      <h5>Internship Title</h5>
      <h5>Company</h5>
      <h5>Status</h5>
    </div>

    <div className="admin-dashboard-application-row">
      <span>Arjun Patel</span>
      <span>UI/UX Design Intern</span>
      <span>TechNova</span>
      <span className="admin-dashboard-application-status pending">
        Pending
      </span>
    </div>

    <div className="admin-dashboard-application-row">
      <span> Sneha Reddy</span>
      <span>Data Analyst Intern</span>
      <span>Data Wise</span>
      <span className="admin-dashboard-application-status review">
        Under Review
      </span>
    </div>

    <div className="admin-dashboard-application-row">
      <span>Karthik S</span>
      <span>Marketing Intern</span>
      <span>Brandify</span>
      <span className="admin-dashboard-application-status shortlisted">
        Shortlisted
      </span>
    </div>

    <div className="admin-dashboard-application-row">
      <span>Ananya Iyer</span>
      <span>HR Intern</span>
      <span>PeoplePrime</span>
      <span className="admin-dashboard-application-status rejected">
        Rejected
      </span>
    </div>

  </div>

</div>
    
    </div> 



<div className="admin-dashboard-bottom-cards">

<div className="admin-internship-progress-card">

  <div className="admin-internship-progress-header">
    <h3>Internship Progress</h3>

    <select>
      <option>This Month</option>
      <option>Last Month</option>
      <option>This Year</option>
    </select>
  </div>


  <div className="admin-progress-gauge">

    <ResponsiveContainer width="100%" height={100}>
      <RadialBarChart
        cx="50%"
        cy="95%"
        innerRadius="65%"
        outerRadius="300%"
        startAngle={180}
        endAngle={0}
        barSize={12}
        data={[
          {
            name: "Progress",
            value: 70,
            fill: "#2F6FD0",
          },
        ]}
      >

        <RadialBar
          background={{
            fill: "#D9DDE2",
          }}
          dataKey="value"
          cornerRadius={4}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="24"
          fontWeight="700"
          fill="#252525"
        >
          72%
        </text>

        <text
          x="50%"
          y="75%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="14"
          fill="#8A94A3"
        >
          Average Progress
        </text>

      </RadialBarChart>
    </ResponsiveContainer>

  </div>


  <div className="admin-progress-details">

    <div className="admin-progress-item">
      <div>
        <span className="admin-progress-dot completed"></span>
        Completed
      </div>
      <strong>40</strong>
    </div>

    <div className="admin-progress-item">
      <div>
        <span className="admin-progress-dot active"></span>
        Active
      </div>
      <strong>64</strong>
    </div>

    <div className="admin-progress-item">
      <div>
        <span className="admin-progress-dot risk"></span>
        At Risk
      </div>
      <strong>12</strong>
    </div>

  </div>


  <div className="admin-progress-footer">
    <span>View Progress reports</span>
    <img className='footer-right-arrow' src={footerrightarrow} alt="footer" />
  </div>

</div>


  <div className="admin-mentor-card">

    <h3>Mentor Overview</h3>

    <div className="admin-mentor-details">

      <div className="admin-mentor-row">

        <div className="admin-mentor-info">

          <div className="admin-mentor-avatar admin-rk">
            RK
          </div>

          <div>
            <h4>Ravi Kumar</h4>
            <p>TechNova</p>
          </div>

        </div>

        <div className="admin-mentor-mentored">
          <strong>12</strong>
          <span>Mentored</span>
        </div>

      </div>


      <div className="admin-mentor-row">

        <div className="admin-mentor-info">

          <div className="admin-mentor-avatar admin-ps">
            PS
          </div>

          <div>
            <h4>Priya sharma</h4>
            <p>DataWise</p>
          </div>

        </div>

        <div className="admin-mentor-mentored">
          <strong>8</strong>
          <span>Mentored</span>
        </div>

      </div>


      <div className="admin-mentor-row">

        <div className="admin-mentor-info">

          <div className="admin-mentor-avatar admin-as">
            AS
          </div>

          <div>
            <h4>Anil Singh</h4>
            <p>PeoplePrime</p>
          </div>

        </div>

        <div className="admin-mentor-mentored">
          <strong>10</strong>
          <span>Mentored</span>
        </div>

      </div>

    </div>

    <div className="admin-mentor-footer">
      Manage Mentors
    </div>

  </div>


  <div className="admin-quick-action-card">

    <h3>Quick Action</h3>

    <div className="admin-quick-action-details">

      <div className="admin-quick-action-row">

        <div className="admin-action-img">
          <img src={approve} alt="Approve Organisations" />
        </div>

        <div>
          <h4>Approve Organisations</h4>
          <p>Review pending organisations</p>
        </div>

      </div>


      <div className="admin-quick-action-row">

        <div className="admin-action-img">
          <img src={post} alt="Post New Internship" />
        </div>

        <div>
          <h4>Post New Internship</h4>
          <p>Create and publish new internship</p>
        </div>

      </div>


      <div className="admin-quick-action-row">

        <div className="admin-action-img">
          <img src={generatereports} alt="Generate Reports" />
        </div>

        <div>
          <h4>Generate Reports</h4>
          <p>View and download reports</p>
        </div>

      </div>


      <div className="admin-quick-action-row">

        <div className="admin-action-img">
          <img src={verifycertificates} alt="Verify Certificates" />
        </div>

        <div>
          <h4>Verify Certificates</h4>
          <p>Verify and manage certificates</p>
        </div>

      </div>

    </div>

  </div>

</div>

    </div>
  )
}
