// Import necessary dependencies
require("dotenv").config(); // Configure environment variables from a .env file
require("express-async-errors"); // Middleware for handling asynchronous errors

const express = require("express"); // Import Express.js
const app = express(); // Create an instance of the Express application

const cors = require("cors");
const connectDB = require("./db/connect"); // Import the database connection function
const productsRouter = require("./routes/products"); // Import the products router
const cartRouter = require("./routes/cart");

// Middleware configuration

const notFoundMiddleware = require("./middleware/not-found"); // Middleware for handling not found routes
const errorMiddleware = require("./middleware/error-handler"); // Middleware for handling errors

// Routes definition (route sections are pending)

// Root route of the server
app.get("/", (req, res) => {
  res.send("<h1>Store API</h1><a href='/api/products'>products route</a>");
});

//middlewares
app.use(cors());
app.use(express.json());

// Routes related to products
app.use("/api/products", productsRouter);

app.use("/api/cart", cartRouter);

// Middlewares for handling not found routes and errors
app.use(notFoundMiddleware);
app.use(errorMiddleware);

// Configuration of the port on which the server will run
const port = process.env.PORT || 5000;

// Function to start the server
const start = async () => {
  try {
    // Connect to the database using the connectDB function
    await connectDB(process.env.MONGO_URI);

    // Start the server on the specified port
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

// Call the start function to initiate the server
start();
