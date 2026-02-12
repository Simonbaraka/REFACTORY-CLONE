const express = require("express");
const { model } = require("mongoose");

const router = express().Router;

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

/**This route returns saale by id */

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

module.exports = { router };
