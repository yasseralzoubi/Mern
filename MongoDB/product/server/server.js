require('dotenv').config();
require('./config/mongoose.config');

const express = require('express');
const app = express();
const port = process.env.PORT;

const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

// // Routes
//const userRoutes = require('./routes/routes');
const userRoutes = require('./routes/Product.routes');
  
app.use(userRoutes);
 
// Start server
app.listen(port, () => {
    console.log(`Listening at Port ${port}`);
});