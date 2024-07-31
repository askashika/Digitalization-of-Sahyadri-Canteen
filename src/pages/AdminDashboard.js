import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:3001/admin/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('There was an error fetching the orders!', error);
      }
    };

    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('http://localhost:3001/feedback');
        setFeedbacks(response.data);
      } catch (error) {
        console.error('There was an error fetching the feedbacks!', error);
      }
    };

    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:3001/booking');
        setBookings(response.data);
      } catch (error) {
        console.error('There was an error fetching the bookings!', error);
      }
    };

    fetchOrders();
    fetchFeedbacks();
    fetchBookings();
  }, []);

  return (
    <div className="admin-dashboard-container">
      <h2 className="dashboard-title">Orders</h2>
      <table className="table orders-table">
        <thead>
          <tr>
            <th>Guest Name</th>
            <th>Ordered Food</th>
            <th>Number of Items</th>
            <th>Total Cost</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            
            <tr key={order._id}>
              <td>{order.customerName || 'N/A'}</td>
              <td>{Array.isArray(order.foodItems) ? order.foodItems.join(', ') : 'N/A'}</td>
              <td>{order.numberOfItems|| 'N/A'}</td>
              <td>${order.totalCost?.toFixed(2) || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="dashboard-title mt-5">Feedback</h2>
      <table className="table feedback-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((feedback) => (
            <tr key={feedback._id}>
              <td>{feedback.firstName || 'N/A'}</td>
              <td>{feedback.lastName || 'N/A'}</td>
              <td>{feedback.emailAddress || 'N/A'}</td>
              <td>{feedback.phoneNumber || 'N/A'}</td>
              <td>{feedback.comments || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="dashboard-title mt-5">Bookings</h2>
      <table className="table bookings-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Time</th>
            <th>People</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id}>
              <td>{booking.name || 'N/A'}</td>
              <td>{booking.email || 'N/A'}</td>
              <td>{new Date(booking.date).toLocaleDateString() || 'N/A'}</td>
              <td>{booking.time || 'N/A'}</td>
              <td>{booking.people || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
