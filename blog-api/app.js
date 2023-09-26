const express = require("express");
const app = express();
const routes = require("./config/allRoutes");
const cors = require("cors");
const upload = require("express-fileupload")

app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.use(express.static(__dirname+"/assets"));

app.use(upload());
app.use(cors());
app.use(routes);

const port = process.env.PORT || 8080;

console.log("FIRST -------------")

app.listen(port, ()=>{
    // console.log("server running with port ", port);
    console.log("SECOND -------------")
    console.log("THIRD -------------")
})
