import React, { useState } from 'react';
import axios from 'axios';
import './EventForm.css'; // Import custom styles

const EventForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/events`, {
        name,
        date,
        location,
        description
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      
    <div className='event-form-card'>
        <div >
          <img src="https://img.freepik.com/free-vector/businessman-holding-pencil-big-complete-checklist-with-tick-marks_1150-35019.jpg?w=996&t=st=1720493119~exp=1720493719~hmac=542ee4f1c9a202636e09cc4ce7923ff8db9bc4be8d08304e4503b39d0e15f474" alt="Event Management" className='task-img' />
        </div>  
        <div>
            <h2>Create Event</h2>
            <input
                type="text"
                placeholder="Event Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
            />
            <input
                type="date"
                placeholder="Event Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="form-input"
            />
            <input
                type="text"
                placeholder="Event Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="form-input"
            />
            <textarea
                placeholder="Event Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-textarea"
            />
            <button type="submit" className="submit-button">Create Event</button>
          </div>
        </div>
    </form>
  );
};

export default EventForm;
