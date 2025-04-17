const express = require("express");
const routes = require("./src/routes/index.js"); // Correct path to the router

const app = express();
const port = 3000;

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));

// Use the router
app.use("/", routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
