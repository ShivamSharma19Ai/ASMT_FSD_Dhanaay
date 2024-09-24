const express = require('express');
const Product = require('../db/Product');
const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving products' });
  }
});


router.post('/', async (req, res) => {
  try {
    const { name, description } = req.body;
    const newProduct = new Product({ name, description });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error adding product' });
  }
});



module.exports = router;