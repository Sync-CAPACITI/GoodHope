import React, { useState } from "react";
import 'frontend/src/css/Events.css';

const Events = () => {
  const [events] = useState([
    {
      id: 1,
      title: "Spring Festival",
      date: "2025-04-01",
      time: "10:00 AM",
      location: "Community Center",
      description: "A fun-filled festival with games, food, and performances.",
    },
    {
      id: 2,
      title: "Charity Walk",
      date: "2025-04-05",
      time: "8:00 AM",
      location: "City Park",
      description: "Join us for a charity walk to support the local community.",
    },
    {
      id: 3,
      title: "Tech Conference",
      date: "2025-04-10",
      time: "9:00 AM",
      location: "Convention Center",
      description:
        "An event for tech enthusiasts featuring workshops and talks.",
    },
  ]);

  return (
    <section className="dashboard-overview">
      <div className="overview-card">📅 Upcoming Appointments: 2</div>
      <div className="overview-card">🏫 Schools Followed: 5</div>
      <div className="overview-card">📢 Events Attending: 3</div>

      {/* Event Details Section moved below the overview cards */}
      <section className="events-details">
        <h2>Upcoming Events</h2>
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <p>
              <strong>Date:</strong> {event.date}
            </p>
            <p>
              <strong>Time:</strong> {event.time}
            </p>
            <p>
              <strong>Location:</strong> {event.location}
            </p>
            <p>
              <strong>Description:</strong> {event.description}
            </p>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Events;
