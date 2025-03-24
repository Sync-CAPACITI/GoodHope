import React, { useState } from 'react';
import '../../css/School/SchoolEvents.css';

function Events() {
  // Sample data for Upcoming Events and Announcements
  const [upcomingEvents, setUpcomingEvents] = useState([
    { id: 1, name: 'Parent-Teacher Conference', date: 'March 20th', description: 'Discuss student progress' },
    { id: 2, name: 'School Play', date: 'April 5th', description: 'Join us for the annual school play' },
    { id: 3, name: 'Sports Day', date: 'May 10th', description: 'A day of friendly competition and fun' },
  ]);

  const [announcements, setAnnouncements] = useState([
    { id: 1, title: 'School will be closed on March 17th', status: 'Active', createdAt: '2025-03-01', updatedAt: '2025-03-01' },
    { id: 2, title: 'New uniform policy starting April', status: 'Scheduled', createdAt: '2025-02-20', updatedAt: '2025-02-25' },
  ]);

  // State for sending announcements
  const [bulkMessage, setBulkMessage] = useState('');

  // State for editing an announcement
  const [editingAnnouncement, setEditingAnnouncement] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedStatus, setEditedStatus] = useState('');

  // State for the expanded event
  const [expandedEventId, setExpandedEventId] = useState(null);

  // Function to toggle event details
  const toggleEventDetails = (id) => {
    if (expandedEventId === id) {
      setExpandedEventId(null); // Collapse if clicked on the already expanded event
    } else {
      setExpandedEventId(id); // Expand the clicked event
    }
  };

  // Function to create a new announcement
  const createAnnouncement = (title) => {
    const newAnnouncement = {
      id: announcements.length + 1,
      title,
      status: 'Active',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setAnnouncements([...announcements, newAnnouncement]);
  };

  // Function to delete an announcement
  const deleteAnnouncement = (id) => {
    setAnnouncements(announcements.filter((announcement) => announcement.id !== id));
  };

  // Function to update the announcement status (Active, Inactive, Scheduled)
  const updateAnnouncementStatus = (id, status) => {
    setAnnouncements(
      announcements.map((announcement) =>
        announcement.id === id ? { ...announcement, status } : announcement
      )
    );
  };

  // Function to edit the announcement
  const startEditing = (announcement) => {
    setEditingAnnouncement(announcement.id);
    setEditedTitle(announcement.title);
    setEditedStatus(announcement.status);
  };

  const saveEdit = (id) => {
    setAnnouncements(
      announcements.map((announcement) =>
        announcement.id === id ? { ...announcement, title: editedTitle, status: editedStatus, updatedAt: new Date().toISOString() } : announcement
      )
    );
    setEditingAnnouncement(null);
    setEditedTitle('');
    setEditedStatus('');
  };

  // Function to send bulk announcements
  const sendBulkAnnouncement = () => {
    // Simulate sending bulk messages to parents
    alert(`Bulk message sent to all parents: ${bulkMessage}`);
    setBulkMessage('');
  };

  return (
    <div className="events">
      <div className="content-container">
        {/* Upcoming Events Section */}
        <section className="upcoming-events">
          <h2>Upcoming Events</h2>
          {upcomingEvents.map((event) => (
            <div key={event.id} className="event-item">
              <button
                onClick={() => toggleEventDetails(event.id)}
                className="event-button"
              >
                {event.name}
              </button>
              {expandedEventId === event.id && (
                <div>
                  <p>Date: {event.date}</p>
                  <p>Description: {event.description}</p>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Announcements Section */}
        <section className="announcements">
          <h2>Announcements</h2>
          <h3>Current Announcements</h3>
          <ul>
            {announcements.map((announcement) => (
              <li key={announcement.id} className="announcement-item">
                {editingAnnouncement === announcement.id ? (
                  <>
                    <input
                      type="text"
                      value={editedTitle}
                      onChange={(e) => setEditedTitle(e.target.value)}
                    />
                    <select
                      value={editedStatus}
                      onChange={(e) => setEditedStatus(e.target.value)}
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                      <option value="Scheduled">Scheduled</option>
                    </select>
                    <button onClick={() => saveEdit(announcement.id)}>Save</button>
                    <button onClick={() => setEditingAnnouncement(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <p><strong>{announcement.title}</strong></p>
                    <p>Status: {announcement.status}</p>
                    <p>Created At: {announcement.createdAt}</p>
                    <p>Updated At: {announcement.updatedAt}</p>
                    <button onClick={() => deleteAnnouncement(announcement.id)}>Delete</button>
                    <button onClick={() => updateAnnouncementStatus(announcement.id, 'Inactive')}>Mark as Inactive</button>
                    <button onClick={() => updateAnnouncementStatus(announcement.id, 'Scheduled')}>Schedule Announcement</button>
                    <button onClick={() => startEditing(announcement)}>Edit</button>
                  </>
                )}
              </li>
            ))}
          </ul>

          <h3>Create New Announcement</h3>
          <button onClick={() => createAnnouncement('No School on March 20th due to weather conditions')}>
            Create New Announcement
          </button>
        </section>
      </div>

      {/* Bulk Announcement Section (centered at the bottom) */}
      <section className="bulk-announcement">
        <h3>Send Bulk Announcements to Parents</h3>
        <textarea
          value={bulkMessage}
          onChange={(e) => setBulkMessage(e.target.value)}
          placeholder="Type your message here"
          rows="4"
          cols="50"
        />
        <br />
        <button onClick={sendBulkAnnouncement}>Send Bulk Announcement</button>
      </section>
    </div>
  );
}

export default Events;
