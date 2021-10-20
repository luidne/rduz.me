const express = require("express");
const {nanoid} = require("nanoid");

const api = express();

api.use("/about", (req, res) => {
  res.send("API V1");
});

api.use("/do", (req, res) => {
  const idGenerated = nanoid(10);
  res.send(`Códido do URL reduzida: ${idGenerated}`);
});

module.exports = api;
