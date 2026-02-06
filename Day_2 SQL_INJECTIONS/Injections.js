const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

//  NO SECURITY MIDDLEWARE
app.use(bodyParser.json());
app.use(express.static("public"));

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/insecure_demo")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

//  INSECURE SCHEMA (NO VALIDATION)
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

//  CREATE TEST USER WITH PLAIN TEXT PASSWORD
async function createUser() {
  const exists = await User.findOne({ username: "admin" });
  if (!exists) {
    await User.create({
      username: "admin",
      password: "admin123",
    });
    console.log("Test user created: admin / admin123");
  }
}
createUser();

//  INSECURE LOGIN ENDPOINT
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  //  NO TYPE CHECK
  //  NO SANITIZATION
  //  NO PASSWORD HASHING
  //  DIRECT OBJECT INJECTION

  const user = await User.findOne({
    username: username,
    password: password,
  });

  if (user) {
    res.send("Login successful");
  } else {
    res.send("Invalid credentials");
  }
});

// Start server
app.listen(3000, () => {
  console.log(" Insecure app running on http://localhost:3000");
});
