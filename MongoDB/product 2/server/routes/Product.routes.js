const express = require('express');
const app = express.Router();
const ProductController = require('../controllers/Product.controller');  // Ensure this path is correct

// Define your routes
// app.get('/api/yasser', ProductController.index);  
app.get('/api/Product', ProductController.getAllProducts); 
app.post('/api/Product', ProductController.createProduct); 
app.get('/api/Product/:id', ProductController.getProductById)

// Export the router
module.exports = app; // Export the router, not a function