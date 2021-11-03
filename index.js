const express = require("express");
//Initiate Express
const app = express();
// Setting port - dynamically with Heroku
const port = process.env.PORT || 4000;
// Import Firebase
const firebase = require("firebase/app");
// Get confirguration object so we can communicate with Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB18SRUt_moRX2GURnRU-diPuM68dC44_M",
  authDomain: "exercise-four-28d23.firebaseapp.com",
  projectId: "exercise-four-28d23",
  storageBucket: "exercise-four-28d23.appspot.com",
  messagingSenderId: "640568840299",
  appId: "1:640568840299:web:f3315d804e32b5be43212e",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Routes for directing user to correct place
const indexRoute = require("./routes/index");
const article = require("./routes/article");
const createArticle = require("./routes/createArticle");

// Tell Express to use routes...
app.use("/", indexRoute);
app.use("/article", article);
app.use("/create", createArticle);

// Listen for requests on the port - if a user visits then send a result
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
