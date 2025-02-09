import React, { useState } from "react";
import SideBar from "./SideBar";
import EventCard from "./EventCard";
import FilterSort from "./FilterSort";
import "../App.css"; 

const eventsData = [
  {
    title: "Blood Donation Camp",
    description: "A small act of kindness can save lives...Participate in our blood donation camp and be a hero ! This event is open to all eligible donors and aims to replenish the community's blood supply.",
    date: "January 20, 2024",
    time: "9:00 AM - 3:00 PM",
    venue: "Red Cross Hall, M.G. Road",
    seats: 100,
    image: "event1.jpeg"
  },
  {
    title: "Marathon for a Cause",
    description: "Get ready to lace up your running shoes and join us in a spirited run for a cleaner and greener city ! This event welcomes everyone to contribute to a meaningful cause while having fun.",
    date: "February 25, 2024",
    time: "6:00 AM",
    venue: "Gandhi Square, Thrissur",
    seats: 1000,
    image: "event2.jpeg"
  },
  {
    title: "Tree Plantation Drive",
    description: "Planting trees is a powerful way to combat climate change,preserve biodiversity and enhance the beauty of our environment.Join us for our tree plantation drive and be part of a green movement.",
    date: "February 5, 2024",
    time: "8:00 AM",
    venue: "City Park, Kottayam",
    seats: 30,
    image: "event3.jpeg"
  },
];

/*const EventsPage = () => {
    return (
      <div className="events-page">
        <SideBar />
        <div className="events-content">
          <div className="header">
            <h1>Events</h1>
            <div className="filter-sort-buttons">
              <button className="filter-btn">Filter</button>
              <button className="sort-btn">Sort</button>
            </div>
          </div>
          <div className="event-cards">
            {eventsData.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default EventsPage;*/
  






  const EventsPage = () => {
    return (
      <div className="container">
        <SideBar />
        <div className="content">
          <h2>Events</h2>
          <div className="filter-sort-buttons">
            <button className="filter-btn">Filter</button>
            <button className="sort-btn">Sort</button>
          </div>
          <div className="events-grid">
            {eventsData.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default EventsPage;





/*const EventsPage = () => {
    const [filteredEvents, setFilteredEvents] = useState(eventsData);
  
    // Filter Function
    const handleFilter = (type) => {
      const today = new Date().toISOString().split("T")[0];
      if (type === "upcoming") {
        setFilteredEvents(eventsData.filter((event) => event.date > today));
      } else if (type === "past") {
        setFilteredEvents(eventsData.filter((event) => event.date < today));
      } else {
        setFilteredEvents(eventsData); // Show all events if no filter applied
      }
    };
  
    // Sort Function
    const handleSort = (criteria) => {
      const sortedEvents = [...filteredEvents].sort((a, b) => {
        if (criteria === "date") {
          return new Date(a.date) - new Date(b.date);
        } else if (criteria === "seats") {
          return a.seats - b.seats;
        }
        return 0;
      });
      setFilteredEvents(sortedEvents);
    };
  
    return (
      <div className="events-page">
        <SideBar />
        <div className="content">
          <h1>Events</h1>
          <FilterSort onFilter={handleFilter} onSort={handleSort} />
          <div className="events-container">
            {filteredEvents.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default EventsPage;*/
