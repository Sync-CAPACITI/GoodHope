import React, { useState } from 'react';
import '../css/School/Reports.css';

function Reports() {
  // Sample data for the reports
  const [reports, setReports] = useState({
    totalReports: 50,
    reportStatus: {
      pending: 10,
      inProgress: 5,
      completed: 35,
    },
    typesOfReports: [
      'Academic Progress',
      'Behavioral Reports',
      'Counseling Logs',
    ],
    practitionerFeedback: [
      "Student is showing significant improvement in academics.",
      "Behavioral issues have been resolved with the new plan.",
      "Student needs additional counseling support for emotional well-being.",
    ],
  });

  // State for tracking which section is expanded
  const [expandedSection, setExpandedSection] = useState(null);

  // Function to toggle the expansion of a section
  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="reports">
      <h2>Reports from Practitioners</h2>

      {/* Report Count */}
      <p>Number of Reports Submitted: {reports.totalReports}</p>

      {/* Report Status Section */}
      <div>
        <button onClick={() => toggleSection('status')}>
          {expandedSection === 'status' ? 'Collapse' : 'Expand'} Report Status
        </button>
        {expandedSection === 'status' && (
          <div>
            <p>Report Status:</p>
            <ul>
              <li>Pending: {reports.reportStatus.pending}</li>
              <li>In Progress: {reports.reportStatus.inProgress}</li>
              <li>Completed: {reports.reportStatus.completed}</li>
            </ul>
          </div>
        )}
      </div>

      {/* Types of Reports Section */}
      <div>
        <button onClick={() => toggleSection('types')}>
          {expandedSection === 'types' ? 'Collapse' : 'Expand'} Types of Reports
        </button>
        {expandedSection === 'types' && (
          <div>
            <h3>Types of Reports:</h3>
            <ul>
              {reports.typesOfReports.map((reportType, index) => (
                <li key={index}>{reportType}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Practitioner Feedback Section */}
      <div>
        <button onClick={() => toggleSection('feedback')}>
          {expandedSection === 'feedback' ? 'Collapse' : 'Expand'} Practitioner Feedback
        </button>
        {expandedSection === 'feedback' && (
          <div>
            <h3>Practitioner Feedback:</h3>
            <ul>
              {reports.practitionerFeedback.map((feedback, index) => (
                <li key={index}>"{feedback}"</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <h2>Recommendations</h2>
      <p>Make sure to review all reports regularly and act upon feedback for student improvement.</p>
    </div>
  );
}

export default Reports;
