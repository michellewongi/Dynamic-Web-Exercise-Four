const express = require("express");
const router = express.Router();
const firestore = require("firebase/firestore");
const db = firestore.getFirestore();

// get a single article by ID
// accessible at /article/:id
router.get("/:id", (req, res) => {
  const postId = req.params.id;
  const blogpost = firestore.getDoc(firestore.doc(db, "blogpost", postId));

  blogpost
    .then((response) => {
      const post = response.data();
      if (post) {
        return res.send(post);
      } else {
        return res.send(`No doc lol`);
      }
    })
    .catch((error) => {
      res.send(`No doc...sorry`);
    });
});

router.get("/", (req, res) => {
  res.send(`Please include an ID`);
});

module.exports = router;
