const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/twitter", (req, res) => {
  res.send("sab log acche hai shubham bs pagal h");
});

app.listen(process.env.PORT, () => {
  console.log(`exmple app listenting on port ${port}`);
});
