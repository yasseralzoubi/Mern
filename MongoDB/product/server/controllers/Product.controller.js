
const Product = require('../models/Product.model');  // Ensure the path is correct





module.exports.createProduct = async (request, response) => {
    Product.create(request.body)
        .then(newProduct => response.json(newProduct))
        .catch(err => {
            console.error('Error creating user:', err);
            response.status(500).json({ message: 'Server Error', error: err.message || err });
        });
};


module.exports.getAllProducts = async (request, response) => {
    try {
        const Products = await Product.find({});
        response.json(Products);
    } catch (err) {
        response.status(500).json({ message: "Error fetching Products", error: err });
    }
};






