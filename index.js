// require("dotenv").config();

const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/twitter", (req, res) => {
  res.send("sab log pagal hai shubhsm bs achi h");
});
app.listen(process.env.PORT, () => {
  console.log(`exmple app listenting on port ${port}`);
});
