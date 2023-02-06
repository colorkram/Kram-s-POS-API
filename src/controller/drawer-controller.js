const express = require("express");
const router = express.Router();
const { User, Drawer, Bill } = require("../models");
const sequelize = require("sequelize");

router.post("/drawer", async function (req, res) {
  let currentDate = new Date().toJSON().slice(0, 10);
  const createDrawer = await Drawer.create({
    start_money: req.body.start_money,
    user_id: req.body.user_id,
    open_date: currentDate,
  });

  res.status(201).json(createDrawer);
});

router.patch("/close-drawer", async function (req, res) {
  const startMenu = await Drawer.findOne({
    where: { drawer_id: req.body.drawer_id },
  }); //findOne เพื่อหาค่าเริ้มต้นของถาดเก็บเงิน
  console.log("test test test", startMenu.start_money);
  let currentDate = new Date().toJSON();
  const drawerId = req.body.drawer_id;

  const sumsung = await Bill.findAll({
    attributes: [[sequelize.fn("sum", sequelize.col("total")), "togeter"]],
    raw: true,
    where: { drawer_id: req.body.drawer_id },

    // group: ["Bill.drawer_id"],

    // order: sequelize.literal('total DESC')
  });
  const realTotal = sumsung[0].togeter;
  console.log("sumsung", realTotal);

  const totle = +realTotal + startMenu.start_money;
  const difValue = req.body.act_drawer - totle;

  //   console.log(totle);
  const closeDrawe = await Drawer.update(
    {
      close_date: currentDate,
      sale_money: realTotal,
      exp_drawer: totle,
      act_drawer: req.body.act_drawer,
      dif: difValue,
    },
    {
      where: { drawer_id: drawerId },
    },
  );

  res.status(201).json({
    status: "ok",
  });
});

router.post("/some-path/:test", async function (req, res) {
  // req.params == {test: 444}
  // req.query == {aaa: 555, bbb: 666}
  // req.body == {sale_money: 50, user_id: 1}

  const saleMoney = req.body.sale_money;
  const UserId = req.body.user_id;

  console.log("saleMoney:", saleMoney);
  console.log("saleMoney:", req.body.sale_money);

  res.send("ok");
});

module.exports = router;
