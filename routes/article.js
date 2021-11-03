const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send(`<h1>individual article</h1>
  <p>An single article will go here...</p>
  `);
});

module.exports = router;
