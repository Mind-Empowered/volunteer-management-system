import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faFilter, faSort } from '@fortawesome/free-solid-svg-icons';
import Sidebar from "./sidebar";
import './events.css';

class Events extends Component {
  state = {
    events: [
      {
        id: 1,
        title: "Blood Donation Camp",
        description: "A small act of kindness can save lives.",
        date: "January 20, 2024",
        time: "9:00 AM - 3:00 PM",
        venue: "Red Cross Hall, H.G. Road",
        seatsAvailable: 100,
        imageUrl: "https://cdn.vectorstock.com/i/500p/01/28/blood-donation-horizontal-poster-vector-28980128.jpg"
      },
      {
        id: 2,
        title: "Marathon for a Cause",
        description: "Join us in a spirited run for a cleaner and greener city!",
        date: "February 25, 2024",
        time: "6:00 AM",
        venue: "Gandhi Square, Thrissur",
        seatsAvailable: 1000,
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThgwE2s0MohXwRiPYezBcK4CAdQTIrmha9ig&s"
      },
      {
        id: 3,
        title: "Tree Plantation Drive",
        description: "Planting trees is a powerful way to combat climate change.",
        date: "February 5, 2024",
        time: "8:00 AM",
        venue: "City Park, Kottayam",
        seatsAvailable: 30,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt7gjU-teJrdvO4oEvKbrjMa_dFx_NmtlB_Q&s" // Replace with a valid image URL
      },
    ],
    notificationCount: 3, // Example notification count
  };

  render() {
    return (
      <div className="events-container">
        <Sidebar />
        <div className="events-content">
          <div className="events-header">
            <h2>Events</h2>
            <div className="filter-sort">
              <div className="notification-icon">
                <FontAwesomeIcon icon={faBell} />
                {this.state.notificationCount > 0 && (
                  <span className="notification-badge">{this.state.notificationCount}</span>
                )}
              </div>
              <button className="filter-btn">
                <FontAwesomeIcon icon={faFilter} /> Filter
              </button>
              <button className="sort-btn">
                <FontAwesomeIcon icon={faSort} /> Sort
              </button>
            </div>
          </div>
          <div className="events-grid">
            {this.state.events.map((event) => (
              <div key={event.id} className="event-card">
                {event.imageUrl && (
                  <img src={event.imageUrl} alt={event.title} className="event-image" />
                )}
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div className="event-details">
                  <p>Date: {event.date}</p>
                  <p>Time: {event.time}</p>
                  <p>Venue: {event.venue}</p>
                  <p>Seats Available: {event.seatsAvailable}</p>
                </div>
                <button className="join-now">Join now</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
