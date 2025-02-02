
const Person = require('../models/person.model');  // Ensure the path is correct

module.exports.index = (request, response) => {  
    response.json({  
       message: "Hello World"  
    });  
}

module.exports.createPerson = async (request, response) => {
    Person.create(request.body)
        .then(newPerson => response.json(newPerson))
        .catch(err => {
            console.error('Error creating user:', err);
            response.status(500).json({ message: 'Server Error', error: err.message || err });
        });
};


module.exports.getAllPersons = async (request, response) => {
    try {
        const persons = await Person.find({});
        response.json(persons);
    } catch (err) {
        response.status(500).json({ message: "Error fetching persons", error: err });
    }
};

module.exports.deletePerson = async (request, response) => {
    try {
        const deletedPerson = await Person.findByIdAndDelete(request.params.id);
        response.json(deletedPerson);
    } catch (err) {
        response.status(500).json({ message: "Error deleting person", error: err });
    }
};

