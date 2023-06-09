const express = require("express");
const app = express();

app.use(express.static(__dirname+"/assets"));
app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    // res.sendFile(__dirname+"/home.html");

    let a = "Nidhi";

    let obj = { name1 : a, name2 : "rohit", city : "indore" };

    res.render("home", obj);
})

app.get("/about", (req, res)=>{
    let obj = { data : ["red", "green", "blue"] };
    res.render("about", obj);
})

const port = 3000;
app.listen(port, ()=>{
    console.log("Server Running");
})

