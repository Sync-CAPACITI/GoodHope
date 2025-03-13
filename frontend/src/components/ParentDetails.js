import React, { useState } from 'react';

function ParentDetails() {
  // Sample data for Parent Engagement and Meeting Schedule
  const [parentEngagement, setParentEngagement] = useState({
    participation: 5, // Number of events/meetings the parent participated in
    volunteerActivities: ['Fundraiser', 'Field Trip Chaperone', 'Classroom Helper'], // List of volunteer activities
  });

  const [meetingSchedule, setMeetingSchedule] = useState({
    upcomingMeetings: [
      { date: 'March 15, 2025', time: '10:00 AM', location: 'Room 101', feedback: 'Looking forward to discussing student progress.' },
      { date: 'April 20, 2025', time: '2:00 PM', location: 'Room 102', feedback: 'Interested in behavioral support plans.' },
    ],
    meetingHistory: [
      { date: 'January 10, 2025', feedback: 'Had a great discussion about academic growth.' },
      { date: 'December 5, 2024', feedback: 'Requested additional resources for student’s needs.' },
    ],
  });

  return (
    <div className="parent-details">
      <h2>Parent Details</h2>
      <p>Parent Name: Sarah Brown</p>
      <p>Preferred Contact: Email</p>

      <h3>Parent Engagement</h3>
      <p>Participation in School Events: {parentEngagement.participation} events/meetings</p>
      <h4>Volunteer Activities:</h4>
      <ul>
        {parentEngagement.volunteerActivities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>

      <h3>Parent-Teacher Meeting Schedule</h3>
      <h4>Upcoming Meetings:</h4>
      <ul>
        {meetingSchedule.upcomingMeetings.map((meeting, index) => (
          <li key={index}>
            <p>
              <strong>{meeting.date} at {meeting.time}</strong> - {meeting.location}
            </p>
            <p><em>Feedback: {meeting.feedback}</em></p>
          </li>
        ))}
      </ul>

      <h4>Meeting History:</h4>
      <ul>
        {meetingSchedule.meetingHistory.map((meeting, index) => (
          <li key={index}>
            <p>
              <strong>{meeting.date}</strong>
            </p>
            <p><em>Feedback: {meeting.feedback}</em></p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ParentDetails;
