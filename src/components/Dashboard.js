import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import StudentInfo from './StudentInfo';
import Reports from './Reports';
import ContactDetails from './ContactDetails';
import EnrollmentRequests from './EnrollmentRequests';
import ParentDetails from './ParentDetails';
import Events from './Events';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('student-info');

  return (
    <div className="dashboard">
      <h1>Welcome to the School Dashboard</h1>

      {/* Tab Navigation using React Bootstrap's Nav */}
      <Nav fill variant="tabs" activeKey={activeTab} onSelect={(selectedKey) => setActiveTab(selectedKey)}>
        {/* Home Link */}
        <Nav.Item>
          <Nav.Link eventKey="home" onClick={() => setActiveTab('home')}>
            Home
          </Nav.Link>
        </Nav.Item>

        {/* Other Tabs */}
        <Nav.Item>
          <Nav.Link eventKey="student-info">Students</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="reports">Reports</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="contact-details">Contacts</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="enrollment-requests">Enrollment</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="parent-details">Guardians</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="events">Events</Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Conditionally render the active tab content */}
      <div className="tab-content">
        {activeTab === 'home' && <div>Welcome to the Dashboard! This is the home section.</div>}
        {activeTab === 'student-info' && <StudentInfo />}
        {activeTab === 'reports' && <Reports />}
        {activeTab === 'contact-details' && <ContactDetails />}
        {activeTab === 'enrollment-requests' && <EnrollmentRequests />}
        {activeTab === 'parent-details' && <ParentDetails />}
        {activeTab === 'events' && <Events />}
      </div>
    </div>
  );
}

export default Dashboard;
