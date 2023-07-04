// const express = require("express");
// const app = express.Router();
const app  = require("express").Router();
// const HomeController = require("../controllers/HomeController")
// const AboutController = require("../controllers/AboutController");

app.use("/", require("../controllers/HomeController"));
app.use("/about", require("../controllers/AboutController"));
app.use("/contact", require("../controllers/ContactController"));
app.use("/staff", require("../controllers/StaffController"));

module.exports = app;
