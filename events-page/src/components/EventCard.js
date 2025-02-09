import React from "react";
import "../App.css"; 

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <img src={`/images/${event.image}`} alt={event.title} className="event-image" />
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Time:</strong> {event.time}</p>
      <p><strong>Venue:</strong> {event.venue}</p>
      <p><strong>Seats Available:</strong> {event.seats}</p>
      <button className="join-button">Join Now</button>
    </div>
  );
};

export default EventCard;
