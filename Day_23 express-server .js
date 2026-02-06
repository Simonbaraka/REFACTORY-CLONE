/*
 =====================================================
 IMPORTS
 =====================================================
*/

// Import the Express framework Express helps us create web servers and APIs easily
const express = require("express");

// Import Mongoose models from our database file
// These models allow us to interact with MongoDB collections
const { SalesModel, CreditSaleModel } = require("./Day_25_MongoDB");

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

/*
 =====================================================
 ROUTES (ENDPOINTS)
 =====================================================
*/

// Routes define how the server responds to requests

/*
 -----------------------
 HOME ROUTE
 -----------------------
*/

// GET /
// Runs when user visits http://localhost:3000/
app.get("/", (req, res) => {
  res.send("Welcome to KGL API");
});

/*
 -----------------------
 ABOUT ROUTE
 -----------------------
*/

// GET /about
// Displays company information
app.get("/about", (req, res) => {
  res.send("Karibu Groceries LTD");
});

/*
 -----------------------
 PRODUCE ROUTE
 -----------------------
*/

// GET /api/produce
// Returns list of produce in JSON format
app.get("/api/produce", (req, res) => {
  res.json(["Beans", "G-nuts"]);
});

/*
 -----------------------
 DIRECTOR TOTALS ROUTE
 -----------------------
*/

// GET /api/director/totals
// Calculates statistics from database
app.get("/api/director/totals", async (req, res) => {
  try {
    // Get all sales from database
    const sales = await SalesModel.find();

    // Calculate total amount
    const totalSales = sales.reduce((sum, s) => sum + s.amount, 0);

    // Send results
    res.status(200).json({
      totalSales,
      totalOrders: sales.length,
      totalProducts: sales.length,
    });
  } catch (err) {
    res.status(500).json("Failed to get sales");
  }
});

/*
 =====================================================
 CREATE OPERATIONS (POST)
 =====================================================
*/

/*
 -----------------------
 CREATE SALE
 -----------------------
*/

// POST /Sales
// Creates a new sale document
// Protected by userdetails middleware
app.post("/Sales", userdetails, async (req, res) => {
  try {
    // Create new sale using request body
    const sale = new SalesModel(req.body);

    // Save sale to MongoDB
    await sale.save();

    // Send success response
    res.status(201).json({
      message: "Sale saved successfully",
      data: sale,
    });
  } catch (err) {
    // Handle validation / server errors
    res.status(500).json({
      message: "Failed to save sale",
      error: err.message,
    });
  }
});

/*
 -----------------------
 CREATE CREDIT SALE
 -----------------------
*/

// POST /creditSales
// Creates new credit sale document
app.post("/creditSales", async (req, res) => {
  try {
    // Create credit sale object
    const creditSale = new CreditSaleModel(req.body);

    // Save to database
    await creditSale.save();

    // Send success response
    res.status(201).json({
      message: "Credit Sale saved",
      data: creditSale,
    });
  } catch (err) {
    res.status(400).json({
      message: "Failed to save Credit Sale",
      error: err.message,
    });
  }
});

/*
 =====================================================
 UPDATE OPERATIONS (PATCH)
 =====================================================
*/

/*
 -----------------------
 UPDATE SALE
 -----------------------
*/

// PATCH /Sales/:id
// Updates part of a sale document
app.patch("/Sales/:id", async (req, res) => {
  try {
    // Get ID from URL
    const id = req.params.id;

    // Update document
    const updatedSale = await SalesModel.findByIdAndUpdate(
      id, // Which document
      req.body, // New data
      { new: true }, // Return updated version
    );

    // If no document found
    if (!updatedSale) {
      return res.status(404).json("Sale not found");
    }

    // Send updated document
    res.status(200).json({
      message: "Update successful",
      data: updatedSale,
    });
  } catch (err) {
    res.status(500).json("Failed to update sale");
  }
});

/*
 =====================================================
 DELETE OPERATIONS
 =====================================================
*/

/*
 -----------------------
 DELETE SALE
 -----------------------
*/

// DELETE /Sales/:id
// Deletes a sale using its ID
app.delete("/Sales/:id", async (req, res) => {
  try {
    // Get ID from request URL
    const id = req.params.id;

    // Delete document
    const deletedSale = await SalesModel.findByIdAndDelete(id);

    // If sale not found
    if (!deletedSale) {
      return res.status(404).json("Sale not found");
    }

    // Send confirmation
    res.status(200).json({
      message: "Sale deleted successfully",
    });
  } catch (err) {
    res.status(500).json("Failed to delete sale");
  }
});

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
