

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  foodItems: [
    {
      foodName: { type: String, required: true },
      numberOfItems: { type: Number, required: true },
      cost: { type: Number, required: true }
    }
  ],
  orderTime: { type: String, required: true },
  totalCost: { type: Number, required: true }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
