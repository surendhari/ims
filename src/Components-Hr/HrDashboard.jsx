import React,{useState} from "react";
import "./HrDashboard.css"
import activeinternships from "../assets/hr-modules/activeinternships.png";
import totalinterns from "../assets/hr-modules/totalinterns.png";
import newapplications from "../assets/hr-modules/newapplication.png";
import ongoingproject from "../assets/hr-modules/ongoingproject.png";
import calendar from "../assets/hr-modules/calendar.png";
import folder from "../assets/hr-modules/folder.png";
import monitor from "../assets/hr-modules/monitor.png";
import feedback from "../assets/hr-modules/feedback.png";
import harsha from "../assets/hr-modules/harsha.png";
import sukumar from "../assets/hr-modules/sukumar.png";
import sai from "../assets/hr-modules/sai.png";
import sunil from "../assets/hr-modules/sunil.png";
import vikas from "../assets/hr-modules/vikas.png";
import rohit from "../assets/hr-modules/rohit.png";
import kayva from "../assets/hr-modules/kayva.png";
import kiran from "../assets/hr-modules/kiran.png";
import meera from "../assets/hr-modules/meera.png";
import anitha from "../assets/hr-modules/anitha.png";
import totalapplications from "../assets/hr-modules/totalapplications.png";
import review from "../assets/hr-modules/review.png";
import shortlisted from "../assets/hr-modules/shortlisted.png";
import selected from "../assets/hr-modules/selected.png";
import rejected from "../assets/hr-modules/rejected.png";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";



