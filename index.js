const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const ejs = require("ejs");
const crypto = require("crypto");
const bodyParser = require("body-parser");

dotenv.config({ path: "./config.env" });
var mail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MyEmail,
    pass: process.env.MyPassword,
  },
});

const app = express();
app.set("views", "views");
app.set("view engine", "ejs");
app.set()
app.use('/public', express.static('public'));
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
// console.log(otp)

app.get("/", (req, res, next) => {
  res.render("home");
});

app.post("/", (req, res, next) => {
  const otp= Math.floor(Math.random()*1000000)
  var mailOptions = {
    from: "info@webstermail.com",
    to: req.body.email,
    subject: "Webster Jin",
    html: `<h1 style="font-size:8rem;">${req.body.msg} your Otp IS ${otp}</h1>`,
  };
  mail.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      res.redirect("/");
    }
  });
});

app.listen(80);
