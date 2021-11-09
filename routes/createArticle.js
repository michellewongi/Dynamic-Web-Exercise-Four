const express = require("express");

const router = express.Router();

// create form for submitting...
const form = `
<h1>Create Article</h1>
<form action="/create/submit">
  <div style="
   display: flex;
   flex-direction: column;
   margin-bottom: 20px;
   max-width: 325px;
   ">
    <label for="articleTitle">
      Article title
    </label>
    <input type="text" name="articleTitle" placeholder="type article title..."/>
    <label for="articleText">
      Article Text
    </label>
    <input type="text" name="articleText" placeholder="type article text..."/>
    <label for ="author">
      Author
    </label>
    <input type="text" name="author" placeholder="Author name..."/>
  </div>
    <button type="submit">Submit Article</button>
</form>
`;

// require Firestore
const firestore = require("firebase/firestore");

// reference Firestore
const db = firestore.getFirestore();

// serves web form for users
router.get("/", (req, res) => {
  res.send(form);
});

// API endpoint for submitting data through the form
router.get("/submit", (req, res) => {
  const queryParams = req.query; // query params from URL
  const title = queryParams.articleTitle;
  const text = queryParams.articleText;
  const author = queryParams.author;

  //create ID from title
  const idFromTitle = title.replace(/\s+/g, "-").toLowerCase();
  // submit post to Firebase
  const setBlogPost = firestore.setDoc(
    firestore.doc(db, "blogpost", idFromTitle),
    {
      title,
      text,
      author,
    }
  );

  setBlogPost
    .then((response) => {
      res.send(`
      <h1>Submission Successful</h1>
      <p><a href="/create">Add another post</a></p>
      `);
    })
    .catch((error) => {
      console.log(error);
      res.send(`Error submitting: ${error.toString()}`);
    });
});

module.exports = router;
