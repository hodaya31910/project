const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const rout = require("./rout/api");
const request = require("request");
const bcrypt = require("bcryptjs");
require("./config/database").connect();

app.use(bodyParser.json());

dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", rout);

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:4200");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  // res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.listen(4000, function () {
  console.log("listening on port 4000");
  app.get;
});

// const auth = require("./middleware/auth");

// app.post("/welcome", auth, (req, res) => {
//   res.status(200).send("Welcome  ");
// });
