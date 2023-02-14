const express = require("express");
const router = express.Router();
const { User, Category } = require("../models");

// Home page route.
router.get("/category/", async function (req, res) {
  const user_id = req.user.user_id;
  // console.log("user", req.user.user_id);
  // console.log(req.params.user_id);
  const category = await Category.findAll({
    where: {
      user_id: user_id,
    },
  });
  res.send(category);
});

router.post("/category", async function (req, res) {
  const createMenu = await Category.create({
    user_id: req.user.user_id,
    category_name: req.body.category_name,
    category_status: req.body.category_status,
  });
  //

  res.status(201).json("done");
});

module.exports = router;
