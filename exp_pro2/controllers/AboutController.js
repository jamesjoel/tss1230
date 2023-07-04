const app = require("express").Router();

// localhost:3000/about/
app.get("/", (req, res)=>{
    res.render("pages/About/about");
})

// localhost:3000/about/info
app.get("/info", (req, res)=>{
    res.render("pages/About/info");
})

app.get("/info/more", (req, res)=>{
    res.render("pages/About/more")
})

module.exports = app;