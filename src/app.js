require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const chalk = require("chalk");
// const morgan = require("morgan");
// const helmet = require("helmet");
// const rateLimit = require("express-rate-limit");
const db = require("./models");
const app = express();
app.use(cors());
const drawerController = require("./controller/drawer-controller");
const categoryController = require("./controller/category-controller");
const menuController = require("./controller/menu-controller");
const billController = require("./controller/bill-controller");
const userController = require("./controller/user-controller");
const bodyParser = require("body-parser");
const authenticateMiddleware = require("./middlewares/authenticate");

// app.use(
//   rateLimit({
//     windowMs: 1000 * 60 * 15,
//     max: 1000,
//     message: { message: "too many requests, please try again later" },
//   }),
// );

// …
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/category", authenticateMiddleware, categoryController);
app.use("/menu", authenticateMiddleware, menuController);
app.use("/drawer", authenticateMiddleware, drawerController);
app.use("/bill", authenticateMiddleware, billController);
app.use("/user", userController);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server running on port: ${port}`));
// chalk.yellowBright.italic.bold
