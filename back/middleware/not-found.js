// Define a middleware function to handle not found routes (404)
const notFound = (req, res) => res.status(404).send("Route does not exist");

// Export the 'notFound' middleware for use in other parts of the application
module.exports = notFound;
