const express = require("express");
const app = express();

// james.com


app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/home.html");
});


app.get("/about",(req, res)=>{
    res.sendFile(__dirname+"/about.html");
});


app.get("/contact", (req, res)=>{
    res.sendFile(__dirname+"/contact.html");
});

app.get("/help", (req, res)=>{
    res.sendFile(__dirname+"/abc.html");
})





app.listen(3000, ()=>{
    console.log("Server Running")
});

