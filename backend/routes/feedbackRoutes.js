const express = require('express');
const Feedback = require('../db/Feedback');
const Product = require('../db/Product');
const router = express.Router();


router.post('/', async (req, res) => {
  try {
    const { product, rating, comment } = req.body;
    const productExists = await Product.findById(product);
    if (!productExists) {
      return res.status(400).json({ message: 'Product not found' });
    }

    const newFeedback = new Feedback({ product, rating, comment });
    await newFeedback.save();
    res.status(201).json({ message: 'Feedback submitted' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting feedback' });
  }
});


router.get('/history', async (req, res) => {
  try {
    const feedback = await Feedback.find().populate('product'); 
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving feedback' });
  }
});

router.get('/product/:productId', async (req, res) => {
    try {
        const feedbacks = await Feedback.find({ product: req.params.productId }).populate('product');
        res.json(feedbacks);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});


router.get('/average/:productId', async (req, res) => {
    try {
        const feedbacks = await Feedback.find({ product: req.params.productId });
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
