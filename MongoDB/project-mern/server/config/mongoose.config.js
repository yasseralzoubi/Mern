require('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose');

// Fetch the values from the environment variables
const dbName = "yasserdb"
const username = "yasser";
const pw = "711805zZ@"; // Ensure password is URL encoded

console.log(process.env.ATLAS_USERNAME);
console.log(process.env.ATLAS_PASSWORD);
console.log(process.env.DB);
// link from cluster
// mongodb+srv://yasser:<db_password>@mycluster0.rlht4.mongodb.net/?retryWrites=true&w=majority&appName=mYCluster0
// Create the MongoDB connection string
const uri = `mongodb+srv://${username}:${pw}@mycluster0.rlht4.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=mYCluster0`

// Connect to MongoDB using Mongoose
mongoose.connect(uri)
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));