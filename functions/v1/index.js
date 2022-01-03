const express = require("express");
const cors = require("cors");
const {nanoid} = require("nanoid");
const admin = require("firebase-admin");

const api = express();

admin.initializeApp();
const db = admin.firestore();

api.use(cors());
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
  }).then(() => {
    const urlReduced = `https://rduz.me/${code}`;

    console.log(`URL reduzido: ${urlReduced}`);
    res.send({
      "urlReduced": urlReduced,
    });
  }).catch((error) => {
    console.log(error);
    res.status(500).send({
      "msg": "Erro ao reduzir URL",
      "url": url,
    });
  });
});

api.use("/:code", (req, res) => {
  const code = req.params.code;

  db.collection("urls").doc(code).get().then((doc) => {
    if (doc.exists) {
      const urlFull = doc.data().url;

      console.log(`URL encontrado: ${urlFull}`);
      // res.send(`URL encontrado: <a href="${urlFull}">${urlFull}</a>`);
      res.redirect(urlFull);
    } else {
      console.log(`URL ${code} não encontrado.`);
      res.status(404).send("URL não encontrado.");
    }
  }).catch((error) => {
    console.log(error);
    res.status(500).send(`Erro ao recuperar código = ${code}`);
  });
});

module.exports = api;
