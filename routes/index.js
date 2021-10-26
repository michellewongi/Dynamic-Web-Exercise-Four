const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hellow World in Routes");
});

module.express = router;
