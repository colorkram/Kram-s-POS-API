const express = require("express");
const router = express.Router();
const { User, Category } = require("../models");

// Home page route.
router.get("/category/:user_id", async function (req, res) {
  const user_id = req.params.user_id;
  console.log(req.params.user_id);
  const category = await Category.findAll({
    where: {
      user_id: user_id,
    },
  });
  res.send(category);
});

module.exports = router;
