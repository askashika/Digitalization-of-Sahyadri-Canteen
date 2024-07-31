// OrderForm.js
import React, { useState } from 'react';
import axios from 'axios';

function OrderForm() {
  const [customerName, setCustomerName] = useState('');
  const [foodItems, setFoodItems] = useState([{ foodName: '', numberOfItems: 1, cost: 0 }]);
  const [orderTime, setOrderTime] = useState('');

  const handleAddFoodItem = () => {
    setFoodItems([...foodItems, { foodName: '', numberOfItems: 1, cost: 0 }]);
  };

  const handleFoodItemChange = (index, event) => {
    const newFoodItems = [...foodItems];
    newFoodItems[index][event.target.name] = event.target.value;
    setFoodItems(newFoodItems);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/admin/orders', {
        customerName,
        foodItems,
        orderTime
      });
      alert('Order placed successfully');
      console.log(response.data);
    } catch (error) {
      console.error('There was an error placing the order!', error);
    }
  };

  return (
    <div className="container">
      <h2>Place Your Order</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>
        {foodItems.map((item, index) => (
          <div key={index} className="mb-3">
            <label className="form-label">Food Item {index + 1}</label>
            <input
              type="text"
              name="foodName"
              className="form-control"
              value={item.foodName}
              onChange={(e) => handleFoodItemChange(index, e)}
              placeholder="Food Name"
              required
            />
            <input
              type="number"
              name="numberOfItems"
              className="form-control mt-2"
              value={item.numberOfItems}
              onChange={(e) => handleFoodItemChange(index, e)}
              placeholder="Number of Items"
              min="1"
              required
            />
            <input
              type="number"
              name="cost"
              className="form-control mt-2"
              value={item.cost}
              onChange={(e) => handleFoodItemChange(index, e)}
              placeholder="Cost"
              min="0"
              step="0.01"
              required
            />
          </div>
        ))}
        <button type="button" className="btn btn-primary mb-3" onClick={handleAddFoodItem}>
          Add Another Food Item
        </button>
        <div className="mb-3">
          <label className="form-label">Order Time</label>
          <input
            type="time"
            className="form-control"
            value={orderTime}
            onChange={(e) => setOrderTime(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">Place Order</button>
      </form>
    </div>
  );
}

export default OrderForm;
