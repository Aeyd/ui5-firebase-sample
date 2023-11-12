/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
const { initializeApp, applicationDefault, cert} = require("firebase-admin/app");
const { getFirestore, Timestamp, FieldValue, Filter } = require("firebase-admin/firestore");
const functions = require("firebase-functions");
const express = require("express");
const app = express();

initializeApp();

const db = getFirestore();

app.get("/products", async (req, res) => {
    const data = await db.collection("products")
                .get()
                .then(function(query) {
                    return {data: query.docs.map(doc => Object.assign(doc.data(), {id: doc.id}))};
                });

    res.set("Cache-Control", "public, max-age=300, s-maxage=43200");
    res.set("Content-Type", "application/json");
    res.send(data)
});
		
const main = express();
main.use("/api", app);

exports.main = functions.https.onRequest(main);