const express = require("express");
const mongoose = require("mongoose");
const { body, validationResult } = require("express-validator");
const path = require("path");

const app = express();

// Middleware to parse JSON
app.use(express.json());

/**
 * MANUAL SANITIZER
 * This does exactly what express-mongo-sanitize was supposed to do.
 * It recursively looks through the data and removes any keys starting with '$'.
 */
const sanitizeData = (obj) => {
  if (obj instanceof Object) {
    for (const key in obj) {
      if (key.startsWith("$")) {
        console.log(`[SECURITY] Removing forbidden key: ${key}`);
        delete obj[key];
      } else {
        sanitizeData(obj[key]);
      }
    }
  }
  return obj;
};

// Apply our manual sanitizer to all incoming requests
app.use((req, res, next) => {
  req.body = sanitizeData(req.body);
  next();
});

// Database connection (Using 127.0.0.1 for stability)
mongoose
  .connect("mongodb://127.0.0.1:27017/karibu_day2")
  .then(() => console.log("✅ Connected to MongoDB successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Database Model
const Credit = mongoose.model("Credit", {
  buyerName: String,
  nin: String,
  amountDue: Number,
});

// SECURE ROUTE: Recording a Credit Sale
app.post(
  "/api/credit",
  [
    // Validation Rules from the Karibu Project Brief
    body("buyerName")
      .isAlphanumeric()
      .withMessage("Name must be alphanumeric")
      .isLength({ min: 2 }),
    body("nin")
      .isLength({ min: 14, max: 14 })
      .withMessage("NIN must be 14 characters"),
    body("amountDue")
      .isInt({ min: 10000 })
      .withMessage("Amount must be at least 10,000 UgX"),
  ],
  async (req, res) => {
    // Check validation results
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
      // Whitelisting: ONLY take what we expect
      const { buyerName, nin, amountDue } = req.body;

      const newCredit = new Credit({ buyerName, nin, amountDue });
      await newCredit.save();

      res
        .status(201)
        .json({ success: true, message: "Credit record saved securely!" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  },
);

// Serve the index.html filef
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Karibu Security Demo running on http://127.0.0.1:${PORT}`);
});
