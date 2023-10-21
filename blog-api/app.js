const express = require("express");
const app = express();
const routes = require("./config/allRoutes");
const cors = require("cors");
const upload = require("express-fileupload")

// for server
const root = require("path").join(__dirname, "build");


app.use(express.static(__dirname+"/assets"));
app.use(express.json());
app.use(express.urlencoded({ extended : true}));

// for server
app.use(express.static(root));

app.use(upload());
app.use(cors());
app.use(routes);

// for server
app.get("*", (req, res)=>{
    res.sendFile("index.html", {root});
    // Demo Proejct : User Blog Project
})



const port = process.env.PORT || 8080;



app.listen(port, ()=>{
    console.log("server running with port ", port);
   
})


// jamesjoel
// 3NOLjUjPnAAvuAIn
