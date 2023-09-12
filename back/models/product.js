const mongoose = require("mongoose"); // Import the Mongoose library for working with MongoDB

// Define a Mongoose schema for the 'Product' model
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name must be provided"], // Define a required field with an error message
  },
  price: {
    type: Number,
    required: [true, "Product price must be provided"], // Define a required field with an error message
  },
  featured: {
    type: Boolean,
    default: false, // Set a default value for the 'featured' field
  },
  rating: {
    type: Number,
    default: 4.5, // Set a default value for the 'rating' field
  },
  createdAt: {
    type: Date,
    default: Date.now(), // Set a default value for the 'createdAt' field to the current date and time
  },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"], // Define an enumeration of allowed values
      message: "{VALUE} is not supported", // Define a custom error message for invalid values
    },
  },
});

// Export the Mongoose model 'Product' with the defined schema
module.exports = mongoose.model("Product", productSchema);
