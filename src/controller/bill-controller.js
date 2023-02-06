const express = require("express");
const router = express.Router();
const { Bill, Menu } = require("../models");

router.post("/bill", async function (req, res) {
  const createBill = await Bill.create(req.body);

  res.status(201).json(createMenu);
});
