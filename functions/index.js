/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
const { logger } = require("firebase-functions");
const { initializeApp } = require('firebase-admin/app');
const { db } = require("firebase-admin/firestore");

const express = require("express");
const app = express();

initializeApp();

app.get("/products", async (req, res) => {
    const data = await db.collection("products").get();
    res.send(data)
});
		
const main = express();
main.use("/api", app);

exports.main = functions.https.onRequest(main);
