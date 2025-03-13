import React, { useState } from 'react';
import '../css/School/Home.css'; // Make sure to import the CSS for styles
import { Bar, Pie, Line } from 'react-chartjs-2'; // For charts
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement, PointElement } from 'chart.js'; // Added PointElement import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome
import { faBell } from '@fortawesome/free-solid-svg-icons'; // Notification bell icon

// Register the required components for Chart.js v3+
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement, // for pie charts
    LineElement, // for line charts
    PointElement // for points (to fix the "point is not registered" error)
);

// Dummy data for analytics
const analyticsData = {
  totalReports: 120,
  totalStudents: 800,
  totalTeachers: 50,
  totalHealthcareSpecialists: 5,
  enrollmentRequests: 30,
  schoolPerformanceRating: 85, // out of 100
};

// Dummy data for charts
const studentPerformanceData = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Student Performance',
      data: [85, 88, 84, 90, 87],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

const totalReportsData = {
  labels: ['Reports'],
  datasets: [
    {
      label: 'Total Reports',
      data: [analyticsData.totalReports],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
  ],
};

const enrollmentStatusData = {
  labels: ['Approved', 'Denied', 'Pending'],
  datasets: [
    {
      data: [60, 15, 25], // Percentage or count
      backgroundColor: ['#4CAF50', '#FF6347', '#FFD700'],
    },
  ],
};

function Home() {
  const [showNotifications, setShowNotifications] = useState(false);

  // Toggle notification dropdown
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="home">
      <div className="content-container">
        {/* Left Section - Analytics */}
        <div className="analytics">
          <h3>Analytics Overview</h3>

          <div className="analytics-item">
            <h4>Total Reports</h4>
            <div className="bar-graph">
              {/* Bar Chart for Total Reports */}
              <Bar data={totalReportsData} options={{ responsive: true }} />
            </div>
          </div>

          <div className="analytics-item">
            <h4>Student Performance Over Time</h4>
            <div className="line-graph">
              {/* Line Chart for Student Performance */}
              <Line data={studentPerformanceData} options={{ responsive: true }} />
            </div>
          </div>

          <div className="analytics-item">
            <h4>Enrollment Status</h4>
            <div className="pie-chart">
              {/* Pie Chart for Enrollment Status */}
              <Pie data={enrollmentStatusData} options={{ responsive: true }} />
            </div>
          </div>

          <div className="analytics-item">
            <h4>Total Students</h4>
            <div className="pie-chart">
              <div className="circle">
                <span>{analyticsData.totalStudents}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Notifications & Alerts */}
        <div className="notifications-alerts">
          <h3>Notifications & Alerts</h3>

          {/* Notification Bell Icon */}
          <div className="notification-bell">
            <FontAwesomeIcon
              icon={faBell}
              size="2x"
              onClick={toggleNotifications}
              style={{ cursor: 'pointer', marginRight: '15px' }}
            />
            {showNotifications && (
              <div className="notifications-dropdown">
                <div className="important-alerts">
                  <h4>Important Alerts:</h4>
                  <ul>
                    <li>Upcoming deadline for event registration: March 25th.</li>
                    <li>Enrollment for the new semester ends on April 10th.</li>
                  </ul>
                </div>

                <div className="system-alerts">
                  <h4>System Alerts:</h4>
                  <ul>
                    <li>Missing student records for grades 5 and 6.</li>
                    <li>Report generation system maintenance scheduled for March 22nd.</li>
                  </ul>
                </div>

                <div className="event-reminders">
                  <h4>Event Reminders:</h4>
                  <ul>
                    <li>Reminder: Parent-Teacher Conference on March 20th.</li>
                    <li>Reminder: School Play on April 5th.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
