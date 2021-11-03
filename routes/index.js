const express = require("express");
// Middleware to allow for routing on the node server
const router = express.Router();
// require firebase
const firebase = require("firebase/firestore/lite");
// initialize firestore database
const db = firebase.getFirestore();
// reference to blog post collection
const blogpost = db.collection("blogposts");

// get all articles from firebase
router.get("/", (req, res) => {
  // create empty array
  const blogpostsArray = [];
  // todo: get blogposts json from firebase...

  // push document from blogposts array...
  res.send(blogpostsArray);
});

module.exports = router;
