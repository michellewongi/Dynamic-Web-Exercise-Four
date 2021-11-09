const express = require("express");
// Middleware to allow for routing on the node server
const router = express.Router();
// require firebase
const firestore = require("firebase/firestore");
// initialize firestore database
const db = firestore.getFirestore();

// get all articles from firebase
router.get("/", (req, res) => {
  const blogpost = firestore.getDocs(firestore.collection(db, "blogpost"));
  const blogpostArray = [];
  blogpost
    .then((response) => {
      response.forEach((doc) => {
        // push document into array everytime the query loops over
        blogpostArray.push(doc.data());
      });
      return res.send(blogpostArray);
    })
    .catch(function (error) {
      console.log("Error:", error);
      return res.send(error);
    });
});

module.exports = router;
