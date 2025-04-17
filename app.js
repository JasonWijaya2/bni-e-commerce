// Import Express
const express = require("express");
// Invoke express function
const app = express();
// Initialize Port 3000
const port = 3000;

// For parsing application/json
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Code Here!!!

// Using Listen Method to listen port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
