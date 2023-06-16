const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));

// flipkart.com
app.get("/", (req, res)=>{
    res.render("pages/home");
})
// flipkart.com/about
app.get("/about", (req, res)=>{
    res.render("pages/about");
})
app.get("/contact", (req, res)=>{
    res.render("pages/contact");
})
app.get("/help", (req, res)=>{
    res.render("pages/help");
})


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running");
})
