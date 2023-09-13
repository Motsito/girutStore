const mongoose = require("mongoose"); // Import the Mongoose library for working with MongoDB

// Define a Mongoose schema for the 'Product' model
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name must be provided"], // Define a required field with an error message
  },
  company: {
    type: String,
    required: true,
    default: "MSI",
  },
  rating: {
    type: Number,
    default: 4.5, // Set a default value for the 'rating' field
  },
  price: {
    type: Number,
    required: [true, "Product price must be provided"], // Define a required field with an error message
  },
  img: {
    type: String,
    default: [true, "img must be provided"], // Set a default value for the 'featured' field
  },
});

// Export the Mongoose model 'Product' with the defined schema
module.exports = mongoose.model("Product", productSchema);
