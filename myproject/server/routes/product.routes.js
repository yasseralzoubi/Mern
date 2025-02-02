require("../controllers/product.controller")

const ProductController = require('../controllers/product.controller');

 

module.exports = app => {

    app.get('/api/products/allproducts', ProductController.findAllProducts);

    
}


