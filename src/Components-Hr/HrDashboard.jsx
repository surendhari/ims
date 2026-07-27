import React,{useState} from "react";
import "./HrDashboard.css";
import { HrDashboardSidebar } from "./HrDashboardSidebar";
import { HrDashboardNav } from "./HrDashboardNav";
import activeinternships from "../assets/hr-modules/activeinternships.png";
import totalinterns from "../assets/hr-modules/totalinterns.png";
import newapplications from "../assets/hr-modules/newapplication.png";
import ongoingproject from "../assets/hr-modules/ongoingproject.png";
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
  const [isOpen, setIsOpen] = useState(true);   
  const toggleSidebar = () => {setIsOpen(!isOpen);};

  const lineData = [
  { name: "May 06", interns: 35 },
  { name: "May 16", interns: 45 },
  { name: "May 26", interns: 62 },
  { name: "Jun 26", interns: 75 },
  { name: "Jul 06", interns: 95 },
];

  const pieData = [
  { name: "Engineering", value: 48, color: "#1E40AF" },
  { name: "Marketing", value: 26, color: "#2563EB" },
  { name: "Product", value: 20, color: "#39E600" },
  { name: "Design", value: 18, color: "#F97316" },
  { name: "HR", value: 10, color: "#EC4899" },
  { name: "Finance", value: 6, color: "#9333EA" },
];


const total = pieData.reduce((a, b) => a + b.value, 0);



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
    <div className="hr-dashboard-main">

      <HrDashboardSidebar isOpen={isOpen}/>

      <div className={'hr-dashboard-right $ {isOpen ? "open" :"close"}'}>

        <HrDashboardNav toggleSidebar={toggleSidebar} />

       
        <div className="welcome">

          <h1>Welcome back, Sudhakar!</h1>

          <p>
            Here's What's happening with your internship program today.
          </p>

        </div>

<div className="hr-dashboard-cards">

<div className="hr-dashboard-card-box">

  <img src={totalinterns} alt="" />
  <div>
    <h6>Total Interns</h6>
    <h5>128</h5>
    <p>
      <span>12.5%</span> From last Month
    </p>
  </div>

</div>

<div className="hr-dashboard-card-box">
  <img src={activeinternships} alt="" />
  <div>
    <h6>Active Internships</h6>
    <h5>84</h5>
    <p>
      <span>8.95%</span> From last Month
    </p>
  </div>
</div>

<div className="hr-dashboard-card-box">
  <img src={newapplications} alt="" />
  <div>
    <h6>New Applications</h6>
    <h5>32</h5>
    <p>
      <span>13.5%</span> From last Month
    </p>
  </div>
</div>

<div className="hr-dashboard-card-box">
  <img src={ongoingproject} alt="" />
  <div>
    <h6>Ongoing Project</h6>
    <h5>23</h5>
    <p>
      <span>8.5%</span> From last Month
    </p>
  </div>
</div>

</div>


<div className="charts-wrapper">
 
      <div className="chart-card">

        <div className="chart-header">
          <h3>Internns Overview</h3>

          <select>
            <option>This Month</option>
            <option>Last Month</option>
          </select>
        </div>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={lineData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="interns"
              stroke="#2563EB"
              strokeWidth={3}
              dot={{ r: 5, fill: "#2563EB" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-card">

        <div className="chart-header">
          <h3>Interns by Department</h3>
        </div>

        <div className="pie-section">

          <ResponsiveContainer width={230} height={230}>
            <PieChart>
              <Tooltip content={<CustomTooltip />} />
              <Pie
                data={pieData}
                dataKey="value"
                innerRadius={55}
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
                fontSize="34"
                fontWeight="700"
              >
                {total}
              </text>

              <text
                x="50%"
                y="60%"
                textAnchor="middle"
                fontSize="14"
                fill="#777"
              >
                Total
              </text>

            </PieChart>
          </ResponsiveContainer>

          <div className="legend">

            {pieData.map((item) => (
              <div className="legend-item" key={item.name}>

                <span
                  className="dot"
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

    </div>




</div>
     

      </div>

    
  );
};