import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "../../css/ParentDash.css";
import SpecialNeedsForm from "./AddChild";
import AppointmentForm from "../components/common/hero/Appointments";
import SearchSchool from "./SearchSchool";
// import ControlledCarousel from "./Reviews";
import AddChildButton from "../components/ChildComponent";
import Events from "../components/Events";

function ParentDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate(); // For programmatic navigation

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard-container">
      {/* Hamburger Button */}
      <button className="hamburger" onClick={toggleSidebar}>
        &#9776; {/* Hamburger icon */}
      </button>

      {/* Sidebar Navigation */}
      <aside className={`sidebarnav ${isSidebarOpen ? "" : "hide"}`}>
        <div className="brand-logo">EduCare Finder</div>
        <nav>
          <ul>
            <li onClick={() => navigate("/")}>🏠 Dashboard</li>
            <li onClick={() => navigate("/search-schools")}>🔍 Search Schools</li>
            <li onClick={() => navigate("/appointments")}>📅 Appointments</li>
            <li onClick={() => navigate("/reviews")}>⭐ Reviews</li>
            <li onClick={() => navigate("/add-child")}>👶 Add Child</li>
            <li onClick={() => navigate("/events")}>📢 Events</li>
            <li onClick={() => navigate("/logout")}>🚪 Logout</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1>Welcome, Parent!</h1>
          <div className="user-profile">👤 Profile</div>
        </header>

        

        {/* Route-Specific Content */}
        <Routes>
          <Route path="/" element={<h2>🏠 Parent Dashboard Overview</h2>} />
          <Route path="/search-schools" element={<SearchSchool />} />
          <Route path="/appointments" element={<AppointmentForm />} />
          {/* <Route path="/reviews" element={<ControlledCarousel />} /> */}
          <Route path="/add-child" element={<SpecialNeedsForm />} />
          <Route path="/events" element={<Events />} />

        </Routes>
      </main>
    </div>
  );
}

export default ParentDashboard;
