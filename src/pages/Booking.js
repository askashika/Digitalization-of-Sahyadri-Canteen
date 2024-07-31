import React, { useState } from 'react';
import axios from 'axios';
import './Booking.css';

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    people: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/booking', formData);
      alert(response.data.message);
    } catch (error) {
      console.error('There was an error booking the table!', error);
    }
  };

  return (
    <div className="booking-container">
      <form className="booking-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Secure a Table</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required className="form-input" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required className="form-input" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" required className="form-input" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input type="time" id="time" name="time" required className="form-input" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="people">Number of People:</label>
          <input type="number" id="people" name="people" required className="form-input" onChange={handleChange} />
        </div>
        <button type="submit" className="submit-button">Book</button>
      </form>
    </div>
  );
}

export default Booking;
