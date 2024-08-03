import React from 'react';

const EventList = ({ events, onDelete }) => {
  return (
    <div>
      <h2>Event List</h2>
      <ul>
        {events.map(event => (
          <li key={event._id}>
            {event.name} - {event.date} - {event.location}
            <button onClick={() => onDelete(event._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
