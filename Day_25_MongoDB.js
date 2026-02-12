/*
 ===================================
 IMPORTS
 ===================================
*/

const mongoose = require("mongoose");
require("dotenv").config(); // helps import secrets from a .env file created
/*
 ===================================
 DATABASE CONNECTION
 ===================================
*/

// MongoDB connection URI
const URI = process.env.MONGO_URI; //imported URI from env

// Connect using Mongoose
mongoose
  .connect(URI)
  .then(() => {
    console.log("Connected to MongoDB (via Mongoose)");
  })
  .catch((err) => {
    console.log("Connection Error:", err);
  });

/*
 ===================================
 NATIVE / OLD TECHNIQUE (Without Models)
 ===================================
*/

// Get raw MongoDB connection
const mongodb = mongoose.connection;

// When database is ready
mongodb.on("open", async () => {
  console.log("Database is open (Native MongoDB Access)");

  try {
    // Access collection directly (OLD WAY)
    const salesCollection = mongodb.db.collection("Sales");

    console.log("Sales Collection:", salesCollection.collectionName);

    // Find all documents (OLD WAY)
    const salesData = await salesCollection.find({}).toArray();

    console.log("Sales Data (Old Way):");
    console.log(salesData);
  } catch (error) {
    console.log("Native DB Error:", error);
  }
});

/*
 ===================================
 MONGOOSE / MODERN TECHNIQUE (With Models)
 ===================================
*/

/*
 ---------
 SALES SCHEMA
 ---------
*/

const SalesSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },

  customerName: {
    type: String,
    required: true,
  },

  discount: {
    type: Number,
    default: 0,
  },
});

/*
 ---------
 CREDIT SALE SCHEMA
 ---------
*/

const CreditSaleSchema = new mongoose.Schema({
  buyerName: {
    type: String,
    required: true,
  },

  nationalId: {
    type: Number,
    required: true,
  },

  amountDue: {
    type: Number,
    required: true,
    min: 2000,
  },
});

/*
 ===================================
 MODELS (For CRUD using Mongoose)
 ===================================
*/

const SalesModel = mongoose.model("Sales", SalesSchema);
const CreditSaleModel = mongoose.model("CreditSale", CreditSaleSchema);

/*
 ===================================
 SAMPLE CREATE (Mongoose Way)
 ===================================
*/

// Example: Insert data using Mongoose
async function createSampleSale() {
  try {
    const sale = new SalesModel({
      amount: 40000,
      customerName: "Racheal",
      discount: 2000,
    });

    await sale.save();

    console.log("Sale saved (Mongoose Way)");
  } catch (err) {
    console.log("Save Error:", err);
  }
}

// Uncomment to run once
// createSampleSale();

/*
 ===================================
 SAMPLE UPDATE (Mongoose Way)
 ===================================
*/

// Example update function
async function updateSale(id, newData) {
  try {
    const updated = await SalesModel.findByIdAndUpdate(id, newData, {
      new: true,
    });

    console.log("Updated Sale:", updated);
  } catch (err) {
    console.log("Update Error:", err);
  }
}

// Example usage (replace with real ID)
// updateSale("65a123456789abcd12345678", { amount: 25000 });

/*
 ===================================
 EXPORTS
 ===================================
*/

module.exports = {
  mongoose,
  mongodb, // Old / native connection
  SalesModel, // Mongoose model
  CreditSaleModel, // Mongoose model
};
