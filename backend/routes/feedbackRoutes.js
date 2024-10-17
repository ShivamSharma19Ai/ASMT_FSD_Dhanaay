const express = require('express');
const Feedback = require('../db/Feedback');
const Product = require('../db/Product');
const router = express.Router();


router.post('/', async (req, res) => {
  try {
    const { product, name, rating, comment } = req.body;
    const productExists = await Product.findById(product);
    if (!productExists) {
      return res.status(400).json({ message: 'Product not found' });
    }

    const newFeedback = new Feedback({ product, name,rating, comment });
    await newFeedback.save();
    res.status(201).json({ message: 'Feedback submitted' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting feedback' });
  }
});


router.get('/history', async (req, res) => {
  try {
    const feedback = await Feedback.find();
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving feedback' });
  }
});


router.get('/product/:name', async (req, res) => {
    try {
        const feedbacks = await Feedback.find({ name: req.params.name });
        res.json(feedbacks);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});


router.get('/average/:name', async (req, res) => {
    try {
        const feedbacks = await Feedback.find({name: req.params.name });
        const averageRating =
            feedbacks.length > 0
                ? feedbacks.reduce((acc, feedback) => acc + feedback.rating, 0) / feedbacks.length
                : 0;

        res.json({ averageRating });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});


module.exports = router;
