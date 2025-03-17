import React, { useState, useEffect } from 'react';
import '../css/School/Contacts.css'; // Importing a CSS file for styling

// Sample contact data (this can be replaced with real data)
const initialContacts = [
  {
    type: 'Teacher',
    name: 'John Doe',
    position: 'Math Teacher',
    email: 'johndoe@example.com',
    phone: '(555) 123-4567',
  },
  {
    type: 'Parent',
    name: 'Jane Smith',
    phone: '(555) 234-5678',
    email: 'janesmith@example.com',
    student: 'Emily Smith',
    studentId: 'S001', // Associated student
  },
  {
    type: 'Emergency Contact',
    name: 'Dr. Sarah Lee',
    position: 'Nurse',
    phone: '(555) 345-6789',
    email: 'drsarahlee@example.com',
  },
  {
    type: 'Emergency Contact',
    name: 'Dr. Sarr Li',
    position: 'Speech Therapist',
    phone: '(555) 345-6789',
    email: 'drsarahlee@example.com',
  },
  {
    type: 'Parent',
    name: 'Mark Johnson',
    phone: '(555) 456-7890',
    email: 'markjohnson@example.com',
    student: 'John Johnson',
    studentId: 'S002', // Associated student
  },
  {
    type: 'Teacher',
    name: 'Emma Brown',
    position: 'Science Teacher',
    email: 'emmabrown@example.com',
    phone: '(555) 567-8901',
  },
];

function ContactDetails() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(initialContacts);
  const [collapsedSections, setCollapsedSections] = useState({
    Teacher: true,
    Parent: true,
    'Emergency Contact': true,
  });

  // Handle search input and filter contacts
  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    // Filter contacts based on the search term (matching by name, email, or phone)
    const filtered = initialContacts.filter((contact) =>
      contact.name.toLowerCase().includes(term.toLowerCase()) ||
      contact.email.toLowerCase().includes(term.toLowerCase()) ||
      contact.phone.includes(term)
    );
    
    // Update the filtered contacts state
    setFilteredContacts(filtered);
  };

  // Grouped sections for contact details
  const groupByType = (type) => {
    return filteredContacts.filter((contact) => contact.type === type);
  };

  // Toggle collapse/expand for a section
  const toggleCollapse = (type) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  // Handle click on student's name
  const handleStudentClick = (studentId) => {
    console.log(`Redirecting to student details for student ID: ${studentId}`);
  };

  return (
    <div className="contact-details-container">
      {/* Left Tab: Sidebar */}
      <div className="sidebar">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search Contacts..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
      </div>

      {/* Right Tab: Content */}
      <div className="content">
        <h2>Contact Details</h2>

        {/* Show the total number of contacts */}
        <p>Total Contacts: {filteredContacts.length}</p>

        {/* Teacher and Staff Directory */}
        {!collapsedSections.Teacher && (
          <section>
            <h3>School Staff ({groupByType('Teacher').length})</h3>
            <table className="contact-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {groupByType('Teacher').map((contact, index) => (
                  <tr key={index}>
                    <td>{contact.name}</td>
                    <td>{contact.position}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {/* Parent and Guardian Contact Information */}
        {!collapsedSections.Parent && (
          <section>
            <h3>Parent/Guardian ({groupByType('Parent').length})</h3>
            <table className="contact-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Student</th> {/* New clickable column */}
                </tr>
              </thead>
              <tbody>
                {groupByType('Parent').map((contact, index) => (
                  <tr key={index}>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>
                      {contact.student ? (
                        <button
                          className="student-link"
                          onClick={() => handleStudentClick(contact.studentId)}
                        >
                          {contact.student}
                        </button>
                      ) : (
                        'No associated student'
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {/* Emergency Contact Information */}
        {!collapsedSections['Emergency Contact'] && (
          <section>
            <h3>Healthcare Specialists ({groupByType('Emergency Contact').length})</h3>
            <table className="contact-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {groupByType('Emergency Contact').map((contact, index) => (
                  <tr key={index}>
                    <td>{contact.name}</td>
                    <td>{contact.position}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}
      </div>
    </div>
  );
}

export default ContactDetails;
