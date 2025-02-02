
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

module.exports.getProductById = async (request, response) => {
    try {
        const id = request.params.id;
        const product = await Product.findById(id);
        if (!product) {
            response.status(404).json({ message: "Product not found" });
            }
            else {
                response.json(product);
                }
                } catch (err) {
                    response.status(500).json({ message: "Error fetching Product", error: err });
                    }
                    };




                    






