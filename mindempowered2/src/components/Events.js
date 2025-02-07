import React from "react";

const events = [
  {
    id: 1,
    title: "Blood Donation Camp",
    description: "Save lives by donating blood. Join us for this noble cause!",
    date: "Jan 20, 2024",
    time: "9:00 AM - 3:00 PM",
    venue: "Red Cross Hall",
    seats: 100,
    image: "https://source.unsplash.com/400x300/?blood-donation",
  },
  {
    id: 2,
    title: "Marathon for a Cause",
    description: "Run for a cleaner and greener city!",
    date: "Feb 25, 2024",
    time: "6:00 AM",
    venue: "Gandhi Square",
    seats: 1000,
    image: "https://source.unsplash.com/400x300/?marathon",
  },
];

const Events = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-1/5 bg-yellow-700 text-white p-6">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <nav className="mt-4">
          <ul>
            <li className="py-2 hover:bg-yellow-600 px-3 rounded cursor-pointer">Dashboard</li>
            <li className="py-2 bg-yellow-600 px-3 rounded font-bold">Events</li>
            <li className="py-2 hover:bg-yellow-600 px-3 rounded cursor-pointer">Members</li>
            <li className="py-2 hover:bg-yellow-600 px-3 rounded cursor-pointer">Profile</li>
            <li className="py-2 hover:bg-yellow-600 px-3 rounded cursor-pointer">Feedback</li>
            <li className="py-2 hover:bg-yellow-600 px-3 rounded cursor-pointer">Logout</li>
          </ul>
        </nav>
      </aside>

      {/* Events Section */}
      <main className="flex-1 bg-gray-100 p-6">
        {/* Events Heading */}
        <h1 className="text-3xl font-bold mb-6">Events</h1>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{event.title}</h3>
                <p className="text-gray-700">{event.description}</p>
                <p className="text-gray-500"><strong>Date:</strong> {event.date}</p>
                <p className="text-gray-500"><strong>Time:</strong> {event.time}</p>
                <p className="text-gray-500"><strong>Venue:</strong> {event.venue}</p>
                <button className="mt-3 w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600">
                  Join Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Events;
