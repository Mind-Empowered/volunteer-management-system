import React from "react";
import logo from "../assets/logo.png";
import dashboardIcon from "../assets/icons/dashboard.svg";
import membersIcon from "../assets/icons/members.svg";
import eventsIcon from "../assets/icons/events.svg";
import profileIcon from "../assets/icons/profile.svg";
import feedbackIcon from "../assets/icons/feedback.svg";
import logoutIcon from "../assets/icons/logout.svg";



const Sidebar = () => {
    return (
      <div className="bg-warning min-vh-100 p-3 text-white" style={{ width: "250px" }}>
      {/* Logo Section */}
      <div className="text-center mb-2">
        <img src={logo} alt="Logo" style={{ width: "80px", height: "80px" }} />
      </div>
      
      
        <ul className="nav flex-column mt-4">
        <li className="nav-item text-center">
        <img src={dashboardIcon} alt="Dashboard" width="30" className="mb-1 " style={{ filter: "brightness(0) invert(1)" }} />
        <a href="/" className="nav-link text-white my-2">Dashboard</a>
      </li>
      <li className="nav-item text-center">
          <img src={membersIcon} alt="Members" width="30" className="mb-1" style={{ filter: "brightness(0) invert(1)" }}/>
          <a href="/" className="nav-link text-white my-2">Members</a>
        </li>
        <li className="nav-item text-center">
          <img src={eventsIcon} alt="Events" width="30" className="mb-1" style={{ filter: "brightness(0) invert(1)" }}/>
          <a href="/" className="nav-link text-white my-2">Events</a>
        </li>
        <li className="nav-item text-center">
          <img src={profileIcon} alt="Profile" width="30" className="mb-1" style={{ filter: "brightness(0) invert(1)" }}/>
          <a href="/" className="nav-link text-white my-2">Profile</a>
        </li>
        <li className="nav-item text-center">
          <img src={feedbackIcon} alt="Feedback" width="30" className="mb-1" style={{ filter: "brightness(0) invert(1)" }}/>
          <a href="/" className="nav-link text-white my-2">Feedback</a>
        </li>
        
        <li className="nav-item text-center">
        
          <img src={logoutIcon} alt="Logout" width="30" className="mb-1" style={{ filter: "brightness(0) invert(1)" }}/>
          <a href="/" className="nav-link text-white">Logout</a>
        </li>
        </ul>
      </div>
    );
  };
  
  export default Sidebar;
  