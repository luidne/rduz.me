const express = require("express");
const cors = require("cors");
const {nanoid} = require("nanoid");
const admin = require("firebase-admin");
const functions = require("firebase-functions");

const api = express();
const corsOptions = functions.config().cors.options;

admin.initializeApp();
const db = admin.firestore();

api.use(cors(corsOptions));
api.use(express.json());
api.use(express.urlencoded({extended: true}));

api.use("/about", (req, res) => {
  res.send("API V1");
});

api.post("/do", (req, res) => {
  const url = req.body.url;
  const code = nanoid(10);

  db.collection("urls").doc(code).set({
    code: code,
    url: url,
    date: admin.firestore.FieldValue.serverTimestamp(),
    visits: 0,
  }).then(() => {
    console.log(`URL reduzido: ${code}`);
    res.send({
      urlCode: code,
    });
  }).catch((error) => {
    console.log(error);
    res.status(500).send({
      message: "Erro ao reduzir URL",
      url: url,
    });
  });
});

api.get("/details/:code", (req, res) => {
  const code = req.params.code;

  db.collection("urls").doc(code).get().then((doc) => {
    if (doc.exists) {
      res.send(doc.data());
    } else {
      console.log(`URL ${code} não encontrado.`);
      res.status(404).send({
        urlCode: code,
        message: "URL não encontrado.",
      });
    }
  }).catch((error) => {
    console.log(error);
    res.status(500).send({
      urlCode: code,
      message: "Erro ao recuperar código de URL",
    });
  });
});

api.use("/:code", (req, res) => {
  const code = req.params.code;

  db.collection("urls").doc(code).get().then((doc) => {
    if (doc.exists) {
      const urlFull = doc.data().url;
      console.log(`URL encontrado: ${urlFull}`);

      doc.ref.update({
        visits: doc.data().visits + 1,
      });

      res.redirect(urlFull);
    } else {
      console.log(`URL ${code} não encontrado.`);
      res.redirect("/notfound");
    }
  }).catch((error) => {
    console.log(error);
    res.status(500).send({
      urlCode: code,
      message: "Erro ao recuperar código de URL",
    });
  });
});

module.exports = api;
