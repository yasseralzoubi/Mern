const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First Name is Required!']
    },
    lastName: {
        type: String,
        required: true,
    }
});

const Person = mongoose.model('Person', PersonSchema);

module.exports = Person;