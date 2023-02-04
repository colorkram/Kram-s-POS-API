require("dotenv").config();
const express = require("express");
// const cors = require("cors");
// const chalk = require("chalk");
// const morgan = require("morgan");
// const helmet = require("helmet");
// const rateLimit = require("express-rate-limit");
const db = require("./models");
const app = express();

// app.use(
//   rateLimit({
//     windowMs: 1000 * 60 * 15,
//     max: 1000,
//     message: { message: "too many requests, please try again later" },
//   }),
// );
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server running on port: ${port}`));
// chalk.yellowBright.italic.bold
