const express = require("express");
const router = express.Router();
const { Bill, Menu, Drawer } = require("../models");

router.post("/bill", async function (req, res) {
  const createBill = await Bill.create({
    total: req.body.total,
    change_money: req.body.change_money,
    payment_amout: req.body.payment_amout,
    user_id: req.body.user_id,
    drawer_id: req.body.drawer_id,
  });

  res.status(201).json(createBill);
});

router.get("/bill/:bill_id", async function (req, res) {
  const bill_id = req.params.bill_id;
  // console.log(req.params.user_id);
  const bill = await Bill.findAll({
    where: {
      bill_id: bill_id,
    },
    include: [
      {
        model: Menu,
      },
    ],
  });
  console.log("bill", bill);
  res.send(bill);
});

router.get("/allbill/:drawer_id", async function (req, res) {
  const drawer_id = req.params.drawer_id;
  // console.log(req.params.user_id);
  const allbill = await Bill.findAll({
    where: {
      drawer_id: drawer_id,
    },
  });
  // console.log("bill", bill);
  res.send(allbill);
});
module.exports = router;
