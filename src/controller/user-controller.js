const express = require("express");
const router = express.Router();
const { User } = require("../models");
// const Joi = require('joi');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async function (req, res) {
  console.log("----", req.body);
  const keys = await bcrypt.hash(req.body.password, 10);
  await User.create({
    shop_name: req.body.shop_name,
    username: req.body.username,
    password: keys,
  });

  res.status(201).json(req.body.password);
});

// router.post("/login", async function (req, res) {
//   console.log("----", req.body);
//   const createUser = await User.create(req.body);

//   res.status(201).json(createUser);
// });
router.post("/login", async (req, res, next) => {
  try {
    console.log("req.body.username", req.body);
    const user = await User.findOne({ where: { username: req.body.username } });
    if (!user) {
      return next(new CustomError("invalid email or password", 400));
    }
    // 3. compare password
    const isCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isCorrect) {
      return next(new CustomError("invalid email or password", 400));
    }
    // 4. gen jwt
    const payload = {
      user_id: user.user_id,
      username: user.username,
      shop_name: user.shop_name,
    };
    console.log("payload", payload);
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: 60 * 60 * 24 * 7,
    });
    console.log("token", token);
    // 5. sent response
    res.status(200).json({ token });
    // } catch (err) {
    //   next(err);
    // }
  } catch (error) {}
});
module.exports = router;
