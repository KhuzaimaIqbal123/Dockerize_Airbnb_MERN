import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    window.location.href = "/";
    };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
      <img
          src="data:image/png;base64,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"
          alt="logo"
          style={{ width: '150px', height: '80px' }} 
        />
        </Link>
      </div>
      <div className="navbar-links">
        <a href="/">🏠 Home</a>
        <a href="/experiences">🎈 Experiences</a>
        <a href="/online-experiences"> 🛎️ Online Experiences</a>
      </div>
      <div className="navbar-user">

        <div className="navbar-links">

        </div>

       <Link to="/login">
          <img 
            src="../login.png" 
            alt="Login" 
            className="login-icon" 
            style={{ width: "65px", height: "65px", cursor: "pointer" }}
          />
        </Link>

         {/* Logout */}
          <img 
            src="../logout.jpeg" 
            alt="Logout"
            onClick={handleLogout}
            className="icon-button"
            style={{ width: "60px", height: "60px", cursor: "pointer", marginRight: "10px" }}
          />
        <Link to="/signup">
        <img 
          src="../s1.jpeg" 
          alt="Signup"
          className="icon-button"
          style={{ width: "60px", height: "50px", cursor: "pointer" }}
        />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
