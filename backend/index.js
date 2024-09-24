const express = require('express');
const cors = require('cors');
require('./db/config');
const productRoutes = require('./routes/productRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');

const app = express();
app.use(express.json());  
app.use(cors());  


app.use('/api/products', productRoutes);
app.use('/api/feedback', feedbackRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});