export const HrDashboard = () => {


    const interns = [
    {
      image: harsha,
      name: "Harsha Reddy",
      department: "Design",
      mentor: "Rohit Kumar",
      mentorImg: rohit,
      date: "May 06,2025"
    },
    {
      image: sukumar,
      name: "Sukumar",
      department: "Marketing",
      mentor: "Kayva",
      mentorImg: kayva,
      date: "May 07,2025"
    },
    {
      image: sai,
      name: "Sai",
      department: "Production",
      mentor: "Kiran Kumar",
      mentorImg: kiran,
      date: "May 08,2025"
    },
    {
      image: sunil,
      name: "Sunil",
      department: "Engineering",
      mentor: "Meera",
      mentorImg: meera,
      date: "May 09,2025"
    },
    {
      image: vikas,
      name: "Vikas Reddy",
      department: "HR",
      mentor: "Anitha",
      mentorImg: anitha,
      date: "May 10,2025"
    }
  ];

 const lineData = [
  { name: "May 06", interns: 35 },
  { name: "May 16", interns: 45 },
  { name: "May 26", interns: 62 },
  { name: "Jun 26", interns: 75 },
  { name: "Jul 06", interns: 95 },
];

  const pieData = [
  { name: "Engineering", value: 42, color: "#1A65F6" },
  { name: "Marketing", value: 28, color: "#28BD94" },
  { name: "Design", value: 20, color: "#6B3FD3" },
  { name: "Product", value: 16, color: "#DD9F5A" }, 
  { name: "HR", value: 10, color: "#6BB2DC" },
  { name: "Others", value: 12, color: "#8C96AF" },
];


const total = pieData.reduce((a, b) => a + b.value, 0);

const milestones = [
  {
    icon: calendar,
    title: "Mid-term Evaluation",
    subtitle: "Engineering Interns",
    date: "May 25",
    days: "in 3 days",
  },
  {
    icon: folder,
    title: "Project Submission",
    subtitle: "Marketing Interns",
    date: "May 28",
    days: "in 6 days",
  },
  {
    icon: monitor,
    title: "Final Presentation",
    subtitle: "Batch May 2025",
    date: "JUN 05",
    days: "in 12 days",
  },
  {
    icon: feedback,
    title: "Feedback Deadline",
    subtitle: "All Departments",
    date: "JUN 05",
    days: "in 14 days",
  },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;

    return (
      <div
        style={{
          background: "#fff",
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "10px 14px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        }}
      >
        <p style={{ margin: 0, fontWeight: "600" }}>{data.name}</p>
        <p style={{ margin: "5px 0 0", color: data.color }}>
          Interns: {data.value}
        </p>
        <p style={{ margin: "5px 0 0", color: "#555" }}>
          {((data.value / total) * 100).toFixed(1)}%
        </p>
      </div>
    );
  }

  return null;
};

  return (
    
    <div className="hr-dashboard-content">

        <div className="hr-dashboard-welcome">

          <h1>Welcome back, Sudhakar!</h1>

          <p>
            Here's What's happening with your internship program today.
          </p>

        </div>

<div className="hr-dashboard-cards">

<div className="hr-dashboard-card-box">

  <img src={totalinterns} alt="Total Interns" />
  <div className="hr-dashboard-card-content">
    <h6>Total Interns</h6>
    <h5>128</h5>
    <p>
      <span>12.5%</span> From last Month
    </p>
  </div>

</div>

<div className="hr-dashboard-card-box">
  <img src={activeinternships} alt="Active Internships" />
  <div className="hr-dashboard-card-content">
    <h6>Active Internships</h6>
    <h5>84</h5>
    <p>
      <span>8.95%</span> From last Month
    </p>
  </div>
</div>

<div className="hr-dashboard-card-box">
  <img src={newapplications} alt="New Applications" />
  <div className="hr-dashboard-card-content">
    <h6>New Applications</h6>
    <h5>32</h5>
    <p>
      <span>13.5%</span> From last Month
    </p>
  </div>
</div>

<div className="hr-dashboard-card-box">
  <img src={ongoingproject} alt="Ongoing Project" />
  <div className="hr-dashboard-card-content">
    <h6>Ongoing Project</h6>
    <h5>23</h5>
    <p>
      <span>8.5%</span> From last Month
    </p>
  </div>
</div>

</div>


<div className="hr-dashboard-charts-wrapper">
 
      <div className="hr-dashboard-chart-card">

        <div className="hr-dashboard-chart-header">
          <h3>Interns Overview</h3>

          <select>
            <option>This Month</option>
            <option>Last Month</option>
          </select>
        </div>

        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={lineData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="interns"
              stroke="#296CF6"
              strokeWidth={1}
              dot={{ r: 5, fill: "#296CF6" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="hr-dashboard-chart-card">

        <div className="hr-dashboard-chart-header">
          <h3>Interns by Department</h3>
        </div>

        <div className="hr-dashboard-pie-section">

          <ResponsiveContainer width={230} height={230}>
            <PieChart>
              <Tooltip content={<CustomTooltip />} />
              <Pie
                data={pieData}
                dataKey="value"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={0}
              >
                {pieData.map((item, index) => (
                  <Cell key={index} fill={item.color} />
                ))}
              </Pie>

              <text
                x="50%"
                y="47%"
                textAnchor="middle"
                fontSize="32"
                fontWeight="500"
              >
                {total}
              </text>

              <text
                x="50%"
                y="60%"
                textAnchor="middle"
                fontSize="20"
                fill="#777"
              >
                Total
              </text>

            </PieChart>
          </ResponsiveContainer>

          <div className="hr-dashboard-legend">

            {pieData.map((item) => (
              <div className="hr-dashboard-legend-item" key={item.name}>

                <span
                  className="hr-dashboard-dot"
                  style={{ background: item.color }}
                ></span>

                <span>{item.name}</span>

                <span>
                  {item.value} (
                  {((item.value / total) * 100).toFixed(1)}%)
                </span>

              </div>
            ))}

          </div>

        </div>
        </div>


        <div className="hr-dashboard-milestone-card">

  <h3>Upcoming Milestones</h3>

  {milestones.map((item, index) => (
    <div className="hr-dashboard-milestone-item" key={index}>

      <div className="hr-dashboard-milestone-left">
        <img src={item.icon} alt={item.title} />

        <div>
          <h4>{item.title}</h4>
          <p>{item.subtitle}</p>
        </div>
      </div>

      <div className="hr-dashboard-milestone-right">
        <h5>{item.date}</h5>
        <span>{item.days}</span>
      </div>

    </div>
  ))}
      </div>

    </div>

        <div className="hr-dashboard-intern-status-wrapper">

      <div className="hr-dashboard-recent-card">

        <h2>Recent Interns</h2>

        <table>

          <thead>
            <tr>
              <th>Names</th>
              <th>Department</th>
              <th>Mentor</th>
              <th>Start Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {interns.map((item, index) => (

              <tr key={index}>

                <td className="hr-dashboard-user-cell">
                  <img src={item.image} alt="item.image" />
                  <span>{item.name}</span>
                </td>

                <td>{item.department}</td>

                <td className="hr-dashboard-mentor-cell">
                  <img src={item.mentorImg} alt="mentorImg" />
                  <span>{item.mentor}</span>
                </td>

                <td>{item.date}</td>

                <td>
                  <button className="hr-dashboard-active-btn">
                    Active
                  </button>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

  
      <div className="hr-dashboard-status-card">

        <h2>Applications Status</h2>

        <div className="hr-dashboard-status-row">
          <div className="hr-dashboard-status-left">
            <img src={totalapplications} alt="Total Applications" />
            <span>Total Applications</span>
          </div>
          <h3>156</h3>
        </div>

        <div className="hr-dashboard-status-row">
          <div className="hr-dashboard-status-left">
            <img src={review} alt="Under Review" />
            <span>Under Review</span>
          </div>
          <h3>32</h3>
        </div>

        <div className="hr-dashboard-status-row">
          <div className="hr-dashboard-status-left">
            <img src={shortlisted} style={{width:"28px",height:"23px"}} alt="Shortlisted" />
            <span>Shortlisted</span>
          </div>
          <h3>28</h3>
        </div>

        <div className="hr-dashboard-status-row">
          <div className="hr-dashboard-status-left">
            <img src={selected} alt="Selected" />
            <span>Selected</span>
          </div>
          <h3>18</h3>
        </div>

        <div className="hr-dashboard-status-row">
          <div className="hr-dashboard-status-left">
            <img src={rejected} alt="Rejected" />
            <span>Rejected</span>
          </div>
          <h3>78</h3>
        </div>

      </div>

    </div>

         </div>

    
  );
};