const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const ordersRouter = require('./routes/orders');
const feedbackRouter = require('./routes/feedback');
const bookingRouter = require('./routes/booking');


const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb+srv://AshikaShridhara:kartinya04@cluster0.jnrevt7.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // Enable CORS
app.use('/feedback', feedbackRouter);
// Use the orders route
app.use('/admin/orders', ordersRouter);
app.use('/booking', bookingRouter);
// Define routes



app.post('/feedback', async (req, res) => {
  try {
    const { firstName, lastName, emailAddress, phoneNumber, comments } = req.body;
    // Save feedback to database
    res.status(200).json({ message: 'Feedback submitted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.post('/booking', async (req, res) => {
  try {
    const { name, email, date, time, people } = req.body;
    // Save booking to database
    res.status(200).json({ message: 'Table booked successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.get('/admin/bookings', async (req, res) => {
  try {
    // Retrieve bookings from database
    res.status(200).json([/* Booking data */]);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
