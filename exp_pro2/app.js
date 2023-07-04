const express = require("express");
const app = express();
const AllRotues = require("./config/AllRoutes");



app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));
app.use(express.json()); // req.body
app.use(express.urlencoded({ extended : true })); // req.params


app.use(AllRotues);

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running with port - ", port);
})