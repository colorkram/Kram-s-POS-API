const express = require("express");
const router = express.Router();
const { User, Drawer, Bill } = require("../models");
const sequelize = require("sequelize");

router.post("/drawer", async function (req, res) {
  // console.log("req", req.user);
  const user_id = req.user.user_id;
  let currentDate = new Date().toJSON();
  const createDrawer = await Drawer.create({
    start_money: req.body.start_money,
    user_id: req.user.user_id,
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
  const closeDrawer = await Drawer.update(
    {
      close_date: currentDate,
      user_id: req.user.user_id,
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

router.get("/alldrawer/", async function (req, res) {
  const user_id = req.user.user_id;
  // console.log(req.params.user_id);
  const drawer_id = await Drawer.findAll({
    where: {
      user_id: user_id,
    },
    order: [["drawer_id", "DESC"]],
  });
  // console.log("bill", bill);
  res.send(drawer_id);
});

router.get("/currentdrawer/", async function (req, res) {
  const user_id = req.user.user_id;
  // console.log(req.params.user_id);
  const drawer_id = await Drawer.findOne({
    where: {
      user_id: user_id,
      close_date: null,
    },
  });
  // console.log("bill", bill);
  res.send(drawer_id);
});
//
//
//
//
//
//
router.patch("/currentdrawer", async function (req, res) {
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

  //   console.log(totle);
  const closeDrawer = await Drawer.update(
    {
      // close_date: currentDate,
      user_id: req.user.user_id,
      sale_money: realTotal,
      exp_drawer: totle,
    },
    {
      where: { drawer_id: drawerId },
    },
  );

  res.status(201).json({
    status: "ok",
  });
});
module.exports = router;
