import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="intern">
        <h2>InternMS</h2>
      </div>
      <div className="nav-buttons">
        <Link to="/login" className="login-btn">
    Login
  </Link>
        <button className="register-btn">Register</button>
      </div>
    </nav>
  );
}