import React, { useState } from 'react';
import '../../css/School/SchoolHome.css'; // Import the CSS for styles
import { Bar, Pie, Line } from 'react-chartjs-2'; // For charts
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement, PointElement } from 'chart.js'; // Added PointElement import

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
  totalMaleStudents: 450,  // Number of male students
  totalFemaleStudents: 350, // Number of female students
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

// Data for Total Students Pie Chart with Male and Female breakdown
const totalStudentsData = {
  labels: ['Male Students', 'Female Students'],
  datasets: [
    {
      data: [analyticsData.totalMaleStudents, analyticsData.totalFemaleStudents], // Data for male and female students
      backgroundColor: ['#3498db', '#e74c3c'], // Blue for male, Red for female
    },
  ],
};

function Home() {
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (tooltipItem) {
            // Display value or percentage on hover
            const value = tooltipItem.raw;
            if (tooltipItem.datasetIndex === 0 && tooltipItem.chart.data.labels) {
              const label = tooltipItem.chart.data.labels[tooltipItem.dataIndex];
              return `${label}: ${value}`;
            }
            return value;
          },
        },
      },
    },
  };

  return (
    <div className="home">
      {/* Content Container */}
      <div className="content-container">
        {/* Left Section - Analytics: Total Reports and Enrollment Status */}
        <div className="analytics-left">
          <div className="analytics-item">
            <h4>Total Reports</h4>
            <div className="bar-graph">
              {/* Bar Chart for Total Reports */}
              <Bar data={totalReportsData} options={options} />
            </div>
          </div>

          <div className="analytics-item">
            <h4>Enrollment Status</h4>
            <div className="pie-chart">
              {/* Pie Chart for Enrollment Status */}
              <Pie data={enrollmentStatusData} options={options} />
            </div>
          </div>
        </div>

        {/* Right Section - Analytics: Student Performance and Total Students (Gender Breakdown) */}
        <div className="analytics-right">
          <div className="analytics-item">
            <h4>Student Performance Over Time</h4>
            <div className="line-graph">
              {/* Line Chart for Student Performance */}
              <Line data={studentPerformanceData} options={options} />
            </div>
          </div>

          <div className="analytics-item">
            <h4>Total Students (Gender Breakdown)</h4>
            <div className="pie-chart">
              {/* Pie Chart for Total Students Gender Breakdown */}
              <Pie data={totalStudentsData} options={options} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
