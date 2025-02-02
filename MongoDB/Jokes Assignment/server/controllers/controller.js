const User = require('../models/model');  // Ensure the path is correct

// Controller function to get all users
const getAllUsers = (req, res) => {
    User.find()
        .then(allUsers => res.json(allUsers))
        .catch(err => {
            console.error('Error fetching users:', err);
            res.status(500).json({ message: 'Server Error', error: err.message || err });
        });
};
const createUser = (req, res) => {
    User.create(req.body)
        .then(newUser => res.json(newUser))
        .catch(err => {
            console.error('Error creating user:', err);
            res.status(500).json({ message: 'Server Error', error: err.message || err });
        });
};

const deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(deletedUser => res.json(deletedUser))
        .catch(err => {
            console.error('Error deleting user:', err);
            res.status(500).json({ message: 'Server Error', error: err.message || err });
        });
}

const updateUser = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedUser => res.json(updatedUser))
        .catch(err => {
            console.error('Error updating user:', err);
            res.status(500).json({ message: 'Server Error', error: err.message || err });
        });
}
module.exports = { getAllUsers,createUser,deleteUser,updateUser };  // Export as an object