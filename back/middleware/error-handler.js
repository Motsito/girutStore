// Define an error handling middleware function that takes four parameters:
// - 'err': The error object.
// - 'req': The Express request object.
// - 'res': The Express response object.
// - 'next': The next function in the middleware chain.
const errorHandlerMiddleware = async (err, req, res, next) => {
  // Return a JSON response with a 500 status code and a generic error message
  return res
    .status(500)
    .json({ msg: "Something went wrong, please try again" });
};

// Export the 'errorHandlerMiddleware' function for use in other parts of the application
module.exports = errorHandlerMiddleware;
