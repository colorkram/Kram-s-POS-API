const express = require("express");
const router = express.Router();
const { Bill, Menu, Drawer, Item } = require("../models");

router.post("/bill", async function (req, res) {
  const createBill = await Bill.create({
    total: req.body.total,
    change_money: req.body.change_money,
    payment_amout: req.body.payment_amout,
    user_id: req.body.user_id,
    drawer_id: req.body.drawer_id,
  });
  console.log(createBill);

  const createItem = await Item.create({
    // item_id: req.body.item_id,
    item_price: req.body.item_price, //มาจากหน้าบ้าน
    bill_id: createBill.bill_id,
    menu_id: req.body.menu_id, //มาจากหน้าบ้าน
    payment_type: req.body.payment_type, // มาจากหน้าบ้าน
    selectOrder: req.body.map(e => [
      {
        menu_id: e.menu_id,
        menu_name: e.menu_name,
        price: e.price,
        image: e.image,
        user_id: e.user_id,
        category_id: e.category_id,
        action: e.action,
      },
    ]),
  });
  console.log(selectOrder);
  res.status(201).json(createItem);
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
