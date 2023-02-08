const express = require("express");
const router = express.Router();
const { User } = require("../models");

router.post("/register", async function (req, res) {
  const createUser = await User.create(req.body);

  res.status(201).json(createUser);
});

module.exports = router;
