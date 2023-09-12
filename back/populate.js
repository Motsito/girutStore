//populate.js cleans all extra data in the database

require("dotenv").config(); // Configure environment variables from a .env file

const connectDB = require("./db/connect"); // Import the database connection function
const Product = require("./models/product"); // Import the 'Product' model

const jsonProducts = require("./products.json"); // Import JSON data for products

// Define an asynchronous function 'start' for cleaning and populating the database
const start = async () => {
  try {
    // Connect to the MongoDB database using the provided URI
    await connectDB(process.env.MONGO_URI);

    // Delete all existing products in the database
    await Product.deleteMany();

    // Create new products in the database based on the imported JSON data
    await Product.create(jsonProducts);

    // Log a success message to the console
    console.log("Success");

    // Exit the Node.js process with a status code of 0 (success)
    process.exit(0);
  } catch (error) {
    // Log any errors to the console
    console.log(error);

    // Exit the Node.js process with a status code of 1 (failure)
    process.exit(1);
  }
};

// Call the 'start' function to execute the database cleaning and population process
start();
