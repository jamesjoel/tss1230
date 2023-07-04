const app = require("express").Router();

app.get("/", (req, res)=>{
    res.render("pages/Home/home");
})

module.exports = app;