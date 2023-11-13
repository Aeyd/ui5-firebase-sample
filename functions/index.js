const {initializeApp} = require("firebase-admin/app");
const {getFirestore} = require("firebase-admin/firestore");
const functions = require("firebase-functions");
const express = require("express");
const app = express();

// auth happens here
// because we use firebase hosting we don't have to supply credentials
initializeApp();

const db = getFirestore();

// get all products from database
app.get("/products", (req, res) => {
    db.collection("products")
        .get()
        .then(function(query) {
            // by specifying cache control response headers we can influence
            // cache lifetime on client (max-age) and CDN (s-maxage) in s
            // public needs to be set to also store dynamic content
            res.set("Cache-Control", "public, max-age=300, s-maxage=600");
            res.set("Content-Type", "application/json");
            // we can't get json directly, so we have to crate an array of objects first
            res.send({data: query.docs.map(doc => Object.assign(doc.data(), {id: doc.id}))});
        });
});

const main = express();
main.use("/api", app);

// export express instance as main
// so it can be used in firebase.json rewrite rules
exports.main = functions.https.onRequest(main);
