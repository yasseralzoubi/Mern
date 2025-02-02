const express = require('express');
const app = express.Router();
const PersonController = require('../controllers/person.controller');  // Ensure this path is correct

// Define your routes
app.get('/api/yasser', PersonController.index);  
app.get('/api/person', PersonController.getAllPersons); 
app.post('/api/person', PersonController.createPerson); 
app.delete('/api/person/:id', PersonController.deletePerson);


// Export the router
module.exports = app; // Export the router, not a function