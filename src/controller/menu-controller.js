const express = require("express");
const router = express.Router();
const { Category, Menu } = require("../models");

// Home page route.
router.get("/menu/:user_id", async function (req, res) {
  const user_id = req.params.user_id;

  const whereQuery = {
    where: {
      user_id: user_id,
      menu_status: 1,
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

router.patch("/removemenu", async function (req, res) {
  // const startMenu = await Menu.findOne({
  //   where: { menu_id: req.body.menu_id },
  // }); //findOne เพื่อหาค่าเริ้มต้นของถาดเก็บเงิน

  const removeMenu = await Menu.update(
    {
      // user_id: req.user.user_id,
      menu_status: 0,
    },
    {
      where: { menu_id: req.body.menu_id },
    },
  );

  res.status(201).json("done");
});
// router.patch('/menu/:id', async function (req,res){
//   const updateMenu = menu.findIndex
// })
module.exports = router;
