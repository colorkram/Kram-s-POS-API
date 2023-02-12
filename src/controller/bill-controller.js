const express = require("express");
const router = express.Router();
const { Bill, Menu, Drawer, Item } = require("../models");

router.post("/bill", async function (req, res) {
  const createBill = await Bill.create({
    total: req.body.total,
    change_money: req.body.change_money,
    payment_amout: req.body.payment_amout,
    user_id: req.user.user_id,
    drawer_id: req.body.drawer_id,
    payment_type: req.body.payment_type,
  });
  console.log(createBill);

  const createItem = await Item.bulkCreate(
    req.body.selectOrder.map(data => ({
      item_price: data.price,
      bill_id: createBill.bill_id,
      menu_id: data.menu_id,
      menu_name_item: data.menu_name,
      qty: data.qty,
    })),
  );
  console.log(req.body.selectOrder);

  res.status(201).json({
    createBill: createBill,
    createItem: createItem,
  });
});

router.get("/:bill_id", async function (req, res) {
  const bill_id = req.params.bill_id;
  // console.log(req.params.user_id);
  const bill = await Bill.findOne({
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

//  const bill = await Bill.findAll({

//     where: {
//       bill_id: bill_id,
//     },
//     include: [
//       {
//         model: Menu,
//       },
//     ],
//   });
//   console.log("bill", bill);
//   res.send(bill);
// });

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
