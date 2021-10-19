const express = require("express");
const api = express();

api.use("/init", (req, res) => {
  res.send("API V1");
});

module.exports = api;
