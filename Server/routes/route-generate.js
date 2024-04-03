const express = require("express");
const router = express.Router();
const {
  handlegeneratepassword,
} = require("../controllers/generate-password..js");

router.post("/generate", handlegeneratepassword);

module.exports = router;
