import React, { useState } from 'react';
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

  // Handle search input
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filtered = initialContacts.filter((contact) =>
      contact.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
      contact.email.toLowerCase().includes(event.target.value.toLowerCase()) ||
      contact.phone.includes(event.target.value)
    );
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
    // In a real-world scenario, this would probably redirect to a student details page.
    console.log(`Redirecting to student details for student ID: ${studentId}`);
    // You could use something like React Router's `history.push` here to redirect:
    // history.push(`/students/${studentId}`);
  };

  return (
    <div className="contact-details">
      <h2>Contact Details</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search Contacts..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />

      {/* Show the total number of contacts */}
      <p>Total Contacts: {filteredContacts.length}</p>

      {/* Teacher and Staff Directory */}
      <section>
        <h3 onClick={() => toggleCollapse('Teacher')}>
          School Staff ({groupByType('Teacher').length})
        </h3>
        {!collapsedSections.Teacher && (
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
        )}
      </section>

      {/* Parent and Guardian Contact Information */}
      <section>
        <h3 onClick={() => toggleCollapse('Parent')}>
          Parent/Guardian ({groupByType('Parent').length})
        </h3>
        {!collapsedSections.Parent && (
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
        )}
      </section>

      {/* Emergency Contact Information */}
      <section>
        <h3 onClick={() => toggleCollapse('Emergency Contact')}>
          Healthcare Specialists ({groupByType('Emergency Contact').length})
        </h3>
        {!collapsedSections['Emergency Contact'] && (
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
        )}
      </section>
    </div>
  );
}

export default ContactDetails;
