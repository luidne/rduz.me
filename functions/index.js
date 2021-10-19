const functions = require("firebase-functions");
const apiV1 = require("./v1");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.apiV1 = functions.https.onRequest(apiV1);
