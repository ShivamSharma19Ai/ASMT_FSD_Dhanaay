const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
  },
});

module.exports = mongoose.model('Feedback', FeedbackSchema);