const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    productName: {
        type: String,
        required : [ true, " Product name is required" ]
    },
    price: {
        type: Number,
        min : [ 1000 , "Choose price more than 1000" ]
    }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;