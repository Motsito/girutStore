const mongoose = require("mongoose"); // Import the Mongoose library for working with MongoDB

// Define a function 'connectDB' that takes a 'url' parameter for the MongoDB connection
const connectDB = (url) => {
  // Use Mongoose to connect to the MongoDB database using the provided URL
  return mongoose.connect(url, {
    useNewUrlParser: true, // Use the new URL parser
    useCreateIndex: true, // Ensure indexes are created
    useFindAndModify: false, // Disable 'findAndModify' to use native MongoDB methods
    useUnifiedTopology: true, // Use the new Server Discovery and Monitoring engine
  });
};

// Export the 'connectDB' function for use in other parts of the application
module.exports = connectDB;
