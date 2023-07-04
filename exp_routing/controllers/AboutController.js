const express = require("express");
const app = express.Router();

app.get("/", (req, res)=>{
    res.render("pages/About/about");
})
app.get("/more", (req, res)=>{
    res.render("pages/About/more");
})
app.get("/info", (req, res)=>{
    res.render("pages/About/info");
})

module.exports = app;