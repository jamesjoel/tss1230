const app = require("express").Router();
const Staff = require("../models/Staff");

app.get("/list", (req, res)=>{
    res.render("pages/Staff/list")
})
app.get("/add", (req, res)=>{
    res.render("pages/Staff/add")
})

module.exports = app;