const express = require("express");
const {nanoid} = require("nanoid");
const admin = require("firebase-admin");

const api = express();

admin.initializeApp();
const db = admin.firestore();

api.use("/about", (req, res) => {
  res.send("API V1");
});

api.use("/do/:url", (req, res) => {
  const url = req.params.url;
  const idGenerated = nanoid(10);

  db.collection("urls").doc(idGenerated).set({
    id: idGenerated,
    url: url,
    date: admin.firestore.FieldValue.serverTimestamp(),
  }).then(() => {
    console.log(`URL reduzida: https://hostname/${idGenerated}`);
    res.send(`URL reduzida: https://hostname/${idGenerated}`);
  }).catch((error) => {
    console.log(`Erro ao reduzir URL = ${url}`);
    res.status(500).send(error);
  });
});

module.exports = api;
