const QueryString = require("qs"); // Import the 'qs' library for query string parsing
const Product = require("../models/product"); // Import the 'Product' model
const { log } = require("console");

// Define an asynchronous function to get all products
const getAllProducts = async (req, res) => {
  // Destructure query parameters from the request object
  const { featured, company, name, sort, fields } = req.query;

  // Create an empty object to build the database query
  const queryObject = {};

  // Check if 'featured' query parameter exists and set it in the queryObject
  if (featured) {
    queryObject.featured = featured === "true"; // Convert to boolean
  }

  // Check if 'company' query parameter exists and set it in the queryObject
  if (company) {
    queryObject.company = company;
  }

  // Check if 'name' query parameter exists and create a case-insensitive regex for it
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  // Start the database query with the basic queryObject
  let result = Product.find(queryObject);

  // Sort the results based on the 'sort' query parameter or use default sorting by 'createdAt'
  if (sort) {
    result = result.sort(sort);
  } else {
    result = result.sort("createAt");
  }

  // Select specific fields to include in the results based on the 'fields' query parameter
  if (fields) {
    const fieldsList = fields.split(",").join(" "); // Convert comma-separated fields to space-separated
    result = result.select(fieldsList);
  }

  // Define pagination parameters (page, limit, skip)
  const page = Number(req.query.page) || 1; // Default to page 1 if 'page' query parameter is not provided
  const limit = Number(req.query.limit) || 10; // Default to a limit of 10 if 'limit' query parameter is not provided
  const skip = (page - 1) * limit; // Calculate the number of documents to skip

  // Apply pagination to the query
  result = result.skip(skip).limit(limit);

  // Execute the database query and await the results
  const products = await result;

  // Send the products and the number of hits (length of products array) as a JSON response
  res.status(200).json({ products, nbHits: products.length });
};

// Export the 'getAllProducts' function for use in other parts of the application
module.exports = { getAllProducts };
