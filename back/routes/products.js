const express = require("express"); // Import the Express.js framework
const router = express.Router(); // Create an instance of an Express router

const { getAllProducts, getProduct } = require("../controllers/products"); // Import the 'getAllProducts' function from the products controller

// Define a route for handling GET requests at the root of '/api/products'
// When a GET request is made to this route, it will invoke the 'getAllProducts' function from the products controller
router.route("/").get(getAllProducts);
router.route("/product/:id").get(getProduct);

// Export the router for use in other parts of the application
module.exports = router;
