const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/', async (req, res) => {
  try {
    const { customerName, foodItems, orderTime, totalCost } = req.body;
    const newOrder = new Order({ customerName, foodItems, orderTime, totalCost });
    await newOrder.save();
    res.status(201).json({ message: 'Order placed successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'There was an error placing the order!', error });
  }
});

router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'There was an error fetching the orders!', error });
  }
});

module.exports = router;
