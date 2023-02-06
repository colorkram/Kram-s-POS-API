const express = require("express");
const router = express.Router();
const { Category, Menu } = require("../models");

// Home page route.
router.get("/menu/:user_id", async function (req, res) {
  const user_id = req.params.user_id;

  const whereQuery = {
    where: {
      user_id: user_id,
    },
  };
  if (req.query.cat) {
    whereQuery.where.category_id = req.query.cat;
  }

  const menu = await Menu.findAll({
    ...whereQuery,
  });
  res.send(menu);
});

router.post("/menu", async function (req, res) {
  const createMenu = await Menu.create(req.body);

  res.status(201).json(createMenu);
});

// router.patch('/menu/:id', async function (req,res){
//   const updateMenu = menu.findIndex
// })
module.exports = router;
