import React from "react";
import "../../css/ParentDash.css";
import SpecialNeedsForm from "./AddChild";
import AppointmentForm from "../components/common/hero/Appointments";
import SearchSchool from "./SearchSchool";
import ControlledCarousel, { CarouseReviews } from "./Reviews";


function ParentDashboard() {
  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div className="brand-logo">EduCare Finder</div>
        <nav>
          <ul>
            <li>🏠 Dashboard</li>
            <li>🔍 Search Schools</li>
            <li>📅 Appointments</li>
            <li>💬 Messages</li>
            <li>⭐ Reviews</li>
            <li>📢 Events</li>
            <li>⚙️ Settings</li>
            <li>🚪 Logout</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1>Welcome, Parent!</h1>
          <div className="user-profile">👤 Profile</div>
        </header>

        <section className="dashboard-overview">
          <div className="overview-card">📅 Upcoming Appointments: 2</div>
          <div className="overview-card">🏫 Schools Followed: 5</div>
          <div className="overview-card">📢 Events Attending: 3</div>
        </section>

        <section className="dashboard-content">
          <div className="appointments">
            <h2>Manage Appointments</h2>
            <button>Schedule New</button>
            <ul>
              <li>Greenwood Special School - March 15, 2025</li>
              <li>Sunrise Academy - March 20, 2025</li>
            </ul>
          </div>

          <div className="reviews">
            <h2>Recent Reviews</h2>
            <p>🌟 "Greenwood Special School provides great therapy support."</p>
            <p>🌟 "Sunrise Academy has a wonderful inclusive environment!"</p>
          </div>
        </section>
        {/* <SpecialNeedsForm/> */}
        {/* <AppointmentForm/> */}
        <SearchSchool/>
        <CarouseReviews/>
      </main>
    </div>
  );
}



export default ParentDashboard;
