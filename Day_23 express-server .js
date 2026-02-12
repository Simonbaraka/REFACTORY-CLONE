/*
 =====================================================
 IMPORTS
 =====================================================
*/

// Import the Express framework Express helps us create web servers and APIs easily
const express = require("express");
const cors = require("cors");
// Import Mongoose models from our database file
// These models allow us to interact with MongoDB collections
const { SalesModel, CreditSaleModel } = require("./Day_25_MongoDB");
const { Router: SalesRouter } = require("./ROUTERS/sales.js");
const { simulateMiddleware } = require("./MiddleWare/index.js");
const { errorHandler } = require("./MiddleWare/errormiddleware.js");

/*
 =====================================================
 APPLICATION INITIALIZATION
 =====================================================
*/

// Create an Express application instance
// This "app" object represents our web server
// We use it to define middleware, routes, and settings
const app = express();

/*
 =====================================================
 GLOBAL MIDDLEWARE
 =====================================================
*/

// Middleware runs BEFORE routes

// This middleware converts incoming JSON request bodies into JavaScript objects and stores them in req.body
// Without this, req.body would be undefined
app.use(express.json());

// This middleware handles form data (HTML forms)
app.use(express.urlencoded({ extended: true }));
app.use(cors());
/*
 =====================================================
 CUSTOM AUTHORIZATION MIDDLEWARE
 =====================================================
*/

// This middleware checks if a user is authorized
// It reads "user-details" from request headers
// If valid, the request continues
// If invalid, the request is blocked

const userdetails = (req, res, next) => {
  try {
    // Get custom header called "user-details"
    const userdetailsString = req.get("user-details");

    // If header is missing, block request
    if (!userdetailsString) {
      return res.status(403).json("No user details provided");
    }

    // Convert JSON string into JavaScript object
    const userDetails = JSON.parse(userdetailsString);

    // If parsing failed or object is empty
    if (!userDetails) {
      return res.status(403).json("Unauthorized user");
    }

    // Attach user data to request object
    // So other routes can access it using req.user
    req.user = userDetails;

    // Allow request to continue to route
    next();
  } catch (err) {
    // Runs if JSON.parse fails
    res.status(400).json("Invalid user details format");
  }
};

/**
 * ============================
 * ERROR HANDLING AND SECURITY
 * ============================
 * Error Handling using Middleware
 */

/*
 =====================================================
 SERVER STARTUP
 =====================================================
*/

// Port number where server listens
const PORT = 3000;

// Start server
// After this runs, server is ready to receive requests
app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});
