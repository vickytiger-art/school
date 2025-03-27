import React, { useState } from "react";
import "./Events.css";
import { IoIosAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([
    { id: 1, name: "Annual Function", image: "https://source.unsplash.com/400x300/?celebration" },
    { id: 2, name: "Independence Day", image: "https://source.unsplash.com/400x300/?india,flag" },
    { id: 3, name: "Republic Day", image: "https://source.unsplash.com/400x300/?parade" },
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [newEventName, setNewEventName] = useState("");
  const [newEventImage, setNewEventImage] = useState("");

  const addEvent = () => {
    if (newEventName.trim() && newEventImage.trim()) {
      setEvents([...events, { id: events.length + 1, name: newEventName, image: newEventImage }]);
      setNewEventName("");
      setNewEventImage("");
      setShowPopup(false);
    }
  };

  return (
    <div className="events-container">
      <h2 className="events-title">School Events</h2>
      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card" onClick={() => navigate(`/Events/EventDetails`)}>
            <img src={event.image} alt={event.name} />
            <h3>{event.name}</h3>
          </div>
        ))}
      </div>

      {/* Admin Only: Add Event Button */}
      <button className="add-event-btn" onClick={() => setShowPopup(true)}>
        <IoIosAddCircle /> Add Event
      </button>

      {/* Add Event Popup */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Add New Event</h3>
            <input type="text" placeholder="Event Name" value={newEventName} onChange={(e) => setNewEventName(e.target.value)} />
            <input type="text" placeholder="Event Image URL" value={newEventImage} onChange={(e) => setNewEventImage(e.target.value)} />
            <button onClick={addEvent}>Add</button>
            <button className="close-btn" onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
