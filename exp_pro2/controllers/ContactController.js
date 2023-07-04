const app = require("express").Router();

app.get("/", (req, res)=>{
    res.render("pages/Contact/contact");
})

module.exports = app;