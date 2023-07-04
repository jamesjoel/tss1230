const express = require("express");
const app = express.Router();

const HomeController = require("../controllers/HomeController");
const AboutController = require("../controllers/AboutController");

app.use("/", HomeController)
app.use("/about", AboutController)

module.exports = app;