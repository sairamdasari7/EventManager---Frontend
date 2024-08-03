import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventForm from '../components/EventForm';
import EventList from '../components/EventList';
import './Dashboard.css'; // Import the CSS file for styling

const Dashboard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/events`);
        setEvents(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="dashboard">
      
      <div className="content">
        <h1>Dashboard</h1>
        <EventForm />
        <EventList events={events} />
      </div>
    </div>
  );
};

export default Dashboard;
