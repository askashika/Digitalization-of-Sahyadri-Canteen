const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  emailAddress: String,
  phoneNumber: String,
  comments: String,
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', feedbackSchema);
