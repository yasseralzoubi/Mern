const express = require('express');
const router = express.Router();
const { getAllUsers,createUser,deleteUser,updateUser } = require('../controllers/controller'); // Ensure this path is correct

// Define your routes
router.get('/api/users', getAllUsers);
router.post('/api/users', createUser);
router.delete('/api/users/delete/:id', deleteUser);
router.put('/api/users/update/:id', updateUser);
// Export the router
module.exports = router; // Export the router, not a function